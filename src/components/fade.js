import React from "react"
import PropTypes from "prop-types"
import Fade from 'react-reveal/Fade';

const FadeIn = (props) => {

    return (
        <Fade bottom distance='20%' delay={200} duration={800} {...props}>
            {props.children}
        </Fade>
    )
}
  
FadeIn.propTypes = {
    children: PropTypes.node.isRequired,
}

export default FadeIn