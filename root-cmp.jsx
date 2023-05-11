const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/app-header.jsx"
import { About } from "./views/about.jsx"
import { Home } from "./views/home.jsx"
import { MailIndex } from "./apps/mail/views/mail-index.jsx"
import { NoteIndex } from "./apps/note/views/note-index.jsx"
import { Yuval } from "./cmps/yuval.jsx"
import { Zohar } from "./cmps/zohar.jsx"
import { NoteDetails } from "./apps/note/cmps/note-details.jsx"
import { NoteEdit } from "./apps/note/views/note-edit.jsx"



export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}>
                    <Route path="zohar" element={<Zohar />} />
                    <Route path="yuval" element={<Yuval />} />
                </Route>
                <Route path="/mail" element={<MailIndex />} />
                <Route path="/note" element={<NoteIndex />} />
                {/* added */}
                <Route path="/note/:noteId" element={<NoteDetails />} />
                <Route path="/note/edit" element={<NoteEdit />} />
                <Route path="/note/edit/:noteId" element={<NoteEdit />} />

            </Routes>
        </section>
    </Router>
}
