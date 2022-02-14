import { isVisible, dispatchCustomEvent } from '@/utils'
import { gsap } from 'gsap'
import Vue from 'vue'

export const scroll = Vue.observable({
  top: 0
})

export default class ScrollHandler {
  constructor (option = {}) {
    this.root = option.root || document.body
    this.navbar = option.nav || null
    this.targetElems = new WeakMap()
    this.observer = null
    this.lazyObserver = null
    this.observerConfig = {
      root: null,
      rootMargin: null,
      threshold: option.threshold || 0.5
    }
  }

  init () {
    // 取得dom元素
    if (typeof this.root === 'string') this.root = document.querySelector(this.root)
    if (typeof this.navbar === 'string') this.navbar = document.querySelector(this.navbar)

    if ('IntersectionObserver' in window) {
      const navHeight = ~~(this.navbar?.getBoundingClientRect().height) || 0
      this.observerConfig = {
        ...this.observerConfig,
        root: null,
        rootMargin: `${navHeight * -1}px 0px -60px 0px`
      }
      this.observer = new IntersectionObserver(this._IOCallback.bind(this), this.observerConfig)

      // 通知作用元素開始observe
      document.dispatchEvent(new Event('observerReady'))
    } else {
      window.addEventListener('scroll', scrollHandler)
    }
  }

  scrollTo (el, options = {}) {
    const { duration = 0.4, offset = 0 } = options
    const defaultOffset = this.navbar && this.navbar.getBoundingClientRect().height
    gsap.to(window, { duration, scrollTo: { y: el, offsetY: offset + defaultOffset } })
  }

  removePending () {
    dispatchCustomEvent('observerStart')
  }

  _IOCallback (entries) {
    entries.forEach(({ target, isIntersecting, intersectionRatio }) => {
      if (isIntersecting) {
        this.targetElems.get(target).enterCallback(target, this)
      } else {
        this.targetElems.get(target).leaveCallback(target, this)
      }
    })
  }

  _onScrollCallback (target) {
    if (isVisible(target)) {
      this.targetElems.get(target).enterCallback(target, this)
    } else {
      this.targetElems.get(target).leaveCallback(target, this)
    }
  }

  addIntersection (el, config) {
    this.targetElems.set(el, config)
  }

  removeIntersection (el) {
    this.observer && this.observer.unobserve(el)
    this.targetElems.get(el) && this.targetElems.delete(el)
  }

  destroy () {
    this.root = null
    this.navbar = null
    this.targetElems = null
    this.observer = null
    this.observerConfig = null

    if (!('IntersectionObserver' in window)) {
      window.removeEventListener('scroll', scrollHandler)
    }
  }
}

function scrollHandler () {
  scroll.top = window.pageYOffset
}
