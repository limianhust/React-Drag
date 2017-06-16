import React, { Component } from 'react'
// import './c1.css'
import Dotline from './Dotline'

export default class Li extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: '1'
        }
    }
    render() {
        return (
            {this.state.status === '1' ? <li index={this.props.index} onDragStart={this.dragStart.bind(this)} onDragEnd={this.dragEnd.bind(this)}  >{this.props.data.mcc+this.props.data.name}</li> :
            <Dotline /> }
        )


    }
    dragStart(e) {
        this.setState({
            status: '0'
        })
    }
    dragEnd(e) {
        if (e.originalEvent.clientX < 800) {
            this.setState({
                status: '2'
            })
        }
    }
}