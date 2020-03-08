import React, { Component } from 'react'
import store  from '../../store'
import "./home.scss"
import Swiper from '../swiper'
import Search from '../search'
import Nav from '../nav'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            n:store.getState().n
        }
    }
    render() {
        return (
            <div className="home">
                <Search />
                <Swiper />
                <Nav />
                {/* {this.state.n} */}
                <div className="banner"><img src="http://www.hqs.cc/m/images/banner1-1.png"/></div>
                <div className="tejia">
                    <img src="http://www.hqs.cc/m/images/tejia1-1.jpg"/>
                    <img src="http://www.hqs.cc/m/images/tejia1-2.jpg"/>
                    <img src="http://www.hqs.cc/m/images/tejia1-3.jpg"/>
                    <img src="http://www.hqs.cc/m/images/tejia1-4.jpg"/>
                </div>
            </div>
        )
    }
}
