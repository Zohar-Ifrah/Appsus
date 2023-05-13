

export function NoteImg({ note }) {
  
  console.log(note.style);
  

    return (
        <React.Fragment>
            <div className="note-img" >
            <div contentEditable={true} >{note.info.title}</div>
                <img src={note.info.url} />

            </div>
        </React.Fragment>
    );
}

