const { useEffect, useState } = React
const { useParams, useNavigate } = ReactRouterDOM

import { showErrorMsg } from "../services/event-bus.service.js"
import { noteService } from "../services/note.service.js"



export function NoteEdit() {

    const [noteToEdit, setNoteToEdit] = useState(noteService.getEmptyNote()) //BBB
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {

        console.log('gggggggggg')
    }, [])

    function loadNote() {
        noteService.get(params.noteId)
            .then(setNoteToEdit)
            .catch(err => {
                console.log('Had issued in note edit:', err)
                navigate('/note')
                showErrorMsg('Note not found!')
            })
    }

    function handleChange({ target }) {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') :
            target.type === 'text' ? target.value :
                target.checked
        if (field === 'info') {
            setNoteToEdit(prevNote => ({
                ...prevNote,
                info: {
                    ...prevBook.listPrice,
                    title: value
                }
            }))
        } 
        else {
            setNoteToEdit(prevNote => ({ ...prevNote, [field]: value }))
        }
    }
   

    function onSaveNote(ev) {
        ev.preventDefault()
        noteService.save(noteToEdit)
            .then(() => {
                showSuccessMsg('Note updated successfully')
                navigate('/note')
            })
    }

    const { txt, title } = noteToEdit
//     console.log(noteToEdit.title);
    console.log('hi');
    return (
        <section className="note-edit">
            <h2>{noteToEdit.id ? 'Edit' : 'Add'} Note</h2> 

            <form onSubmit={onSaveNote} >
                <label htmlFor="title">{noteToEdit.txt}</label>
                <input onChange={handleChange} value={title} type="text" name="title" id="title" />

                <label htmlFor="price">Price:</label>

                
                <button>{noteToEdit.id ? 'Save' : 'Add'}</button>
            </form>

        </section>
        
    )

}