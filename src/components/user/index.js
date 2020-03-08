import React, { Component } from 'react'
import './user.scss'
import { NavBar, Icon, Button } from 'antd-mobile';

export default class User extends Component {
    constructor(props){
        super(props)
        this.state={
            title:"我的",
            islogin:''
        }
    }
    componentDidMount(){
        if(localStorage.getItem('username')){
            this.setState({
                islogin:true
            })
        }else{
            this.setState({
                islogin:false
            })
        }
    }
    login=()=>{
        this.props.history.push('./login')
    }
    reg=()=>{
        this.props.history.push('./reg')
    }
    logout=()=>{
        localStorage.removeItem('username')
        localStorage.removeItem('token')
        this.setState({
            islogin:false
        })
    }
    render() {
        let {islogin} = this.state
        return (
            <div className="user">
                 <NavBar
                    style={{background:'red'}}
                    mode="light"
                    icon={<img style={{width:'20px'}} src="http://www.hqs.cc/m/images/set.png"/>}
                    onLeftClick={() => this.props.history.goBack()}
                    rightContent={[
                        // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        // <Icon key="1" type="ellipsis" />,
                    ]}
                    >
                        {this.state.title}
                    </NavBar>
                    <br />
                    {islogin?<h3>你好{localStorage.getItem('username')}</h3>:""}
                    <br />
                    {islogin?"":<Button type="primary" onClick={this.login}>登录</Button>}
                    <br />
                    {islogin?"":<Button type="primary" onClick={this.reg}>注册</Button>}
                    {islogin?<Button type="primary" onClick={this.logout}>退出</Button>:""}
            </div>
        )
    }
}
