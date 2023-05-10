// import { LongTxt } from "../cmps/long-txt.jsx"
import { noteService } from "../services/note.service.js"


const { useEffect, useState } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

export function NoteDetails() {

    const [note, setNote] = useState(null)
    const [nextNoteId, setNextNoteId] = useState(null)
    const [prevNoteId, setPrevNoteId] = useState(null)
    const { noteId } = useParams()
    const navigate = useNavigate()
    // console.log('params:', noteId)

    useEffect(() => {
        loadNote()
        loadNextNoteId()
        loadPrevNoteId()
    }, [noteId])

    function loadNote() {
        noteService.get(noteId)
            .then(setNote)
            .catch(err => {
                console.log('Had issued in note details:', err);
                // navigate('/note')
                onBack()
            })
    }

    function onBack() {
        navigate('/note')
    }

    function loadNextNoteId() {
        noteService.getNextNoteId(noteId)
            .then(setNextNoteId)
    }

    function loadPrevNoteId() {
        noteService.getPrevNoteId(noteId)
            .then(setPrevNoteId)
    }

    if (!note) return <div>Loading...</div>
    return (
        <section className="note-details">
            <h1>Note title: {note.title}</h1>
            
            {/* <h5>Created date: {note.info.todos.doneAt}</h5> */}
            

            <img src={note.thumbnail} alt="" />
            <section className="note-desc">
                <h5>{}</h5>

                <div className="prev-next-btn">
                    <Link to={`/note/${prevNoteId}`}><button>Previous</button></Link>
                    <Link to={`/note/${nextNoteId}`}><button>Next</button></Link>
                </div>

                <button onClick={onBack}>Back</button>

            </section>

        </section>
    )

}