import React from 'react'
import { Link } from 'react-router-dom'
import ArrowButton from '../Components/Buttons/ArrowButton'

type Props = {
    size: string
}

const HireMeBlock = (props: Props) => {
    const { size } = props

    return (
        <Link to="/contact" className={`contact ${size} block`}>
            <div className="contact__text">
                <p>What to hire me?</p>
                <h1>Get in touch</h1>
            </div>
            <ArrowButton direction="right" />
        </Link>
    )
}

export default HireMeBlock