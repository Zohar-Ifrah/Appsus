export function NoteAudio({ note }) {
    return (
        <React.Fragment>
            <div className="note-audio">
            <div contentEditable="true" suppressContentEditableWarning>{note.title}</div>
            <audio controls width="250" height="250" src={note.info.url} type="audio/mp3" />
            </div>
        </React.Fragment>
    )
}

