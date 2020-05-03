import { gsap } from 'gsap'
import React from 'react'
import { EventEmitter } from 'events'

import { map, lerp, calcWinsize, getMousePos } from '../helpers/utils'
import { useEffect } from 'react'

// Calculate the viewport size
let winsize

// Track the mouse position
let mouse = {x: 0, y: 0}

let cursorRef = React.createRef()

const Cursor = () => {
    useEffect(() => {
		const cur = new CursorAnimation(cursorRef);

		[...document.querySelectorAll('a'), ...document.querySelectorAll('button')].forEach(el => {
			el.addEventListener('mouseenter', () => cur.emit('enter'));
			el.addEventListener('mouseleave', () => cur.emit('leave'));
        })
        window.addEventListener('resize', () => {
            winsize = calcWinsize()
        })
        window.addEventListener('mousemove', ev => mouse = getMousePos(ev))

    }, [])

    return (
        <svg className="cursor" width="12" height="12" viewBox="0 0 24 24" ref={(ref) => cursorRef = ref}>
            <circle className="cursor__inner" cx="12" cy="12" r="1" />
        </svg>
    )
}

export default Cursor

class CursorAnimation extends EventEmitter {
    constructor(el) {
        super()
        this.DOM = {el: el}
        this.DOM.el.style.opacity = 0
        this.DOM.circleInner = this.DOM.el.querySelector('.cursor__inner')
        
        this.filterId = '#filter'

        this.bounds = this.DOM.el.getBoundingClientRect()
        
        this.renderedStyles = {
            tx: {previous: 0, current: 0, amt: 0.12},
            ty: {previous: 0, current: 0, amt: 0.12},
            radius: {previous: 12, current: 12, amt: 0.24}
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
        this.renderedStyles['tx'].current = mouse.x - this.bounds.width/2
        this.renderedStyles['ty'].current = mouse.y - this.bounds.height/2

        for (const key in this.renderedStyles ) {
            this.renderedStyles[key].previous = lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt)
        }
                    
        this.DOM.el.style.transform = `translateX(${(this.renderedStyles['tx'].previous)}px) translateY(${this.renderedStyles['ty'].previous}px)`
        this.DOM.circleInner.setAttribute('r', this.renderedStyles['radius'].previous)

        requestAnimationFrame(() => this.render())
    }
    enter() {
        this.renderedStyles['radius'].current = 1
    }
    leave() {
        this.renderedStyles['radius'].current = 12
    }
    listen() {
        this.on('enter', () => this.enter())
        this.on('leave', () => this.leave())
    }
}