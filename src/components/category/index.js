import React, { Component } from 'react'
import {Route,Redirect,Switch,NavLink} from 'react-router-dom'
import {subRoutes} from '../../router'

import { NavBar, Icon } from 'antd-mobile';
import "./category.scss"
export default class Category extends Component {
    constructor(props){
        super(props)
        this.state={
            title:"分类"
        }
    }
    render() {
        // console.log(subRoutes)
        return (
            <div className="category">
                    <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.goBack()}
                    rightContent={[
                        // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        // <Icon key="1" type="ellipsis" />,
                    ]}
                    >{this.state.title}</NavBar>
                <div className="categorymain">
                    <aside>
                        <ul>
                            <li><NavLink to="/category/shenghuo" activeClassName="asideactive">生活电器</NavLink></li>
                            <li><NavLink to="/category/chufang" activeClassName="asideactive">厨房电器</NavLink></li>
                            <li><NavLink to="/category/tiaoliao" activeClassName="asideactive">调料干货</NavLink></li>
                            <li><NavLink to="/category/zibo" activeClassName="asideactive">滋补食品</NavLink></li>
                            <li><NavLink to="/category/jiushui" activeClassName="asideactive">酒水</NavLink></li>
                            <li><NavLink to="/category/yinpin" activeClassName="asideactive">冲调饮品</NavLink></li>

                        </ul>
                    </aside>
                    <main>
                        <Switch>
                            {
                                subRoutes.map((item)=>{
                                    return <Route key={item.path} path={item.path} component={item.component} />
                                })
                            }
                            <Redirect from="/category" to="/category/shenghuo"  exact />
                        </Switch>
                    </main>
                </div>
            </div>
        )
    }
}
