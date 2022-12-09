export default {

    template:`
    <section class="colors">
            <div class="clr1 btn" :class="{checked: isActive === '#f28b82'}" @click="updateColor('#f28b82')"></div>
            <div class="clr2 btn" :class="{checked: isActive === '#fff475'}" @click="updateColor('#fff475')"></div>
            <div class="clr3 btn" :class="{checked: isActive === '#fbbc04'}" @click="updateColor('#fbbc04')"></div>
            <div class="clr4 btn" :class="{checked: isActive === '#ccff90'}" @click="updateColor('#ccff90')"></div>
            <div class="clr5 btn" :class="{checked: isActive === '#a7ffeb'}" @click="updateColor('#a7ffeb')"></div>
            <div class="clr6 btn" :class="{checked: isActive === '#cbf0f8'}" @click="updateColor('#cbf0f8')"></div>
            <div class="clr7 btn" :class="{checked: isActive === '#aecbfa'}" @click="updateColor('#aecbfa')"></div>
            <div class="clr8 btn" :class="{checked: isActive === '#d7aefb'}" @click="updateColor('#d7aefb')"></div>
            <div class="clr9 btn" :class="{checked: isActive === '#fdcfe8'}" @click="updateColor('#fdcfe8')"></div>
            <div class="clr10 btn" :class="{checked: isActive === '#e6c9a8'}" @click="updateColor('#e6c9a8')"></div>
            <div class="clr11 btn" :class="{checked: isActive === '#e8eaed'}" @click="updateColor('#e8eaed')"></div>
            <div class="clr12 btn" :class="{checked: isActive === '#fff'}" @click="updateColor('#fff')"></div>
        </section>
    `,
    data(){
        return{
            isActive: ''
        }
    },
    methods: {
        updateColor(value){
            this.isActive = value
            this.$emit('update-color',value)
        }
    },
    computed: {

    },
}