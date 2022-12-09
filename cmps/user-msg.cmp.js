import { eventBus } from '../services/event-bus.service.js'

export default {
	template: `
        <section :class="msg.type" v-if="msg.txt" class="user-msg">
            {{ msg.txt }}
        </section>
    `,
	data() {
		return {
			msg: { txt: '', type: 'success' },
		}
	},
	created() {
		eventBus.on('show-msg', this.showMsg)
	},
	methods: {
		showMsg(msg) {
			this.msg = msg
			setTimeout(() => (this.msg.txt = ''), this.msg.timeout || 1500)
		},
	},
}
