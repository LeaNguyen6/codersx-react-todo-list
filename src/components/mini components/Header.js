import React from 'react'
import './header.css'

export default function Header() {
    return (
        <div className="header">
            <a href="#" className="back"> <i className="fas fa-long-arrow-alt-left"></i> Go back</a>
            <img src="logo192.png" alt="" srcset=""/>
            <button className="signup">Sign up</button>
        </div>
    )
}
