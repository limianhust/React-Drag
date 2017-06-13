import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import kind from './C1.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        obj1: [
          {
            merchantId: '78',
            mcc: '5678',
            name: 'li',
            normalMerchantClassName: 'ss'
          },
          {
            merchantId: '78',
            mcc: '5678',
            name: 'li',
            normalMerchantClassName: 'qq'
          },
          {
            merchantId: '78',
            mcc: '5678',
            name: 'li',
            normalMerchantClassName: 'qq'
          },
          {
            merchantId: '78',
            mcc: '5678',
            name: 'li',
            normalMerchantClassName: 'ss'
          }

        ]
      }
    }
  }
  let
  render() {
    let elem = []
    for (key in this.state.data.obj1) {
      let obj = {}
      obj.name = key
      obj.data = this.state.data.obj1[key]
      elem.push(obj)
    }
    //console.log(elem)
    let content = elem.map((item, index) => {
      return (
          <kind data={item} />
      )
    })
    

    return (
      <div className="cntainer">
        {content}
      </div>
    );
  }
}

export default App;
