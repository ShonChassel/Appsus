import { eventBus } from "../services/event-bus.service.js";

export default {
    template: `
        <header class="app-header">
            <router-link to="/" @click="changeLogo('home')">
                <h1><img class="img-logo" :src="imgUrl"/>{{heading}}</h1>
            </router-link>
            <div @click="isOpen = !isOpen" class="menu">
                    <img src="assets/img/logos/grid.png" alt="" />
            </div>
            <nav :class="{open: isOpen}">
                <router-link @click="changeLogo('home')" to="/"><img src="assets/img/logos/home.png" /></router-link>
                <router-link @click="changeLogo('about')" to="/about"><img src="assets/img/logos/about.png" /></router-link>
                <router-link @click="changeLogo('email')" to="/email" ><img src="assets/img/logos/mail.png" /></router-link>
                <router-link @click="changeLogo('keep')" to="/keep" ><img src="assets/img/logos/keep48dp.png" /></router-link>
            </nav>
        </header>
    `,
    created(){
        eventBus.on('navigate',this.changeLogo)
    },
    data(){
        return{
            imgUrl: 'assets/img/logos/home.png',
            heading: 'Appsus',
            isOpen: false
        }
    },
    methods: {

        changeLogo(value){
            switch(value){
                case 'home': {
                    this.imgUrl="assets/img/logos/home.png"; 
                    this.heading="Appsus"
                    break;
                }
                case 'about': {
                    this.imgUrl="assets/img/logos/about.png";
                    this.heading="About"
                    break;
                }
                case 'email': {
                    this.imgUrl="assets/img/logos/mail.png"; 
                    this.heading="Gmail"
                    break;
                }
                case 'keep': {
                    this.imgUrl="assets/img/logos/keep48dp.png";
                    this.heading="Keep"
                    break;
                }
            }
            this.isOpen =false
        }
    }
}
