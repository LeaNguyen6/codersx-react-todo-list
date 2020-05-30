import React, { Component } from 'react'
import './TodoItem.css'
import classNames from 'classnames'
export default class TodoItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={classNames('todoItem', { completed: this.props.item.done })}>
                <p onClick={this.props.onClick}>{this.props.item.title}</p>
            </div>
        )
    }
}
