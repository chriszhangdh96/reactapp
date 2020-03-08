import React, { Component } from 'react'
import {connect} from 'react-redux'
import './nav.scss'

class Nav extends Component {
    constructor(props){
        super(props)
        console.log(this.props.nav.navlist)
    }
    render() {
        let {navlist} = this.props.nav
        console.log(navlist)
        return (
            <div className="nav">
                <ul>
                    {
                       navlist.map(item=>{
                           return <li key={item.id}>
                                    <img src={require('../../'+item.img)}/>
                                    <span>{item.name}</span>
                                </li>
                       })
                    }
                </ul>
            </div>
        )
    }
}

export default connect((state)=>state)(Nav)