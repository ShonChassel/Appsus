import { emailService } from '../services/email.service.js';
import { utilService } from '../../../services/util.service.js';
import { eventBus } from '../../../services/event-bus.service.js';

export default {
    // props: ['email'],
    components: {
        emailService,
        utilService,
        eventBus
    },
    template: `
    <section>
      <datalist id="mail-list">
          <option value="info@netflix.com">
          <option value="travel@padidiver.com">
          <option value="main@tomorrowland.com">
          <option value="customer@wizzair.com">
          <option value="news@dji.com">
     </datalist>
        <p class="logo-plus" @click="openModal"><span class="Compose-txt">Compose</span></p>
        <transition name="slide-fade">
        </section>
        <div class="new-mail" v-if="show" >
        <p> New Message</p>
            <div class="input-line">
                To: 
                <input type="text" list="mail-list"  v-model="NewEmail.to" required>
            </div>
            <label class="input-line">
                Subject
                <input type="text" name="" id="" v-model="NewEmail.subject" required>
            </label>
            <textarea class="free-txt"  type="text" placeholder="" cols="30" rows="20" v-model="NewEmail.title" required></textarea>
            <div class="email-compose-btn">
                <button @click="addMail" >Send</button>
                <button @click="cancel" class="btn-cancel">Cancel</button>
            </div>
        </div>
    `,
    data() {
        return {
            myInterval: null,
            NewEmail: null,
            show: false,
        }
    },
    created() {
        this.NewEmail = emailService.getEmptyMail()
    },
    destroyed() {
        clearInterval(this.myInterval)
    },
    methods: {
        openModal() {
            this.show = !this.show
        },
        cancel() {
            clearInterval(this.myInterval)
            this.saveDraft()
            this.show = false
            this.NewEmail.isDrafts = true
            const msg = {
                txt: 'Add To Your Drafts',
                type: 'success'
            };
            eventBus.emit('show-msg', msg);
            this.NewEmail = emailService.getEmptyMail()
            console.log('this.NewEmail',this.NewEmail )
            
        },
        saveDraft(){
            this.NewEmail.isSave = false
            emailService.save(this.NewEmail).then(()=>this.$emit('upDate'))
        },
        addMail(){
            clearInterval(this.myInterval)
            this.openModal()
            this.NewEmail.isSent = true
            this.NewEmail.isDrafts = false
            emailService.save(this.NewEmail, false).then(()=>this.$emit('upDate'))
            .then(() => {
                const msg = {
                    txt: 'Send successfully',
                    type: 'success'
                };
                eventBus.emit('showMsg', msg);
                eventBus.emit('refresh');
            })
            this.NewEmail = emailService.getEmptyMail()
        }
    },
    computed: {

    },
}