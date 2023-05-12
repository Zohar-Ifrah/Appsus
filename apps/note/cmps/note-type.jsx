import { NoteAudio } from "./note-audio.jsx";
import { NoteImg } from "./note-img.jsx";
import { NoteTodos } from "./note-todos.jsx";
import { NoteTxt } from "./note-txt.jsx";
import { NoteVideo } from "./note-video.jsx";

const { Outlet, NavLink } = ReactRouterDOM


export function NoteType({ note }) {
    console.log(note.type);

    switch (note.type) {
        case 'NoteImg':
            return <NoteImg note={note} />
        case 'NoteTodos':
            return <NoteTodos note={note} />
        case 'NoteTxt':
            return <NoteTxt note={note} />
        case 'NoteAudio':
            return <NoteAudio note={note} />
            case 'NoteVideo':
            return <NoteVideo note={note} />
            
            


    }

}
