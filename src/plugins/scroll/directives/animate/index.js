import { scroll } from '../../scrollHandler'

function inserted (el, binding, { context }) {
  const config = {
    enterClass: binding.value?.enterClass ||
      ((typeof binding.value === 'string') && binding.value) ||
      null,
    enterFunc: binding.value?.enterFunc ||
      ((typeof binding.value === 'function') && binding.value) ||
      null,
    leaveFunc: binding.value?.leaveFunc ||
    ((typeof binding.value === 'function') && binding.value) ||
    null,
    restart: binding.value?.restart || false
  }

  context.$ScrollHandler.addIntersection(el, new Interaction(config))

  if ('IntersectionObserver' in window) {
    if (binding.value?.pending) {
      document.addEventListener('observerStart', function start () {
        context.$ScrollHandler.observer.observe(el)
        document.removeEventListener('observerStart', start)
      })
    } else if (!context.$ScrollHandler.observer) {
      document.addEventListener('observerReady', function onready () {
        context.$ScrollHandler.observer.observe(el)
        document.removeEventListener('observerReady', onready)
      })
    } else {
      context.$ScrollHandler.observer.observe(el)
    }
  } else {
    context.$ScrollHandler._onScrollCallback(el)

    el.__WATCHER = context.$watch(() => scroll.top, () => {
      context.$ScrollHandler._onScrollCallback(el)
    })
  }
}

function unbind (el, binding, { context }) {
  context.$ScrollHandler.removeIntersection(el)
  if (!context.$ScrollHandler.observer && el.__WATCHER) {
    // unwatch
    el.__WATCHER()
    el.__WATCHER = null
  }
}

class Interaction {
  constructor (config) {
    this.config = config
  }

  enterCallback (target, handler) {
    if (target.classList.contains('activated')) return
    if (this.config.enterClass) target.classList.add(this.config.enterClass)
    if (this.config.enterFunc) this.config.enterFunc(target)
    target.classList.add('activated')
    if (!this.config.restart) {
      handler.removeIntersection(target)
      if (!handler.observer && target.__WATCHER) {
        // unwatch
        target.__WATCHER()
        target.__WATCHER = null
      }
    }
  }

  leaveCallback (target, handler) {
    if (!target.classList.contains('activated')) return
    if (this.config.enterClass) target.classList.remove(this.config.enterClass)
    if (this.config.leaveFunc) this.config.leaveFunc(target)
    target.classList.remove('activated')
  }
}

export const Animate = {
  name: 'animate',
  inserted,
  unbind
}
