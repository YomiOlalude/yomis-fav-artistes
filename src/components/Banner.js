import React from 'react'

const Banner = (props) => {
    return (
        <div className="banner">
            <h2>{props.title}</h2>
            <div></div>
            <p>{props.subtitle}</p>
            {props.children}
        </div>
    )
}

export default Banner
