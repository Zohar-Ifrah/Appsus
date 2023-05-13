
const { useState, Fragment } = React
const { Link } = ReactRouterDOM
import { noteService } from "../services/note.service.js";
import { ColorInput } from "./color-input.jsx";
import { NoteType } from "./note-type.jsx";


export function NotePreview({ notes, onRemoveNote, isHoverd}) {
    const [hoveredNote, setHoveredNote] = useState(null);
    const [noteColor, setNoteColor] = useState(
        JSON.parse(localStorage.getItem("noteColor")) || {})
    function onChangeColor(ev){
        const newNoteColor = {...noteColor}
        newNoteColor[hoveredNote] = ev.target.value
        setNoteColor(newNoteColor)
        localStorage.setItem("noteColor", JSON.stringify(newNoteColor));
    }

    return (
        <div className="note-list container">
            {notes.map((note) => (
                <div className="note-preview"  key={note.id}  onMouseEnter={() => setHoveredNote(note.id)}
                onMouseLeave={() => setHoveredNote(null)}>

                    <div className="note" 
                    style={{ backgroundColor:noteColor[note.id] || ''}} >

                        <NoteType note={note} />
                        <div className={`note-actions ${hoveredNote === note.id ? "" : "hide"}`}>
                            <i className="note-remove fa-solid fa-trash-can" onClick={() => onRemoveNote(note.id)}></i>
                            <Link to={`/note/edit/${note.id}`} > <i className="fa-solid fa-pen-to-square"></i></Link>
                            <Link to={`/note/${note.id}`} ><i className="fa-solid fa-circle-info"></i></Link>
                            <ColorInput/>
                                <input className="fa-solid fa-palette" type="color" name="color" id="color" onInput={onChangeColor}/>
                                

                        </div>
                    </div>
                 </div>
            ))}
        </div>
    )
}
