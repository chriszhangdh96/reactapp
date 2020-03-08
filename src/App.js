import React from 'react';
import './App.css';

import './App.scss';
import {Route,Switch,Redirect,NavLink,withRouter}  from 'react-router-dom'
import {routes} from './router'  //引入第一级路由的数组
import Detail from './components/detail'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      visible:true
    }
  }
  componentDidMount(){
    this.changeTitle(this.props.location.pathname); //解决刷新问题的
    this.routeListen();  //组件一挂载就监听,  为了用setState
  }
  routeListen(){  //监听路由的变化
       this.props.history.listen((location)=>{
         this.changeTitle(location.pathname);
       })
  }
  //根据路由的变化改变标题栏的标题
  changeTitle(pathname){
      this.setState({
        visible:true
      })
      switch(pathname){
        case  '/':
        case '/home':document.title="首页";break;
        case '/cart':document.title="购物车";break;
        case '/user':document.title="用户";break;
        default:
                if(pathname.includes("/category/")){
                  document.title="分类"
                }
                else{
                  //显示404页面时候，隐藏导航
                  this.setState({
                    visible:false
                  })
                }

      }
  }
  render(){
    return (
    <div className="App">
        <Switch>
            {
              routes.map((item)=>{
                return <Route key={item.path} path={item.path} component={item.component} />
              })
            }
            <Redirect from="/" to="/home" exact />
            {/* <Redirect to="/404" /> */}
        </Switch>

        <ul className="footer" style={{"display":this.state.visible?'':"none"}}>
           <li><NavLink to="/home"><div><span class="iconfont icon-shouye"></span><span>首页</span></div></NavLink></li>
           <li><NavLink to="/category"><div><span class="iconfont icon-fenlei"></span><span>分类</span></div></NavLink></li>
           <li><NavLink to="/cart"><div><span class="iconfont icon-Bag"></span><span>购物车</span></div></NavLink></li>
           <li><NavLink to="/user"><div><span class="iconfont icon-gerenzhongxin"></span><span>个人中心</span></div></NavLink></li>
        </ul>
    </div>
  );
  }
  
}

export default withRouter(App);
