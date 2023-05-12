
const { Link } = ReactRouterDOM
import { NoteType } from "./note-type.jsx";

export function NotePreview({ notes, onRemoveNote }) {

    console.log('bobbo');

    // }
    return (
        <div className="note-preview">

            {notes.map((note) => (
                <div className="note" key={note.id}>

                    <div className="note-info">

                        <NoteType note={note} />
                        

                        {console.log(1212124124)}
                        <div className="note-actions">
                            <button className="note-btn" onClick={() => onRemoveNote(note.id)}>Remove</button>
                            <Link to={`/note/${note.id}`} ><button className="note-btn"> Note </button></Link>
                            <Link to={`/note/edit/${note.id}`} > <button className="note-btn">Edit</button></Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}


// notes stars loading here 