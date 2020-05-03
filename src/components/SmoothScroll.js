import { TweenLite } from 'gsap'

export default class SmoothScroll {
  constructor() {
    const html = document.documentElement
    const body = document.body
    let previousHeight

    let scroller = {
      target: document.querySelector('.scroll-container'),
      ease: 0.08, // <= scroll speed
      endY: 0,
      y: 0,
      resizeRequest: 1,
      scrollRequest: 0,
    }

    let requestId = null

    TweenLite.set(scroller.target, {
      rotation: 0.01,
      force3D: true
    })


    updateScroller()
    window.focus()
    window.addEventListener("resize", onResize)
    document.addEventListener("scroll", onScroll)
    window.addEventListener('pagechange', onResize)


    function updateScroller() {

      const resized = scroller.resizeRequest > 0

      if (resized || (scroller.target.clientHeight !== previousHeight)) {
        const height = scroller.target.clientHeight
        body.style.height = height + "px"
        scroller.resizeRequest = 0
        previousHeight = height
      }

      const scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0

      scroller.endY = scrollY
      scroller.y += (scrollY - scroller.y) * scroller.ease

      if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
        scroller.y = scrollY
        scroller.scrollRequest = 0
      }

      TweenLite.set(scroller.target, {
        y: -scroller.y
      })

      requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null
    }

    function onScroll() {
      scroller.scrollRequest++
      if (!requestId) {
        requestId = requestAnimationFrame(updateScroller)
      }
    }

    function onResize() {
      scroller.resizeRequest++
      if (!requestId) {
        requestId = requestAnimationFrame(updateScroller)
      }
    }
  }
}