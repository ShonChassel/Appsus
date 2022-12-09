import { eventBus } from "../services/event-bus.service.js"

export default {
    components: {
        
    },
    template:`
    
    <section class="backgrounds">
            <div @click="setBgImg('url(assets/img/backgrounds/bg3.jpg)')"class="bgc1"><img src="./assets/img/backgrounds/bg1.jpg" alt=""></div>
            <div @click="setBgImg()"class="bgc2"><img src="./assets/img/backgrounds/bg2.jpg" alt=""></div>
            <div @click="setBgImg"class="bgc3"><img src="./assets/img/backgrounds/bg3.jpg" alt=""></div>
            <div @click="setBgImg"class="bgc4"><img src="./assets/img/backgrounds/bg4.jpg" alt=""></div>
            <div @click="setBgImg"class="bgc5"><img src="./assets/img/backgrounds/bg5.jpg" alt=""></div>
            <div @click="setBgImg"class="bgc6"><img src="./assets/img/backgrounds/bg6.jpg" alt=""></div>
            <div @click="setBgImg"class="bgc7"><img src="./assets/img/backgrounds/bg7.jpg" alt=""></div>
            <div @click="setBgImg"class="bgc8"><img src="./assets/img/backgrounds/bg8.jpg" alt=""></div>
            <div @click="setBgImg"class="bgc9"><img src="./assets/img/backgrounds/bg9.jpg" alt=""></div>
           
        </section>
    `,
    data(){
        return{
            isActive: '',
            bgImage: '',
        }
    },
    methods: {
        setBgImg(url){
            console.log(url);
            eventBus.emit('change-bg',url)
        }
    },
    computed: {

    },
}