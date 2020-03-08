import React, { Component } from 'react'
import './cart.scss'
import { NavBar, Icon , Stepper, Button} from 'antd-mobile';
import {connect} from 'react-redux'
import actionCreator from './actionCreator';
import {getcartlist,updatecartlist,deleteproduct} from '../../api/request'

class Cart extends Component {
    constructor(props){
        super(props)
        this.state={
            title:"购物车",
            // list:[]
        }
    }
    onChange = (uid,pid,val) => {
        console.log(val)
        updatecartlist(uid,pid,val).then(res=>{
            console.log(res)
        })

    }
    delproduct=(pid)=>{
        console.log(pid)
        let uid = localStorage.getItem('id')
        deleteproduct(uid,pid).then(res=>{
            console.log(res)
            this.cshcartlist()
        })
    }
    cshcartlist=()=>{
        getcartlist(localStorage.getItem('id')).then(res=>{
            console.log(res.data)
            this.props.getcarts(res.data)
            // console.log(this.props.cart.list)
        })
    }
    componentDidMount(){
        this.cshcartlist()
    }
    render() {
        let {list} = this.props.cart
        return (
            <div className="cart">
                 <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.goBack()}
                    rightContent={[
                        <span>编辑</span>
                    ]}
                    >{this.state.title}</NavBar>
                    <ul>
                        {
                            list.map(item=>{
                                return <li>
                                        <div className="cart_btn"><input type="checkbox"/></div>
                                        <div className="cart_img"><img src={item.pimg}/></div>
                                        <div className="cart_info">
                                            <p>{item.pname}</p>
                                            <p>¥{item.pprice}</p>
                                            <Stepper 
                                                style={{ width: '20%', minWidth: '100px' }}
                                                showNumber
                                                max={15}
                                                min={1}
                                                defaultValue={item.pnum}
                                                onChange={this.onChange.bind(this,item.uid,item.pid)}
                                            />
                                            <Button type="warning" className="delBtn" onClick={this.delproduct.bind(this,item.pid)}>删除</Button>
                                        </div>
                                    </li>
                            })
                        }
                    </ul>   
                           
            </div>
        )
    }
}
var mapstate = (state) => state
export default connect(mapstate,actionCreator)(Cart)
