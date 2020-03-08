import React, { Component } from 'react'
import {reg} from '../../api/request'
import { NavBar, Icon, List, InputItem ,Toast} from 'antd-mobile';

export default class Reg extends Component {
    constructor(props){
        super(props)
    }
    showToast() {
        Toast.info('用户名已存在', 1.5);
    }
    handleClick = () => {
        console.log(this.username,this.password)
        var username = this.username.state.value;
        var password = this.password.state.value;
        reg(username,password).then(res=>{
            console.log(res)
            if(res.code===1){
                this.props.history.push('/login')
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
                        <Icon key="1" type="ellipsis" />,
                    ]}
                    >
                    register
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
                       注册
                        </div>
                    </List.Item>
                    </List>
            </div>
        )
    }
}
