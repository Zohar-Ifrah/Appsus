import { NotePreview } from "./note-preview.jsx";
export function NoteList({ notes, onRemoveNote }) {

    return (
        <NotePreview notes={notes} onRemoveNote={onRemoveNote} />
    )
}
