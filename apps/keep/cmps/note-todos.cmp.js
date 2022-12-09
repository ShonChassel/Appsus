export default {
    props: ['info'],
    template: `
    <section class="note-info">
        <h3>{{info.label}}</h3>
        <ul>
            <li v-for="todo in info.todos" :key="todo.txt">
                <h4><span :class="{done: todo.doneAt}">{{todo.txt}}</span> <span class="timestamp">{{todo.doneAt}} </span><input 
                   type="checkbox" :checked="todo.doneAt" @change="isChecked(todo.txt)" /></h4>
            </li>
        </ul>

    </section>
    `,
    created() {
        this.setTodos()
    },
    data() {
        return {
                isDone: false,
        }
    },
    methods: {
        isChecked(todoTxt){
            let todo = this.info.todos.find(todo => todo.txt === todoTxt)
            if(todo.doneAt) {
                todo.doneAt = null
                return
            }
            todo.doneAt = new Date(Date.now()).toLocaleTimeString()
            console.log(this.info);
            this.$emit('updated-todo',this.info)
        },
        setTodos(){
            // this.info.todos = this.info.todos.map(todo => {
            //     console.log(todo);
            // })
        }
    },
    computed: {

    },
}