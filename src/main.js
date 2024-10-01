


import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index.js'

//vuetify
import 'vuetify/styles'

import '@fortawesome/fontawesome-free/css/all.css'

import { createVuetify } from 'vuetify'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//Icons
import { aliases, mdi} from "vuetify/lib/iconsets/mdi";
import { fa } from 'vuetify/iconsets/fa'
import '@mdi/font/css/materialdesignicons.css'



const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
          mdi,
        } 
      },
      icon: {
        defaultSet: 'fa',
        sets: {
          fa,
        },
      },
  components,
  directives,
})

createApp(App).use(vuetify).use(router).mount('#app')  