import React, { Component } from 'react'
// import './c1.css'

export default class Li extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: '1'
        }
    }
    render() {
        if (this.state.status === '1') {
            var drag = <li onDragStart={this.dragStart.bind(this)}  >{this.props.data.mcc},{this.props.data.name}</li>
        }
        else if (this.state === '0') {
            var drag = <div className="dotLine"></div>
        } else {
            var drag = ''
        }
        // drag = this.props.data.status === '1' ?
        //     <li onDragStart={this.dragStart.bind(this)} onDragEnd={this.dragEnd.bind(this)}  >{this.props.data.mcc}{this.props.data.name}</li> :
        //     <div className="dotLine"></div>
        return (
            { drag }
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