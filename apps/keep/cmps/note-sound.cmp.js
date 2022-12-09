export default {
    props: ['info'],
    template: `
    <section class="note-info">
        <h3>{{info.title}}</h3>
        <audio controls>
            <source :src="info.url"/>
        </audio>
    </section>
    `,
    created() {
        console.log('sound');
    },
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {

    },
}