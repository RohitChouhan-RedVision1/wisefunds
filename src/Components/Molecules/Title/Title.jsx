import React from 'react'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Title = (props) => {
    return (
        // <div className="title">
        //     <h3>{props.title}</h3>
        //     <p>{props.description}</p>
        // </div>
        <AnimationOnScroll animateIn="animate__slideInUp" offset={0}>
            < div class="four" >
                <h3>{props.title1} <em>{props.title2}</em> {props.title3}</h3>
                <p>{props.description}</p>
            </div >
        </AnimationOnScroll >

    )
}

export default Title