import { eventBus } from "../services/event-bus.service.js";


export default {
    
	template: `
<section class="home-page" >

    <div class="container-font">
        <h1>
            <i></i>
            <span id="a">APPSUS</span>
            <span id="b">IS</span>
            <span id="c">AWESOME</span>
        </h1>
    </div>
    <img class="logo" src="./assets/img/logos/homepage3.png" alt="">
    <section class="btns">
        <button class="home-btn" @click="navigate('email')">Check Your Mails</button>
        <button class="home-btn" @click="navigate('keep')" >Check Your Notes</button>
    </section>
</section>

    `,
    methods: {
        navigate(to){
            this.$router.push(`/${to}`);
            eventBus.emit('navigate',to)
        }
    },
    
}
