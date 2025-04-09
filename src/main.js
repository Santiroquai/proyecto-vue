import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { configure } from 'vee-validate'

import App from './App.vue'
import router from './router'


const app = createApp(App)

configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: true,
    validateOnModelUpdate: true,
});

app.use(createPinia())
app.use(router)

app.mount('#app')

