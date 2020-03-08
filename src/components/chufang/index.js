import React, { Component } from 'react'

export default class Chufang extends Component {
    constructor(props){
        super(props)

    }
    todetail=()=>{
        this.props.history.push('/detail/196957')
    }
    render() {
        return (
            <div className="chufang">
                <div className="classify_banner">
                    <img src="http://hqs.cc/yxuploadfile/productclass/fa8cc0fd-883a-4cb7-b3b8-94bc94beeda9_.jpg"/>
                </div>
                <div>
                    <div className="product" onClick={this.todetail}>
                        <div className="pro_tupian"><img src="http://hqs.cc//yxuploadfile/product/original/w_4759f563-aa39-493e-be31-242c7dde96d4_.jpg" /></div>
                        <p>康佳KONKA珍膳煲电压力锅KGDN28-01</p>
                        <div className="pro_jiage">
                            <span>¥ 700.00</span>
                            <img src="http://www.hqs.cc/m/images/buyCar.png" />
                        </div>    
                    </div>
                </div>

            </div>
        )
    }
}
