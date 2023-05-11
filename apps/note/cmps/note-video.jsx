export function NoteVideo({ note }) {
    console.log('note');

    return (
        <div>
            <h3>{note.info.title}</h3>
            <iframe width="380px" height="240px" controls allowFullScreen src={note.info.url} frameBorder="2" />

        </div>
    )
}