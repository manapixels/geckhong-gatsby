// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c

// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b

const calcWinsize = () => {
    return {width: window.innerWidth, height: window.innerHeight}
}

// Gets the mouse position
const getMousePos = (e) => {
    let posx = 0
    let posy = 0
    if (!e) e = window.event

    // Use e.pageX and pageY if utilising fixed viewport smooth scrolling
    if (e.screenX || e.screenY) {
        posx = e.screenX
        posy = e.screenY
    }
    if (e.clientX || e.clientY)    {
        posx = e.clientX
        posy = e.clientY
    }
    
    return { x : posx, y : posy }
}

export { map, lerp, calcWinsize, getMousePos }