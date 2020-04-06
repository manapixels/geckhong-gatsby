import React from "react"
import PropTypes from "prop-types"

const FadeInSection = ({ className, children }) => {

    const [isVisible, setVisible] = React.useState(false)
    const domRef = React.useRef()

    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            })
        })
        observer.observe(domRef.current)

        return () => observer.unobserve(domRef.current)
    }, [])

    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${className ? className : ''}`}
            ref={domRef}
        >
            {children}
        </div>
    )
}

FadeInSection.propTypes = {
    className: PropTypes.string,
	children: PropTypes.node.isRequired,
}

export default FadeInSection