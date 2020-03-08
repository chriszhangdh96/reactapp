import React, { Component } from 'react'

export default class Zibo extends Component {
    constructor(props){
        super(props)

    }
    todetail=()=>{
        this.props.history.push('/detail/196959')
    }
    render() {
        return (
            <div className="zibo">
                 <div className="classify_banner">
                    <img src="http://hqs.cc/yxuploadfile/productclass/7b2a9cc8-f18c-4a86-94d1-53accd640d4e_.jpg"/>
                </div>
                <div>
                    <div className="product" onClick={this.todetail}>
                        <div className="pro_tupian"><img src="http://hqs.cc//yxuploadfile/product/original/w_e15ec4ff-6b7f-441b-9890-fa3d1a982d3b_.jpg" /></div>
                        <p>塞上优果黑枸杞250g</p>
                        <div className="pro_jiage">
                            <span>¥ 260.00</span>
                            <img src="http://www.hqs.cc/m/images/buyCar.png" />
                        </div>    
                    </div>
                </div>
            </div>
        )
    }
}
