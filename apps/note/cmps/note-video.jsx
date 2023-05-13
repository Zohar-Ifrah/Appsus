const { useState} = React

export function NoteVideo({ note }) {
    return (
        <div className="note-video">
             <div contentEditable="true" onBlure="false">{note.title}</div>
            <iframe width="380px" height="240px" controls allowFullScreen src={note.url} frameBorder="2" />
        </div>
    )
}
