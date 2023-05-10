const { Link } = ReactRouterDOM
// NoteList({ notes, onRemoveNote })
export function NotePreview({ notes, onRemoveNote }) {

    // const noteCmpMap= {

    // }
    return (
        <div className="note-preview">

            {notes.map((note) => (
                <div className="note" key={note.id}>

                    <div className="note-info">
                        <h2>{note.info.txt}</h2>
                        <h3>{note.info.title}</h3>
                        <h4>{note.type}</h4>
                        
                        {console.log(1212124124)}
                        <div className="note-actions">
                        <button onClick={() => onRemoveNote(note.id)}>Remove</button>
                            <Link to={`/book/${note.id}`} ><button> Note </button></Link>
                            <Link to={`/book/edit/${note.id}`} > <button>Edit</button></Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}