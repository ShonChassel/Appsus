import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const noteService = {
    query,
    get,
    post,
    remove,
    put,


}

const NOTES_KEY = 'notesDB'

const gNotes = [
    {
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        },
        style: {
            backgroundColor: "#aecbfa"
        }
    },
    {
        id: "n102",
        type: "note-img",
        info: {
            url: "https://image.cnbcfm.com/api/v1/image/106349589-1579720435046gettyimages-1192592454.jpeg?v=1579721288&w=929&h=523",
            title: "Google"
        },
        style: {
            backgroundColor: "#fff"
        }
    },
    {
        id: "n103",
        type: "note-img",
        isPinned: true,
        info: {
            url: 'assets/img/noteImgs/dog.webp',
            title: "My dog"
        },
        style: {
            backgroundColor: "#fdcfe8"
        }
    },
    {
        id: "n104",
        type: "note-todos",
        info: {
            label: "Get my stuff together",
            todos: [
                { txt: "Driving liscence", doneAt: null },
                { txt: "Coding power", doneAt: 187111111 }
            ]
        },
        style: {
            backgroundColor: "#fff"
        }
    },
    {
        id: "n105",
        type: "note-todos",
        info: {
            label: "House missions",
            todos: [
                { txt: "Wash the dishes", doneAt: null },
                { txt: "Clean my room", doneAt: null },
                { txt: "Clean the garden", doneAt: null }
            ]
        },
        style: {
            backgroundColor: "#ccff90"
        }
    },
    {
        id: "n106",
        type: "note-video",
        info: {
            txt: "Get my stuff together",
            url: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ig5oMN4XQz4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        style: {
            backgroundColor: "#fff"
        }
    },
    {
        id: "n107",
        type: "note-img",
        info: {
            url: 'assets/img/noteImgs/garden.jpeg',
            title: "My garden"
        },
        style: {
            backgroundColor: "#fff"
        },

    },
    {
        id: "n108",
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "Surprise party for Kristin!"
        },
        style: {
            backgroundColor: "#fff"
        }
    },
    {
        id: "n109",
        type: "note-todos",
        isPinned: true,
        info: {
            label: "Gift ideas",
            todos: [
                { txt: "New bike helmet", doneAt: null },
                { txt: "Cute houseplant", doneAt: null },
                { txt: "Picture frame", doneAt: null },
                { txt: "Bottle of Whiskey", doneAt: null }
            ]
        },
        style: {
            backgroundColor: "#fff"
        }
    },
    {
        id: "n110",
        type: "note-img",
        info: {
            url: 'assets/img/noteImgs/maldivies.jpeg',
            title: "Possible destination"
        },
        style: {
            backgroundColor: "#fff"
        },

    },
    {
        id: "n111",
        type: "note-sound",
        isPinned: true,
        info: {
            url: 'assets/sounds/chips.wav',
            title: "Me eating chips at 3 am trying to finish this sprint"
        },
        style: {
            backgroundColor: "#fff475"
        },

    },
    {
        id: "n112",
        type: "note-txt",
        isPinned: false,
        info: {
            txt: "Need to call my sister"
        },
        style: {
            backgroundColor: "#aecbfa"
        }
    },
    {
        id: "n113",
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "Car test tomarrow"
        },
        style: {
            backgroundColor: "#f28b82"
        }
    },
    {
        id: "n114",
        type: "note-txt",
        isPinned: true,
        info: {
            txt: "Learning Node today!"
        },
        style: {
            backgroundColor: "#fff"
        }
    },
    {
        id: "n115",
        type: "note-txt",
        isPinned: true,
        info: {
            txt: `Bank account:\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 
            user: puki-shmuki \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0
            password: 123455shmuki`
        },
        style: {
            backgroundColor: "#fff"
        }
    },
];


_createNotes()
function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY)
    if (!notes || !notes.length) {
        notes = gNotes
        utilService.saveToStorage(NOTES_KEY, notes)
    }
}

function query() {
    return storageService.query(NOTES_KEY)
}
function get(noteId) {
    return storageService.get(NOTES_KEY, noteId)
}
function post(newNote) {
    return storageService.post(NOTES_KEY, newNote)
}
function remove(noteId) {
    return storageService.remove(NOTES_KEY, noteId)
}
function put(note) {
    return storageService.put(NOTES_KEY, note)
}
