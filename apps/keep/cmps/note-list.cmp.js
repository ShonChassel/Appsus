import bookPreview from './note-preview.cmp.js'

export default {
    props: ['notes'],
    template: `
     <section :style="fixGrid" class="note-list">
         <h3 v-if="!pinIsEmpty" class="title">Pinned</h3>
         <section @dragenter.prevent @dragover.prevent @drop="onDrop($event, true)" v-show="!pinIsEmpty" class="pin-notes">

             <book-preview @dragstart="startDrag($event,note.id)" draggable="true" @open-details="openDetails" @duplicate-note="duplicateNote" @update-note="updateNote" @delete-note="deleteNote" :note="note" v-for="note in pinNotes" :key="note.id"/>

            </section>
            <h3 v-if="!unPinIsEmpty" class="title">unPinned</h3>
            <section @dragenter.prevent @dragover.prevent @drop="onDrop($event, false)"  class="un-pin-notes">

            <book-preview @dragstart="startDrag($event,note.id)" draggable="true" @open-details="openDetails" @duplicate-note="duplicateNote" @update-note="updateNote" @delete-note="deleteNote" :note="note" v-for="note in unPinNotes" :key="note.id"/>

        </section>
     </section> 
    `,
    created() {
    },
    data() {
        return {
            pinIsEmpty: false,
            unPinIsEmpty: false,
        }
    },
    methods: {
        onDrop(event,isPinned){
            const noteId = event.dataTransfer.getData('noteId')
            const note = this.notes.find(note => note.id === noteId)
            note.isPinned = isPinned
            this.$emit('update-note', note)
        },
        startDrag(event,noteId){
            event.dataTransfer.dropEffect ='move'
            event.dataTransfer.effectAllowed = 'move'
            event.dataTransfer.setData('noteId',noteId)
        },
        deleteNote(noteId) {
            this.$emit('deleteNote', noteId)
        },
        updateNote(note) {
            this.$emit('update-note', note)
        },
        duplicateNote(duplicated) {
            this.$emit('duplicate-note', duplicated)
        },
        openDetails(note) {
            console.log(note);
            this.$emit('open-details', note)
        }
    },
    computed: {
        fixGrid(){
            if(!this.pinIsEmpty) return
            return 'grid-template-rows: 26px 1fr'
        },
        pinNotes() {
            let notes = this.notes.filter(note => note.isPinned)
            this.pinIsEmpty = notes.length < 1 ? true : false
            return notes
        },
        unPinNotes() {
            let notes = this.notes.filter(note => !note.isPinned)
            this.unPinIsEmpty = notes.length < 1 ? true : false
            return notes
        }
    },
    components: {
        bookPreview
    }
}