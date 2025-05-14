import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faFacebook, faLinkedin, faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import {
  faCheck,
  faPhone,
  faLocationDot,
  faArrowRight,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faTwitter,
  faFacebook,
  faLinkedin,
  faSquareFacebook,
  faCheck,
  faPhone,
  faLocationDot,
  faArrowRight,
  faXmark
)

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
