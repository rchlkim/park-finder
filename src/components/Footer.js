import React from 'react'
import './Footer.css'
import Dropdown from './Dropdown'

const Footer = () => {
    return (
        <div className = "footer">
            <h1> Welcome! </h1>
            <h2> To get started, select an activity you wish to do at a national park. </h2>
            <div className = "dropdown">
                <Dropdown class="dropdown"/>
            </div>
        </div>
    )
}

export default Footer