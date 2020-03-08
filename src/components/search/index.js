import React, { Component } from 'react'
import { SearchBar} from 'antd-mobile';
import './search.scss'
import {withRouter} from 'react-router-dom'

class Search extends Component {
      constructor(props){
        super(props)
      }
      onChange= (value) => {
        this.setState({ value });
      };
      clear = () => {
        this.setState({ value: '' });
      };
      handleClick = () => {
        this.manualFocusInst.focus();
      }
      tologin=()=>{
        this.props.history.push('/user')
      }
    render() {
        return (
            <div className="search">
                <div><img src="http://www.hqs.cc/m/images/pindao.png"/></div>
                <SearchBar className='sousuo' placeholder="请输入您想要查找的内容" maxLength={8} />
                <div onClick={this.tologin}><img src="http://www.hqs.cc/m/images/own-main.png"/></div>
            </div>
        )
    }
}


export default withRouter(Search)