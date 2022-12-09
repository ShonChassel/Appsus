const { createApp } = Vue


import { router } from './routes.js'

import appHeader from './cmps/app-header.cmp.js'
import userMsg from './cmps/user-msg.cmp.js'

const options = {
	template: `
        <section>
            <app-header />
            <router-view />
            <user-msg />
        </section>
    `,
	components: {
		appHeader,
		userMsg,
	},
}

const app = createApp(options)
app.use(router)
app.mount('#app')
