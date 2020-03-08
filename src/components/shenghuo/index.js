import React, { Component } from 'react'

export default class Shenghuo extends Component {
    constructor(props){
        super(props)

    }
    todetail=()=>{
        this.props.history.push('/detail/196956')
    }
    render() {
        return (
            <div className="shenghuo">
               <div className="classify_banner">
                   <img src="http://hqs.cc/yxuploadfile/productclass/b2340616-5f5e-479f-a39a-50a13ebdd4f4_.jpg"/>
                </div>
                <div>
                    <div className="product" onClick={this.todetail}>
                        <div className="pro_tupian"><img src="http://hqs.cc//yxuploadfile/product/originalthumbnail/YX20191217_31715635.jpg" /></div>
                        <p>山水SANSUI便携式旅</p>
                        <div className="pro_jiage">
                            <span>¥ 250.00</span>
                            <img src="http://www.hqs.cc/m/images/buyCar.png" />
                        </div>    
                    </div>
                </div>
            </div>
        )
    }
}
