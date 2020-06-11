import React, { Component } from 'react'
import './Google.css'

export default class Google extends Component {
    constructor() {
        super()
        this.inputRef = React.createRef()
    }
    componentDidMount() {
        this.inputRef.current.focus()
    }
    render() {
        console.log('gg render')
        return (
            <div className='Google'>
                <div className="image">
                    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" height='85' />

                </div>
                <div className="search">
                    <i className="fas fa-search"></i>
                    <input type="text" ref={this.inputRef} 
                    />
                    <i className="fas fa-microphone"></i>
                </div>
                <div className="group-btn">
                    <button>Google Search</button>
                    <button>I'm Feeling Lucky</button>

                </div>
                <p>Google offered in: 
        <a href="">Tiếng Việt </a>  <a href="">Français</a> <a href="">中文（繁體）</a> </p>
            </div>
        )
    }
}