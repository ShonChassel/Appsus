import { eventBus } from '../../../services/event-bus.service.js'
import { noteService } from '../services/note.service.js'

export default {

    template: `
     <section class="note-add">
         
        <form @submit.prevent="addNote">
            <input ref="text" v-model="inputData" class="first" type="text" placeholder="Enter text" />
            <div class="btns">
                <button title="Add Text note" @click.prevent="setNewNote('note-txt')"><img src="./assets/img/icons/noteadd.png"></button>
                <button title="Add Image note" class="imgBtn" @click="setNewNote('note-img')"><img src="./assets/img/icons/image.png"><input type="file" @change="uploadImage($event)" /></button>
                <button title="Add Video note" @click.prevent="setNewNote('note-video')"><img src="./assets/img/icons/video.png"></button>
                <button title="Add List note" @click.prevent="setNewNote('note-todos')"><img src="./assets/img/icons/list.png"></button>
                <button title="Add Sound note" class="imgBtn" @click="setNewNote('note-sound')"><img src="./assets/img/icons/sound.png"><input type="file" @change="uploadSound($event)" /></button>
            </div>
            <button title="Submit note" class="last"><img src="./assets/img/icons/add.png"></button>
        </form>
     </section>
    `,
    created() {

    },
    mounted() {
        this.$refs.text.focus()
    },
    data() {
        return {
            inputData: '',
            newNote: {
                type: 'note-txt',
                info: {
                    txt: '',
                }
            },
        }
    },
    methods: {
        addNote() {
            if(this.inputData === '')return
            switch (this.newNote.type) {
                case 'note-img': this.newNote.info.title = this.inputData; break;
                case 'note-sound': this.newNote.info.title = this.inputData; break;
                case 'note-video': this.newNote.info.url = this.inputData; break;
                case 'note-txt': this.newNote.info.txt = this.inputData; break;
                case 'note-todos': this.makeTodos(); break;
            }
            this.$emit('note-added', this.newNote)

            this.inputData = ''
            this.newNote = { type: 'note-txt', info: { txt: '' } }
            const msg = {
                txt: 'Note added!',
                type: 'succes'
            }
        },
        setNewNote(type) {
            console.log(type);
            if (type === 'note-txt') {
                this.newNote = { type: 'note-txt', info: { txt: '' } }
                this.$refs.text.placeholder = 'Enter text'
                return
            } else if (type === 'note-img') {
                this.newNote = { type: 'note-img', info: { url: '', title: '' } }
                this.$refs.text.placeholder = 'Enter title'
                return
            } else if (type === 'note-video') {
                this.newNote = { type: 'note-video', info: { url: '', txt: '' } }
                this.$refs.text.placeholder = 'Enter embedded video url'
                return
            } else if (type === 'note-todos') {
                this.newNote = { type: 'note-todos', info: { label: '', todos: [] } }
                this.$refs.text.placeholder = 'Enter comma seperated list'
            } else if(type === 'note-sound'){
                this.newNote = { type: 'note-sound', info: { url: '', title: '' } }
                this.$refs.text.placeholder = 'Enter title'
                return
            }
        },
        makeTodos() {
            let todos = this.inputData.split(',')
            todos = todos.map(todo => {
                return { txt: todo, doneAt: null }
            })
            this.newNote.info.todos = todos
        },
        uploadImage(e){
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e =>{
                this.newNote.info.url = e.target.result;
            }
        },
        uploadSound(e){
            const sound = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(sound);
            reader.onload = e =>{
                this.newNote.info.url = e.target.result;
        }

    }
    },
    computed: {

    },
}
