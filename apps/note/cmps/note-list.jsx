// const { Route, Routes } = ReactRouterDOM
// const Router = ReactRouterDOM.HashRouter
// import { NotePreview } from './NotePreview.jsx'

import { NotePreview } from "./note-preview.jsx";

export function NoteList({ notes, onRemoveNote }) {

console.log('yuvi');
    return (
        <section>

        {<NotePreview notes={notes} onRemoveNote={onRemoveNote} />}
     </section>
    )
}
