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

        let listContent = this.state.list.map((item, index) => {
            return <Li index={index} data={item} onDragLeave={this.dragLeave.bind(this)} />
        })
        return (
            <div classsName="item">
                <div>props.data.name</div>
                <ul onDragLeave={this.dragLeave.bind(this)}>
                    {listContent}
                </ul>
            </div>
        )
    }

    dragLeave(e) {

    }


}