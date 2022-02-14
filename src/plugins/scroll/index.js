import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import ScrollHandler from './scrollHandler'
import { Animate } from './directives/animate'
import { dispatchCustomEvent } from '@/utils'

gsap.registerPlugin(ScrollToPlugin)

export const scrollHandler = new ScrollHandler({ threshold: 0.25, nav: '.Navbar' })

export default {
  install (Vue, options) {
    Vue.prototype.$ScrollHandler = scrollHandler
    Vue.prototype.$scrollTo = scrollHandler.scrollTo.bind(scrollHandler)
    Vue.directive(Animate.name, Animate)

    if (document.readyState !== 'complete') {
      window.addEventListener('load', function onload () {
        setupScrollPlugin(scrollHandler)
        window.removeEventListener('load', onload)
      })
    } else {
      setupScrollPlugin(scrollHandler)
    }
  }
}

function setupScrollPlugin (scrollHandler) {
  scrollHandler.init()
  dispatchCustomEvent('scrollPluginReady')
}
