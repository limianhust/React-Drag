import React, { Component } from 'react'
// import './c1.css'
import Li from './Li.js'

export default class Kind extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }

    }
    render() {
        console.log(this.props.data)
        
        let listContent = this.props.data.data.map((item, index) => 
            <li>
                <Li index={index} data={item} />
            </li>
        )
        console.log(this.props.data)
        return (
            
            <div classsName="item">
                <div>{this.props.data.name}</div>
                <ul onDragLeave={this.dragLeave.bind(this)}>
                    {listContent}
                </ul>
            </div>
        
        )
    }

    dragLeave(e) {

    }


}
// mcc={item.mcc} name={item.name} onDragLeave={this.dragLeave.bind(this)}