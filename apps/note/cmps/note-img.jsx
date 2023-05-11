

export function NoteImg({ note }) {

    return (
        <React.Fragment>
            <div className="note-img">
            {/* <div contentEditable="true">{note.info.title}</div> */}

                <img src={note.info.url} />
                {/* <div className="note-text">
                </div> */}
            </div>
        </React.Fragment>
    );
}