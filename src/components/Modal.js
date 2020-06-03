import React, { Component } from 'react'
import './Modal.css'
import classNames from 'classnames'

export default class Modal extends Component {
    constructor(props) {
        super(props)
        // Tạo reference (tham chiều) xong gán vào input
        //  this.inputRef = React.createRef();
        this.textInput = null;

        this.setTextInputRef = element => {
            this.textInput = element;
        };

        this.focusTextInput = () => {
            // Focus the text input using the raw DOM API
            if (this.textInput) this.textInput.focus();
        };
    }
    componentDidMount() {
        // autofocus the input on mount
        this.focusTextInput();
        //     //Explicitly focus the text input using the raw DOM API
        //     // Note: we're accessing "current" to get the DOM node
        //     //debugger;
        //     this.inputRef.current.focus();
    }
    render() {
        return (
            <div className='Modal'>
                {/* <button className="show-modal btn" onClick={this.showModal.bind(this)}>Open modal</button> */}
                <div className={classNames('modal', { hide: this.props.show })}>
                    <div className="modal__overlay"></div>
                    <div className="modal__body">
                        <span className="close" onClick={this.props.close}>X</span>
                        <div className="modal__inner">
                            <input type="text" placeholder="Add a new todo list" ref={this.setTextInputRef} />
                            <button className="btn decline" onClick={this.props.add}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
