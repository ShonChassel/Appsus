import noteImg from "./note-img.cmp.js";
import noteTxt from "./note-txt.cmp.js";
import noteTodos from "./note-todos.cmp.js";
import noteVideo from "./note-video.cmp.js";
import noteSound from "./note-sound.cmp.js";
import colorPicker from "./color-picker.cmp.js";

export default {
    props: ['note'],
    template: `
    <article :style="note.style" class="note-preview">
        <component :is="note.type" :info="note.info" @updated-todo="updateTodo"/>
        <section class="options" >
            <button @click.prevent="duplicateNote" title="Make a copy"><img src="./assets/img/icons/copy.png"></button>
            <button @click.prevent="deleteNote" title="Delete"><img src="./assets/img/icons/garbage.png"></button>
            <button class="pallete-holder" @click="isOpen = !isOpen" title="Change color"><img src="./assets/img/icons/pallete.png"></button>
            <button @click.prevent="pinNote" title="Pin"><img src="./assets/img/icons/pin.png"></button>
            <button @click="openDetails" title="Open note"><img src="./assets/img/icons/edit.png"></button>
        </section>

        <color-picker @updateColor="changeBgColor" :class="{open: isOpen}"/>
    </article>
    `,
    data() {
        return {
            optionsOpen: false,
            isOpen:false
        }
    },
    methods: {
        deleteNote() {
            this.$emit('delete-note', this.note.id)
        },
        changeBgColor(value) {
            this.isOpen=false
            this.note.style = { backgroundColor: value }
            this.$emit('update-note', this.note)
        },
        pinNote() {
            console.log(this.note);
            if (this.note.isPinned) {
                this.note.isPinned = false
                this.$emit('update-note', this.note)
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
        openDetails(){
            this.$emit('open-details', this.note)
        },
        updateTodo(info){
            this.note.info = info
            this.$emit('update-note',this.note)
        }

    },
    computed: {

    },
    components: {
        noteImg,
        noteTodos,
        noteTxt,
        noteVideo,
        noteSound,
        colorPicker
    }
}