export default {

    template:`
    <section class="note-filter">
        
        <!-- <input @input="filter" v-model="filterBy.txt" type="search" placeholder="Search" class="search" /> -->
        
        <button :class="{open: displaySearch}" class="searchBtn" @click="toggleSearch" ><input @input="filter" ref="searchInput" v-model="filterBy.txt" type="search" placeholder="Search" class="searchInput" /><img src="assets/img/icons/search.png"/></button>
        <button :class="{open: displayType}" @click="displayType = !displayType"><input type="text" class="block" disabled/><img src="assets/img/icons/tune.png" alt="" /></button>
            <ul :class="{open: displayType}">
                <li>
                    <label>
                        <input @change="setFilterType('note-txt')"  type="checkbox" checked/>
                        Text
                    </label>
            </li>
            <li>
                <label>
                    <input @change="setFilterType('note-img')"  type="checkbox" checked/>
                    Images
                </label>
            </li>
            <li>
                <label>
                    <input @change="setFilterType('note-video')"  type="checkbox" checked/>
                    Videos
                </label>
            </li>
            <li>
                <label>
                    <input @change="setFilterType('note-todos')"  type="checkbox" checked/>
                    Todos
                </label>
            </li>
            <li>
                <label>
                    <input @change="setFilterType('note-sound')"  type="checkbox" checked/>
                    Sounds
                </label>
            </li>
        </ul>
        
    </section>
    `,
    data(){
        return{
            displaySearch: false,
            displayType: false,
            filterBy: {
                txt: '',
                types: ['note-txt','note-img','note-video','note-todos','note-sound']
            }
        }
    },
    methods: {
        toggleSearch(){
            this.displaySearch = !this.displaySearch
            this.$refs.searchInput.focus()
        },
        setFilterType(value){
            if(this.filterBy.types.includes(value)) {
                this.filterBy.types.splice(this.filterBy.types.indexOf(value),1)
                this.filter()
                return
            }
            this.filterBy.types.push(value)
            this.filter()
        },
        filter(){
            this.$emit('filter', { ...this.filterBy })
        }
    },
    computed: {

    },
}