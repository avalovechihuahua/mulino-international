export const isVisible = (target) => {
  if (typeof target === 'string') target = document.querySelector(target)
  const rect = target.getBoundingClientRect()
  target = null
  return (rect.top <= window.innerHeight / 4 * 3) && (rect.bottom >= window.innerHeight / 4)
}

export const isIE = () => {
  const ua = navigator.userAgent
  return /MSIE|Trident/.test(ua)
}

export const dispatchCustomEvent = (evtName, root = document) => {
  let event
  if (typeof (Event) === 'function') {
    event = new Event(evtName)
  } else {
    event = document.createEvent('Event')
    event.initEvent(evtName, true, true)
  }
  root.dispatchEvent(event)
}

export const isEndsWith = (str, search) => {
  return str.substring(str.length - search.length, str.length) === search
}

export function shuffle (array) {
  let m = array.length; let t; let i

  while (m) {
    i = Math.floor(Math.random() * m--)

    t = array[m]
    array[m] = array[i]
    array[i] = t
  }

  return array
}
