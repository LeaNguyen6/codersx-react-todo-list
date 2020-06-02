import React, { Component } from 'react'
import './Modal.css'
import classNames from 'classnames'

export default class Modal extends Component {
    constructor(){
        super()
        this.state={isShow:false}
    }
    closeModal(){
        this.setState({isShow:true})
    }
    showModal(){
        this.setState({isShow:false})
    }
    render() {
        return (
            <div className='Modal'>
                <button className="show-modal btn" onClick={this.showModal.bind(this)}>Open modal</button>
                <div className={classNames('modal',{hide:this.state.isShow})}>
                    <div className="modal__overlay"></div>
                    <div className="modal__body">
                        <span class="close" onClick={()=>{this.closeModal()}}>X</span>
                        <div className="modal__inner">
                            <h1 className="title">This is a modal 1</h1>
                            <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <div className="modal__bottom">
                                <button className="btn accept" onClick={()=>{this.closeModal()}}>Accept</button>
                                <button className="btn decline" onClick={()=>{this.closeModal()}}>Decline</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
