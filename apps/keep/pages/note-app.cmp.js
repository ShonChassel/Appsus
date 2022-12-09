import { noteService } from "../services/note.service.js"
import { eventBus } from "../../../services/event-bus.service.js"

import noteAdd from "../cmps/note-add.cmp.js"
import noteFilter from "../cmps/note-filter.cmp.js"
import noteList from "../cmps/note-list.cmp.js"
import noteDetails from "./note-details.cmp.js"
import appBackgrounds from "../../../views/app-backgrounds-cmp.js"

export default {

    template: `
    <section :style="bgImg" class="note-app">
        <note-filter @filter="filter" />
        <note-add @note-added="addNote"/>
        <note-list @open-details="openDetails" @duplicate-note="addNote" @update-note="updateNote" @delete-note="deleteNote" v-if="notes" :notes="notesToDisplay"/>
        <note-details @update-note="updateNote" @delete-note="deleteNote" @duplicate-note="addNote" @close-note="closeNote" v-if="noteToShow" :note="noteToShow"/>
        <app-backgrounds />
    </section>
    `,
    created() {
        noteService.query()
            .then(notes => {
                this.notes = notes
            })
            eventBus.on('change-bg',this.changeBg)
    },
    data() {
        return {
            notes: null,
            filterBy: {
                txt: '',
                types: ['note-txt','note-img','note-video','note-todos','note-sound'],
            },
            noteToShow: null,
            bgImg: '',
        }
    },
    methods: {
        closeNote(){
            this.noteToShow = null
        },
        filter(filterBy){
            this.filterBy = filterBy
        },
        addNote(newNote) {
            console.log(newNote);
            noteService.post(newNote)
                .then(() => {
                    noteService.query()
                        .then(notes => this.notes = notes)
                })
        },
        deleteNote(noteId) {
            console.log(noteId);
            noteService.remove(noteId)
                .then(() => {
                    noteService.query()
                        .then(notes => this.notes = notes)
                })
            
        },
        updateNote(note) {
            noteService.put(note)
                .then(() => {
                    noteService.query()
                        .then(notes => this.notes = notes)
                })
        },
        openDetails(note){
            console.log('note',note)
            this.noteToShow = note
        },
        changeBg(url){
            console.log(url);
            this.bgImg = { backgroundImage: 'url(https://lh5.ggpht.com/r0SGNlUNQocspUn5Vq3meD_B4XCMHNzmsYX7GYs40h_cddB-3omCWopHqNGVsUqgzL5mdXFFxQ=w380-h234-p-e365-k-no-nd)' }
            console.log('this.bgImg',this.bgImg)
        },
    },
    computed: {
        notesToDisplay(){
            const regex = new RegExp(this.filterBy.txt, 'i')
            let notes = this.notes.filter(note => {
                if(note.type === 'note-txt') return regex.test(note.info.txt)
                if(note.type === 'note-img') return regex.test(note.info.title)
                if(note.type === 'note-todos') return regex.test(note.info.label)
                if(note.type === 'note-video') return regex.test(note.info.txt)
                if(note.type === 'note-sound') return regex.test(note.info.title)
            }) 
            notes = notes.filter(note => {
                var isMatch = false
                this.filterBy.types.forEach(type => {
                    if(type === note.type) 
                    isMatch = true
                })
                return isMatch 
            })
            return notes
        },

    },
    components: {
        noteAdd,
        noteFilter,
        noteList,
        noteDetails,
        appBackgrounds
    }
}