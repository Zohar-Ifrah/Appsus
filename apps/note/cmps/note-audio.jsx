export function NoteAudio({ note }) {
const url= '../../apps/note/audio/audio.mp3'
    return (
        <audio controls width="250" height="250" src={note.info.url} type="audio/mp3" />
    )

}