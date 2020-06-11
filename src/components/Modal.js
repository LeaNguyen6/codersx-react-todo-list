import React, { Component } from 'react'
import './Modal.css'
import classNames from 'classnames'

export default class Modal extends Component {
    constructor(props) {
        super(props)
        // Tạo reference (tham chiều) xong gán vào input
         this.inputRef = React.createRef();
      
    }
    componentDidMount() {
      
            this.inputRef.current.focus();
    }
    render() {
        const {show,close,add}=this.props
        return (
            <div className='Modal'>
                {/* <button className="show-modal btn" onClick={this.showModal.bind(this)}>Open modal</button> */}
                <div className={classNames('modal', { hide: !show })}>
                    <div className="modal__overlay"></div>
                    <div className="modal__body">
                        <span className="close" onClick={close}>X</span>
                        <div className="modal__inner">
                            <input type="text" placeholder="Add a new todo list" ref={this.inputRef} />
                            <button className="btn decline" onClick={add}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
