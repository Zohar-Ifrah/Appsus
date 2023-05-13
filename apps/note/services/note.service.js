import { storageService } from '../../../services/async-storage.service.js'
import { storage } from '../../../services/storage.service.js'

const NOTE_KEY = 'notesDB'
_createNotes()

export const noteService = {
    query,
    get,
    remove,
    getEmptyNote,
    getDefaultFilter,
    save,
    makeId,
}

function query(filterBy = {}) {
    return storageService.query(NOTE_KEY)
        .then(notes => {
            // render only notes that contains the *TXT*
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                notes = notes.filter(note => regExp.test(note.info.txt))
            }

            if (filterBy.type) {
                console.log(filterBy.type);
                notes = notes.filter(note => note.type === filterBy.type)
            }

            // filter pinned notes
            if (filterBy.isPinned) {
                notes = notes.filter(note => note.isPinned)
            }
            return notes
        })
}

function get(noteId) {
    return storageService.get(NOTE_KEY, noteId)
}

function remove(noteId) {
    return storageService.remove(NOTE_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return storageService.put(NOTE_KEY, note)
    } else {
        return storageService.post(NOTE_KEY, note)
    }
}

function getEmptyNote(id, type='', title='', isPinned=false ) {
    return {
        type,
        title, 
        isPinned
    }
    
}

function getDefaultFilter(searchParams = { get: () => { } }) {
    return { 
        txt: searchParams.get('txt') || '',
        title: searchParams.get('title') || '' 
    }
}


function _createNotes() {
    let notes = storage.loadFromStorage(NOTE_KEY) || notesData()

    if (notes.length === 0) notes = notesData()
    storage.saveToStorage(NOTE_KEY, notes)
}



function notesData() {
    return [
        {
            type: "NoteVideo",
            id: 'n101',
            isPinned: false,
            title: 'Relaxation Youtube',
            url: "https://www.youtube.com/embed/MYJldv7ZhOA",
            backgroundColor: "#ffee58fa",

        },
        {
            id: 'n102',
            type: 'NoteImg',
            title: 'Lovely times',
            isPinned: false,
            info: {
                url: 'https://picsum.photos/200/300',
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
            title: 'Relaxation audio',
            type: 'NoteAudio',
            isPinned: false,
            info: {
                url: '../../apps/note/audio/audio.mp3',
            },


        },
        {
            type: "NoteVideo",
            id: 'n105',
            isPinned: false,
            title: 'Relaxation Youtube',
            url: "https://www.youtube.com/embed/MYJldv7ZhOA",
            backgroundColor: "#ffee58fa",

        },
        {
            id: 'n106',
            type: 'NoteImg',
            title: 'Trips to remember',
            isPinned: false,
            info: {
                url: 'https://picsum.photos/200/300',
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
                title: 'Groceries',
                todos: [
                    { txt: 'Milk, Bread, Vegetables', doneAt: null },
                    { txt: 'Washing Powder', doneAt: 187111111 }
                ]
            }
        },
        {
            id: 'n108',
            title: 'Coding Mood',
            type: 'NoteAudio',
            isPinned: false,
            info: {
                url: '../../apps/note/audio/audio.mp3',
            },


        },
        {
            type: "NoteVideo",
            id: 'n109',
            isPinned: false,
            title: 'Memories',
            url: "https://www.youtube.com/embed/MYJldv7ZhOA",
            backgroundColor: "#ffee58fa",

        },

        {
            id: 'n110',
            type: 'NoteImg',
            title: 'Lovely times',
            isPinned: false,
            info: {
                url: 'https://picsum.photos/200/300',
                title: 'Bobi and Me'
            },
            style: {
                backgroundColor: '#00d'
            }
        },
        {
            id: 'n111',
            type: 'NoteTodos',
            isPinned: false,
            info: {
                title: 'Studies',
                todos: [
                    { txt: 'React', doneAt: null },
                    { txt: 'Css', doneAt: 187111111 }
                ]
            }
        },
        {
            id: 'n112',
            title: 'Relaxation audio',
            type: 'NoteAudio',
            isPinned: false,
            info: {
                url: '../../apps/note/audio/audio.mp3',
            },


        },
       
    ]

}



function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

