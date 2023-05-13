import { noteService } from "../services/note.service.js"
import { NoteType } from "./note-type.jsx"

const { useEffect, useState } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

export function NoteDetails() {

    const [note, setNote] = useState(null)
    const { noteId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadNote()
    }, [])

    function loadNote() {
        console.log(noteId);
        noteService.get(noteId)
            .then(setNote)
            .catch(err => {
                console.log('Had issued in note details:', err);
                onBack()
            })
    }

    function onBack() {
        navigate('/note')
    }

    if (!note) return <div>Loading...</div>
    return (
        <section className="note-details">
            <NoteType note={note} />
            <h1></h1>
            <section>
                <button onClick={onBack}>Back</button>
            </section>
        </section>
    )
}