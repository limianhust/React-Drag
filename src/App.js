import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import kind from './kind.js'
import getLeftData from './getLeftData.js'

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
  

  render() {
    console.log(this.state.data)
    let data = getLeftData(this.state.data.obj1)
    var content = []
    var key
    console.log(data)
    for( key in data){
      console.log(key,data)
      let obj = {}
      obj.name = key
      obj.data = data[key]
      content.push(obj)
    }
    console.log(content)
    let list = content.map((item, index) => 
      <li><kind name={item.name} data={item.data} /></li>
      
    )


    return (
      <ul className="container">
        {list}
      </ul>
    );
  }
}

export default App;
