const { Link, useSearchParams } = ReactRouterDOM
const { useEffect, useState } = React

import { NoteFilter } from "../cmps/note-filter.jsx"
// import { NotePreview } from "../cmps/note-preview.jsx"
import { noteService } from "../services/note.service.js"
import { NoteList } from "../cmps/note-list.jsx"
import { DataTable } from "../cmps/data-table.jsx"
// import { NotePreview } from './note-preview.jsx'
import { NoteDetails } from "./note-details.jsx"


export function NoteIndex() {

    const [notes, setNotes] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [selectedNote, setSelectedNote] = useState(null)
    const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter())

    useEffect(() => {
        loadNotes()
        setSearchParams(filterBy)
    }, [filterBy])

    function loadNotes() {
        noteService.query(filterBy).then(notes => setNotes(notes))
    }

    function onRemoveNote(noteId) {
        noteService.remove(noteId).then(() => {
            const updatedNotes = notes.filter(note => note.id !== noteId)
            setNotes(updatedNotes)
        })
    }

    function onSetFilter(filterBy) {
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, ...filterBy }))
    }

    return (
        <main className="notes-index">
          
                {!selectedNote && <React.Fragment>
                    <section className="filter-notes">
                    <NoteFilter onSetFilter={onSetFilter} filterBy={filterBy} />
 
                    <Link to="/note/edit">Add Note</Link>


                    </section>
                    <section className="note-list">
                    <NoteList notes={notes} onRemoveNote={onRemoveNote} />
                    
            </section>
                </React.Fragment>}
  
            {selectedNote && <NoteDetails onBack={() => setSelectedNote(null)} note={selectedNote} />}
        </main>
    )
}

