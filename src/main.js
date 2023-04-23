import Vue from 'vue'
import App from './App.vue'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import 'bulma-extensions/bulma-timeline/dist/css/bulma-timeline.min.css'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faPhone, faEnvelope, faCakeCandles, faLocationDot, faDragon, faBrain, faGamepad, faStar } from '@fortawesome/free-solid-svg-icons'
import {faWordpress, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faStar as fasStar } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPhone, faEnvelope, faCakeCandles, faLocationDot, faDragon, faBrain, faGamepad, faStar, faWordpress, faLinkedin, faGithub, fasStar)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(Buefy)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
