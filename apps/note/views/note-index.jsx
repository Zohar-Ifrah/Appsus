const { Link } = ReactRouterDOM
const { useEffect, useState } = React

import { NoteFilter } from "../cmps/note-filter.jsx"
import { NotePreview } from "../cmps/note-preview.jsx"
// import { NoteList } from "../cmps/note-list.jsx"
import { noteService } from "../services/note.service.js"
// import { NotePreview } from './note-preview.jsx'
// import { NoteDetails } from "./note-details.jsx"

export function NoteIndex() {

    const [notes, setNotes] = useState([])
    const [selectedNote, setSelectedNote] = useState(null)
    const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter())

    useEffect(() => {
        loadNotes()
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
        <section className="notes-page">
            <div className="note-index" >
                {!selectedNote && <React.Fragment>
                    <NoteFilter onSetFilter={onSetFilter} filterBy={filterBy} />
                    <div className="add-note">
                        <Link to="//edit"><button className="add-note-btn">Add note</button></Link>

                    </div>
                    <NotePreview notes={notes} onRemoveNote={onRemoveNote} />
                </React.Fragment>}
            </div>
            {selectedNote && <NoteDetails onBack={() => setSelectedNote(null)} note={selectedNote} />}
        </section>

    )
}

