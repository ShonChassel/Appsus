import colorPicker from "../cmps/color-picker.cmp.js"


export default {
    props: ['note'],
    template: `
        <section :style="this.note.style" class="note-details">
            <input ref="input" v-model="noteTxt" type="text" />
            <section class="note-body">
                    <h3>{{noteTxt}}</h3>
                    <img v-if="currNote.type === 'note-img'" :src="url">
                    <section v-if="currNote.type === 'note-video'" v-html="url"></section>
                    <ul v-if="currNote.type === 'note-todos'">
                        <li v-for="todo in todos" :key="todo.txt">
                        <h4 :class="{done: todo.doneAt}">{{todo.txt}} <input type="checkbox" :checked="todo.doneAt" /></h4>
                        </li>
                    </ul>
            </section>
            <section class="controls">
                <button @click.prevent="duplicateNote" title="Make a copy"><img src="./assets/img/icons/copy.png"></button>
                <button @click.prevent="deleteNote" title="Delete"><img src="./assets/img/icons/garbage.png"></button>
                <button class="pallete-holder" @click="isOpen = !isOpen" title="Change color"><img src="./assets/img/icons/pallete.png"></button>
                <button @click.prevent="pinNote" title="Pin"><img src="./assets/img/icons/pin.png"></button>
                <button @click.prevent="saveNote" title="Save changes"><img src="./assets/img/icons/save.png"></button>
                <div class="block"></div>
                <button class="close-btn" @click="closeNote" title="Close note"><img src="./assets/img/icons/close.png"></button>
            </section>
            <color-picker @updateColor="changeBgColor" :class="{open: isOpen}"/>
        </section>
    `,
    created() {
        this.setNote()
    },
    data() {
        return {
            noteTxt: '',
            currNote: null,
            url: null,
            todos: null,
            isOpen: false
        }
    },
    methods: {
        saveNote(){
            if(this.note.type === 'note-img' || this.note.type === 'note-sound') this.note.info.title = this.noteTxt
            if(this.note.type === 'note-txt') this.note.info.txt = this.noteTxt
            if(this.note.type === 'note-todos') this.note.info.label = this.noteTxt
            if(this.note.type === 'note-video') this.note.info.url = this.noteTxt
            
            this.$emit('update-note', this.note)
        },
        deleteNote() {
            this.closeNote()
            this.$emit('delete-note', this.note.id)
        },
        changeBgColor() {
            this.note.style = { backgroundColor: this.$refs.pallete.value }
            this.$emit('update-note', this.note)
        },
        pinNote() {
            if (this.note.isPinned) {
                this.note.isPinned = false
                this.$emit('pin-note', this.note)
                return
            }
            this.note.isPinned = true
            this.$emit('update-note', this.note)

        },
        duplicateNote() {
            var duplicated = this.note
            delete duplicated.id
            this.$emit('duplicate-note', duplicated)
        },
        closeNote() {
            this.$emit('close-note')
        },
        setNote() {
            this.currNote = this.note
            switch (this.note.type) {
                case 'note-txt': {
                    this.noteTxt = this.note.info.txt;
                    break;
                }
                case 'note-img': {
                    this.url = this.note.info.url;
                    this.noteTxt = this.note.info.title;
                    break;
                }
                case 'note-video': {
                    this.url = this.note.info.url;
                    break;
                }
                case 'note-todos': {
                    this.todos = this.note.info.todos;
                    this.noteTxt = this.note.info.label
                }
            }
        }
    },
    computed: {

    },
    components: {
        colorPicker
    }
}