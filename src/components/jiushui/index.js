import React, { Component } from 'react'

export default class Jiushui extends Component {
    constructor(props){
        super(props)

    }
    todetail=()=>{
        this.props.history.push('/detail/196960')
    }
    render() {
        return (
            <div className="jiushui">
                <div className="classify_banner">
                    <img src="http://hqs.cc/yxuploadfile/productclass/09282646-d80a-4321-b0d7-2964de0964ce_.jpg"/>
                </div>
                <div>
                    <div className="product" onClick={this.todetail}>
                        <div className="pro_tupian"><img src="http://hqs.cc//yxuploadfile/product/original/w_003157ca-fed0-4e98-8b95-366cc096a031_.jpg" /></div>
                        <p>火葡园干红葡萄酒750ml（赤霞珠）</p>
                        <div className="pro_jiage">
                            <span>¥ 269.00</span>
                            <img src="http://www.hqs.cc/m/images/buyCar.png" />
                        </div>    
                    </div>
                </div>
            </div>
        )
    }
}
