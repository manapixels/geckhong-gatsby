import { gsap } from 'gsap'
import { map, lerp, calcWinsize, getMousePos } from '../helpers/utils'

import { EventEmitter } from 'events'

// Calculate the viewport size
let winsize = calcWinsize()
window.addEventListener('resize', () => {
    winsize = calcWinsize()
})

// Track the mouse position
let mouse = {x: 0, y: 0}
window.addEventListener('mousemove', ev => mouse = getMousePos(ev))

export default class Cursor extends EventEmitter {
    constructor(el) {
        super()
        this.DOM = {el: el}
        this.DOM.el.style.opacity = 0
        this.DOM.circleInner = this.DOM.el.querySelector('.cursor__inner')
        
        this.filterId = '#filter-1'
        this.DOM.feTurbulence = document.querySelector(`${this.filterId} > feTurbulence`)
        
        this.primitiveValues = {turbulence: 0}

        this.createTimeline()

        this.bounds = this.DOM.el.getBoundingClientRect()
        
        this.renderedStyles = {
            tx: {previous: 0, current: 0, amt: 0.25},
            ty: {previous: 0, current: 0, amt: 0.25},
            radius: {previous: 25, current: 25, amt: 0.05}
        }

        this.listen()

        this.onMouseMoveEv = () => {
            this.renderedStyles.tx.previous = this.renderedStyles.tx.current = mouse.x - this.bounds.width/2
            this.renderedStyles.ty.previous = this.renderedStyles.ty.previous = mouse.y - this.bounds.height/2
            gsap.to(this.DOM.el, {duration: 0.9, ease: 'Power3.easeOut', opacity: 1})
            requestAnimationFrame(() => this.render())
            window.removeEventListener('mousemove', this.onMouseMoveEv)
        }
        window.addEventListener('mousemove', this.onMouseMoveEv)
    }
    render() {
        this.renderedStyles['tx'].current = mouse.x - this.bounds.width/4*3
        this.renderedStyles['ty'].current = mouse.y - this.bounds.height/4*3

        for (const key in this.renderedStyles ) {
            this.renderedStyles[key].previous = lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt)
        }
                    
        this.DOM.el.style.transform = `translateX(${(this.renderedStyles['tx'].previous)}px) translateY(${this.renderedStyles['ty'].previous}px)`
        this.DOM.circleInner.setAttribute('r', this.renderedStyles['radius'].previous)

        requestAnimationFrame(() => this.render())
    }
    createTimeline() {
        // init timeline
        this.tl = gsap.timeline({
            paused: true,
            onStart: () => {
                this.DOM.circleInner.style.filter = `url(${this.filterId}`
            },
            onUpdate: () => {
                this.DOM.feTurbulence.setAttribute('baseFrequency', this.primitiveValues.turbulence)
            },
            onComplete: () => {
                this.DOM.circleInner.style.filter = 'none'
            }
        })
        .to(this.primitiveValues, { 
            duration: 0.3,
            ease: 'Power3.easeOut',
            startAt: {turbulence: 0},
            turbulence: 0
        });
    }
    enter() {
        this.renderedStyles['radius'].current = 60
        this.tl.restart()
    }
    leave() {
        this.renderedStyles['radius'].current = 25
        this.tl.progress(1).kill()
    }
    listen() {
        this.on('enter', () => this.enter())
        this.on('leave', () => this.leave())
    }
}