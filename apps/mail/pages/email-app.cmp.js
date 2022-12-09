import { eventBus } from "../../../services/event-bus.service.js"

import emailList from '../cmps/email-list.cmp.js';
import emailFilter from '../cmps/email-filter.cmp.js';
import { emailService } from '../services/email.service.js';
import emailDetails from '../pages/email-details.cmp.js'
import appBackgrounds from "../../../views/app-backgrounds-cmp.js"

export default {
    components: {
        emailList,
        emailFilter,
        emailService,
        emailDetails,
        appBackgrounds
    },
    template: `
    <div>
        <!-- <input @input="setFilter" v-model="filter.title" type="text" placeholder="Search mail" class="filter-text"> -->
    </div>
        <section class="email-app" :style="changeBg">
        <!-- <app-backgrounds /> -->
            <email-filter @filtered="setFilter" @upDate="upDate" :emails="emails"/>
            <email-list :emails="MailToShow" @remove="deleteEmail" @filterByTxt="filterByTxt" @upDateTrash="upDateTrash"/>         
        </section>
    `,
    created() {
        this.loadMails();
        // eventBus.on('change-bg',this.changeBg)
    },
    data() {
        return {
            emails: null,
            selectedMail: null,
            filterBy: {
                type: '',
                txt: '',
                bgcImg: '',
            },
           
        };
    },
    methods: {
        changeBg(url){
            console.log(url);
            // this.bgcImg = {'background-image':'url(assets/img/backgrounds/bg1.jpg);'} 
        },
        loadMails() {
            emailService.query()
                .then(emails => { this.emails = emails })
                
        },
        deleteEmail(emailId) {
            emailService.remove(emailId).then(()=>{
                this.emails = this.emails.filter(email => email.id !== emailId)
                // this.loadMails();
                this.upDate()
            })
        },
        setFilter(filterBy) {
            this.filterBy.type = filterBy;
        },

        filterByTxt(filterBy) {
            console.log(filterBy);
            this.filterBy.txt = filterBy;
        },
        upDate(){
            emailService.query()
            .then(emails => { this.emails = emails })
        },
        upDateTrash(){
            console.log('hey');
            this.upDate()
        }
    },
    computed: {
        MailToShow() {
            if (!this.emails) return 
            const searchStr = this.filterBy.txt.toLowerCase();

            let emails = this.emails.filter(email => {
                return email.subject.toLowerCase().includes(searchStr);})

            if (this.filterBy.type === 'inbox') {
                return emails.filter(email => !email.isTrash && !email.isDrafts)
            }
            if (this.filterBy.type === 'starred') {
                return emails.filter(email => email.isStar)
            }
            if (this.filterBy.type === 'drafts') {
                return emails.filter(email => email.isDrafts)
            }
            if (this.filterBy.type === 'trash') {
                return emails.filter(email => email.isTrash)
            }
            if (this.filterBy.type === 'sent') {
                return emails.filter(email => email.isSent)
            }
            return emails
        },
        // changeBg(){
        //     console.log(this.bgcImg);
        //     return {backgroundImage:'url(assets/img/backgrounds/bg3.jpg)'}
        // },
    },

};

 // const searchStr = this.filterBy.txt.toLowerCase();
            // var emailToDisplay = this.emails.filter(email => {
            //     return email.toLowerCase().includes(searchStr);
            // });