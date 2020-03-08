import React, { Component } from 'react'

export default class Yinpin extends Component {
    constructor(props){
        super(props)

    }
    todetail=()=>{
        this.props.history.push('/detail/196961')
    }
    render() {
        return (
            <div className="yinpin">
                <div className="classify_banner">
                    <img src="http://hqs.cc/yxuploadfile/productclass/758dab91-5a8c-4029-b609-bb773a710ac2_.jpg"/>
                </div>
                <div>
                    <div className="product" onClick={this.todetail}>
                        <div className="pro_tupian"><img src="http://hqs.cc//yxuploadfile/product/original/w_9e18cc62-bb54-4e48-a52a-fbcbbc182aef_.jpg" /></div>
                        <p>开古八宝菊花茶115g</p>
                        <div className="pro_jiage">
                            <span>¥ 16.00</span>
                            <img src="http://www.hqs.cc/m/images/buyCar.png" />
                        </div>    
                    </div>
                </div>
            </div>
        )
    }
}
