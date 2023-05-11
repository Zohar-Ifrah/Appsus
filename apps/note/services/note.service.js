
import { storageService } from '../../../services/async-storage.service.js'
import { storage } from '../../../services/storage.service.js'
// import { utilService } from '../../../services/util.service.js'


const NOTE_KEY = 'notesDB'
_createNotes()

export const noteService = {
    query,
    get,
    remove,
    getEmptyNote,
    getDefaultFilter,
    // save,
    // getNextNoteId,
    // getPrevNoteId,
}

function query(filterBy = {}) {
    return storageService.query(NOTE_KEY)
        .then(notes => {
            // render only notes that contains the *TXT*
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                notes = notes.filter(note => regExp.test(note.info.txt))
            }

            // if (filterBy.type) {
            //     notes = notes.filter( note => note.type(note.info.type))
            // }

// console.log(notes);
            return notes
        })
}

function get(noteId) {
    return storageService.get(NOTE_KEY, noteId)
}

function remove(noteId) {
    return storageService.remove(NOTE_KEY, noteId)
}

// function save(note) {
//     if (note.id) {
//         return storageService.put(NOTE_KEY, note)
//     } else {
//         return storageService.post(NOTE_KEY, note)
//     }
// }

function getEmptyNote(txt = '', type = '') {
    return { txt , type }
}

function getDefaultFilter() {
    return { txt: '', type: ''}
}

// function getNextNoteId(noteId) {
//     return storageService.query(NOTE_KEY)
//         .then((notes) => {
//             let noteIdx = notes.findIndex(note => note.id === noteId)
//             if (noteIdx === notes.length - 1) noteIdx = -1
//             return !!notes[noteIdx + 1].id && notes[noteIdx + 1].id
//         })
// }

// function getPrevNoteId(noteId) {
//     return storageService.query(NOTE_KEY)
//         .then((notes) => {
//             let noteIdx = notes.findIndex(note => note.id === noteId)
//             if (noteIdx === 0) noteIdx = notes.length
//             return !!notes[noteIdx - 1].id && notes[noteIdx - 1].id
//         })
// }

function _createNotes() {
    let notes = storage.loadFromStorage(NOTE_KEY) || notesData()

    if (notes.length === 0) notes = notesData()
    storage.saveToStorage(NOTE_KEY, notes)
}

function notesData() {
return  [
    {
        id: 'n101',
        createdAt: 1112222,
        type: 'NoteTxt',
        isPinned: true,
        style: {
            backgroundColor: '#00d'
        },
        info: {
            txt: 'Fullstack Me Baby!'
        }
    },
    {
        id: 'n102',
        type: 'NoteImg',
        isPinned: false,
        info: {
            url: 'http://some-img/me',
            title: 'Bobi and Me'
        },
        style: {
            backgroundColor: '#00d'
        }
    },
    {
        id: 'n103',
        type: 'NoteTodos',
        isPinned: false,
        info: {
            title: 'Get my stuff together',
            todos: [
                { txt: 'Driving license', doneAt: null },
                { txt: 'Coding power', doneAt: 187111111 }
            ]
        }
    },
    {
        id: 'n104',
        type: 'NoteImg',
        isPinned: false,
        info: {
            url: 'http://some-img/me',
            title: 'Bobi and Me'
        },
        style: {
            backgroundColor: '#00d'
        }
    },
    {
        id: 'n105',
        type: 'NoteTodos',
        isPinned: false,
        info: {
            title: 'Get my stuff together',
            todos: [
                { txt: 'Driving license', doneAt: null },
                { txt: 'Coding power', doneAt: 187111111 }
            ]
        }
    },
    {
        id: 'n106',
        type: 'NoteImg',
        isPinned: false,
        info: {
            url: 'http://some-img/me',
            title: 'Bobi and Me'
        },
        style: {
            backgroundColor: '#00d'
        }
    },
    {
        id: 'n107',
        type: 'NoteTodos',
        isPinned: false,
        info: {
            title: 'Get my stuff together',
            todos: [
                { txt: 'Driving license', doneAt: null },
                { txt: 'Coding power', doneAt: 187111111 }
            ]
        }
    }
]

}

