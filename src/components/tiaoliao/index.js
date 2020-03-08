import React, { Component } from 'react'

export default class Tiaoliao extends Component {
    constructor(props){
        super(props)

    }
    todetail=()=>{
        this.props.history.push('/detail/196958')
    }
    render() {
        return (
            <div className="tiaoliao">
                 <div className="classify_banner">
                    <img src="http://hqs.cc/yxuploadfile/productclass/2716fe01-9943-41d1-b7b6-9fdb9039e7bd_.jpg"/>
                </div>
                <div>
                    <div className="product" onClick={this.todetail}>
                        <div className="pro_tupian"><img src="http://hqs.cc//yxuploadfile/product/originalthumbnail/YX20191129_640327570.jpg" /></div>
                        <p>富昌枸杞宁夏特级红枸杞200g</p>
                        <div className="pro_jiage">
                            <span>¥ 41.00</span>
                            <img src="http://www.hqs.cc/m/images/buyCar.png" />
                        </div>    
                    </div>
                </div>
            </div>
            
        )
    }
}
