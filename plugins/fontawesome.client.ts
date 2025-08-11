import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import specific icons
import { 
  faEnvelope, 
  faCakeCandles, 
  faLocationDot, 
  faDragon, 
  faBrain, 
  faGamepad, 
  faStar, 
  faSuitcaseMedical,
  faBuilding
} from '@fortawesome/free-solid-svg-icons'

import {
  faSkype, 
  faWordpress, 
  faLinkedin, 
  faGithub, 
  faWeixin
} from '@fortawesome/free-brands-svg-icons'

import { 
  faStar as fasStar 
} from '@fortawesome/free-regular-svg-icons'

// Add icons to the library
library.add(
  faSkype, 
  faEnvelope, 
  faCakeCandles, 
  faLocationDot, 
  faDragon, 
  faBrain, 
  faGamepad, 
  faStar, 
  faWordpress, 
  faLinkedin, 
  faGithub, 
  faWeixin, 
  fasStar, 
  faSuitcaseMedical,
  faBuilding
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
