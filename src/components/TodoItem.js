import React, { Component } from 'react'
import './TodoItem.css'

import classNames from 'classnames'
import PropTypes from 'prop-types'; 

export default class TodoItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={classNames('todoItem', { completed: this.props.item.done })}>
                <p onClick={this.props.onClick}>{this.props.item.title}</p> 
                <span onClick={this.props.remove}>x</span>
            </div>
        )
    }
}

TodoItem.propTypes={
    onClick:PropTypes.func,
    remove:PropTypes.func,
    item:PropTypes.shape({
        title:PropTypes.string.isRequired,
        done:PropTypes.bool.isRequired
    })
}