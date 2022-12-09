import { emailService } from '../services/email.service.js';

export default {
    props: ['email'],
    components: {
        emailService,
    },
    template: `
        <div class="email-preview" @click="setDetails(email.id)" :class="{isRead:email.isRead}">
            <span class="first-letter" :style="generateRandomColor">{{email.sendByFirst}}</span>
            <div class="check-star">
                <!-- <input  type="checkbox"> -->
                <i :class="setStar" :class="{checked:email.isStar}" @click.stop="changeColor(email)"></i>
            </div>
            <p class="sendBy">{{email.sendBy}}</p>
           <p>{{email.subject}}</p>
           <p class="time">{{email.sentAt}}</p>
           <div class="icons-preview">
              <i class="fas fa-trash trash"  @click.stop="deleteEmail(email.id)" ></i>
              <i :class="setIcon" @click.stop="toggleIcon(email)"></i>
           </div>
           
        </div>
    `,
    created() {

    },
    data() {
        return {
            
        }
    },
    methods: {

        deleteEmail(emailId) {
            console.log('emailId', emailId);
            if (!this.email.isTrash) {
                this.email.isTrash = true
                emailService.save(this.email)
                this.$emit('upDateTrash')
            } else {
                console.log('isTrash', emailId);
                this.$emit('remove', emailId);
            }
        },
        changeColor(email) {

            email.isStar = !email.isStar
            emailService.save(email)
        },
        toggleIcon(email) {
            email.isRead = !email.isRead
            emailService.save(email)

        },
        setDetails(emailId) {

            this.email.isRead = true
            emailService.save(this.email)

            this.$router.push(`/mail/${emailId}`)
        },
        
    },
    computed: {
        setIcon() {
            if (this.email.isRead) return 'fas fa-envelope-open'
            return 'fas fa-envelope'
        },
        setStar() {
            if (this.email.isStar) return 'fas fa-solid fa-star'
            return 'far fa-star'
        },
        checkFirstLetter() {


        },
        generateRandomColor() {
            let maxVal = 0xFFFFFF; // 16777215
            let randomNumber = Math.random() * maxVal;
            randomNumber = Math.floor(randomNumber);
            randomNumber = randomNumber.toString(16);
            let randColor = randomNumber.padStart(6, 0);
            return {backgroundColor: `#${randColor.toUpperCase()}`}
        }
        
    },
}