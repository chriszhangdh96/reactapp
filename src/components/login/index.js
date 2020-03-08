import React, { Component } from 'react'
import {login} from '../../api/request'

import { NavBar, Icon, List, InputItem ,Toast} from 'antd-mobile';

export default class Login extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){

    }
    showToast() {
        Toast.info('用户名或密码错误', 1.5);
    }
    handleClick = () => {
        console.log(this.username,this.password)
        var username = this.username.state.value;
        var password = this.password.state.value;
        login(username,password).then(res=>{
            console.log(res)
            if(res.code===1){
                localStorage.setItem('token',res.data.token)
                localStorage.setItem('id',res.data.id)
                localStorage.setItem('username',res.data.username)
                this.props.history.push('/home')
            }else{
                this.showToast()
            }
           
        })
      }
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.goBack()}
                    rightContent={[
                        // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        // <Icon key="1" type="ellipsis" />,
                        <span>忘记密码？</span>
                    ]}
                    >
                      login  
                </NavBar>

                <img style={{margin:"30px 0"}} src={'http://www.hqs.cc/m/images/mainNewsLogo.png'} />
                 <List>
                    <InputItem
                        clear
                        placeholder="username"
                        ref={el => this.username = el}
                    >用户名</InputItem>
                    <InputItem
                        clear
                        placeholder="password"
                        ref={el => this.password = el}
                    >密码</InputItem>
                    <List.Item>
                        <div
                        style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
                        onClick={this.handleClick}
                        >
                       登录
                        </div>
                    </List.Item>
                    </List>
            </div>
        )
    }
}
