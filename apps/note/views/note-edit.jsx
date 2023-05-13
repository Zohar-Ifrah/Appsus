const { useEffect, useState, useRef } = React
const { useParams, useNavigate } = ReactRouterDOM

import { noteService } from "../services/note.service.js"



export function NoteEdit({ note, onSaveNote }) {

    const [noteToEdit, setNoteToEdit] = useState(noteService.getEmptyNote())
    const inputRef = useRef()
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        if (params.noteId) {
            loadNote()
        }
    }, [])

    function loadNote() {
        noteService.get(params.noteId)
            .then(setNoteToEdit)
            .catch(err => {
                console.log('Had issued in note edit:', err);
                navigate('/note')
            })
    }

    function handleChange({ target }) {
        const field = target.name
        const value = target.value
        setNoteToEdit(prevNote => ({ ...prevNote, [field]: value }))
    }

    function onSaveNote(ev) {
        ev.preventDefault()
        if (!noteToEdit.title) {
            console.log(noteToEdit);
            inputRef.current.focus()
            return
        }

        noteService.save(noteToEdit)
            .then(() => {
                navigate('/note')
            })
            .catch(err => {
                console.log('Had issued in note edit:', err);
            })
    }

    const { type, title, isPinned } = noteToEdit
    return (
        <section className="note-edit">
            <h2>{noteToEdit.id ? 'Edit' : 'Add'} Note</h2>
            <form onSubmit={onSaveNote} >
            <label htmlFor="type">Type:</label>
          <select
            value={type}
            onChange={handleChange}
            name="type"
            id="type"
            placeholder="Select the type of the note"
          >
            <option value="NoteImg">Image</option>
            <option value="NoteTodos">Todo</option>
            <option value="NoteVideo">Video</option>
            <option value="NoteAudio">Audio</option>
            </select>

                <label htmlFor="title">title</label>
                <input onChange={handleChange} value={title} type="text" name="title" id="title" />


                <label htmlFor="isPinned">Pinned</label>
                <input onChange={handleChange} value={isPinned} type="checkbox" name="isPinned" id="isPinned" />





                <button>{noteToEdit.id ? 'Save' : 'Add'}</button>

            </form>

        </section>



    )

}