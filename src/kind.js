import React, { Component } from 'react'
// import './c1.css'
import Li from './Li.js'

export default class kind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {
                    name: 'qq',
                    mcc: '12',
                    merchantId: '234',
                    normalMerchantClassName: 'www'
                }
            ]
        }

    }
    render() {
        console.log(this.props.data)
        
        let listContent = this.props.data.map((item, index) => 
            <Li mcc={item.mcc} name={item.name} onDragLeave={this.dragLeave.bind(this)} />
        )
        console.log(this.props.data)
        return (
            <div classsName="item">
                <div>{this.props.name}</div>
                <ul onDragLeave={this.dragLeave.bind(this)}>
                    {listContent}
                </ul>
            </div>
        )
    }

    dragLeave(e) {

    }


}