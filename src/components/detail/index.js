import React, { Component } from 'react'
import {detail} from '../../api/request'
import { NavBar, Icon, Button ,Toast} from 'antd-mobile';
import './detail.scss'
import {addproduct} from '../../api/request'


export default class Detail extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    showToast() {
        Toast.info('加入购物车成功', 1.5);
    }
    getdetail=()=>{
        detail(this.props.match.params.id).then(res=>{
            // console.log(res.data)
            this.setState({
                list:res.data
            })
        })
    }
    componentDidMount(){
        console.log(this.props.match.params.id)
        this.getdetail()
    }
    // componentDidUpdate(prevProps,prevState){
    //     console.log(prevState)
    //     if(this.state.list !== prevState.list){
    //         this.getdetail()
    //     }
    // }
    gotocart=()=>{
        this.props.history.push('/cart')
    }
    addtocart=()=>{
        var uid = localStorage.getItem('id')
        var pid = this.props.match.params.id
        console.log(uid,pid)
        addproduct(uid,pid,1).then(res=>{
            console.log(res)
            this.showToast()
        })
    }
    render() {
        let {list} = this.state
        console.log(list)
        return (
            <div className="detail">
                  <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.goBack()}
                    rightContent={[
                        // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        // <Icon key="1" type="ellipsis" />,
                    ]}
                    >商品 评价 详情</NavBar>
                <div className="detail_img">
                    <img src={list.pimg}/>
                </div>
                <h2 className="detail_name">{list.pname}</h2>
                <div className="detail_price">价格:{list.pprice}</div>
                 <div className="detail_content" dangerouslySetInnerHTML={{
                    __html: list.pdesc
                }}/>
                <div className="detail_bottom">
                    <img src="http://www.hqs.cc/m/images/buyCar.png" onClick={this.gotocart}/>
                    <Button type="warning" className="joincart" onClick={this.addtocart}>加入购物车</Button>
                </div>
            </div>
        )
    }
}
