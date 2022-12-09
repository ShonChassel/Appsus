import { emailService } from '../services/email.service.js';
import emailPreview from './email-preview.cmp.js';

export default {
    props: ['emails'],
    components: {
        emailPreview,
    },
    template:`
        <section class="email-list app-main">

            <div class="has-search">
                <span class="fa fa-search form-control-feedback"></span>
                <input @input="filterByTxt" v-model="filterBy" class="form-control" type="text" placeholder="Search mail">
            </div>
            
        <ul>
            <li v-for= "email in emails" :key="email.id" class="email-preview-container" @click="select(email.id)" >
                <email-preview :email="email" @remove="deleteEmail" @upDateTrash="upDateTrash"/>
            </li>
        </ul>
        </section>
    `,
    data(){
        return{
            filterBy: '',
                
            
        }
    },
    methods: {
        deleteEmail(emailId){
            this.$emit('remove', emailId);
        },
        filterByTxt(){
             console.log('this.filterBy',this.filterBy )
            this.$emit('filterByTxt', this.filterBy)
        },
        select(emailId) {
            this.$router.push('/email/'+emailId);
        },
        upDate() {
            this.$emit('upDate')
            
        },
        upDateTrash() {
            this.$emit('upDateTrash')
            
        },
    },
    computed: {

    },
}