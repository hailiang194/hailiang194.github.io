import Vue from 'vue'
import App from './App.vue'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import 'bulma-extensions/bulma-timeline/dist/css/bulma-timeline.min.css'
import router from './router'
import { inject } from '@vercel/analytics'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faEnvelope, faCakeCandles, faLocationDot, faDragon, faBrain, faGamepad, faStar, faSuitcaseMedical } from '@fortawesome/free-solid-svg-icons'
import {faSkype, faWordpress, faLinkedin, faGithub, faWeixin} from '@fortawesome/free-brands-svg-icons'
import { faStar as fasStar } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import i18n from '@/i18n'

library.add(faSkype, faEnvelope, faCakeCandles, faLocationDot, faDragon, faBrain, faGamepad, faStar, faWordpress, faLinkedin, faGithub, faWeixin, fasStar, faSuitcaseMedical)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


Vue.use(Buefy)
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')

inject()