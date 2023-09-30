import { createApp } from 'vue'
import App from './Login.vue'
import PrimeVue from 'primevue/config'

// App Theme
import 'primevue/resources/themes/md-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

// Add PrimeFlex
import 'primeflex/primeflex.css'

// Add Components
import Card from 'primevue/card'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import ToastService from 'primevue/toastservice'

createApp(App)
    .use(PrimeVue, { ripple: true })
    .component('Card', Card)
    .component('Button', Button)
    .component('InputText', InputText)
    .use(ToastService)
    .mount('#app')

