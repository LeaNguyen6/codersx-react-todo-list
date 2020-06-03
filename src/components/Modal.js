import React, { Component } from 'react'
import './Modal.css'
import classNames from 'classnames'

export default class Modal extends Component {
     constructor(props){
         super(props)
     }
    render() {
        return (
            <div className='Modal'>
                {/* <button className="show-modal btn" onClick={this.showModal.bind(this)}>Open modal</button> */}
                <div className={classNames('modal',{hide:this.props.show})}>
                    <div className="modal__overlay"></div>
                    <div className="modal__body">
                        <span className="close" onClick={this.props.close}>X</span>
                        <div className="modal__inner">
                            <input type="text" placeholder="Add a new todo list" />
                            <button className="btn decline" onClick={this.props.add}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
