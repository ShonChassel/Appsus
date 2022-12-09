import emailCompose from '../cmps/email-compose.cmp.js';

export default {
    props: ['emails'],
    components: {
        emailCompose

    },
    template: `
    <div class="gmail-filter">
        <email-compose @upDate="upDate" />
        
        <div class="filter" @click="filter('inbox') " :class={select:selects.inbox}>
                <i class="fas fa-inbox"></i>
                <p>Inbox</p>
                <span>{{emailsLength}}</span>
        </div>

        <div class="filter" @click="filter('starred') " :class={select:selects.starred}>
        <i class="fas fa-star"></i>
        <p>Starred</p>
        </div>

        <div class="filter" @click="filter('sent')" :class={select:selects.sent}>
        <i class="far fa-share-square"></i>
        <p>Sent</p>
        </div>

        <div class="filter" @click="filter('drafts')" :class={select:selects.drafts}>
        <i class="far fa-sticky-note"></i>
        <p>Drafts</p>
        </div>

        <div class="filter" @click="filter('trash')" :class={select:selects.trash}>
        <i class="fas fa-trash"></i>
        <p>Trash</p>
        </div>
    </div>
    <!-- <button class="btn-menu" :class="{Menu:toggleMenu}"  @click.stop="toggleMenu()">☰</button> -->
    `,
    created() {
        this.checkLength() 

    },
    data() {
        return {
            emailsLength: 0,
            filterBy: null,
            isSelect: false,
            selects: {
                inbox: false,
                starred: false,
                sent: false,
                drafts: false,
                trash: false
            },
        }
    },
    methods: {
        filter(sort) {
            console.log('sort', sort)
            this.$emit('filtered', sort)

            for (const key in this.selects) {
                if (key !== sort) {
                    this.selects[key] = false
                } else this.selects[key] = true
            }
        },
        upDate() {
            this.$emit('upDate')
            
        },
        checkLength(){
            if (!this.emails) return 
            let email =  this.emails.filter(email =>  !email.isTrash || !email.isDrafts)    
            this.emailsLength = email.length

        }
    },
    computed: {
        toggleMenu() {
            return 'menu-open'
        }
    },
    watch: {
        emails:function(val){
            this.emailsLength = val.length
        }
    }
}
