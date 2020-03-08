import React, { Component } from 'react'
import Search from '../search'

import "./category.scss"
export default class Category extends Component {
    constructor(props){
        super(props)
        this.state={
            activeKey:0,
            title:'分类',
            leftList:[],
            rightList:[],
            zong:[],
            index:0,
            xuanzhong:0
        }
    }
    TabClick=(i)=>{
        //console.log(i)
        this.setState({
            index:i,
            rightList:this.state.zong[this.state.index].children
        })
    }
    aaa=(i)=>{
        // this.index=i
        this.setState({
            xuanzhong:i
        })
    }
    toprolist=(id)=>{
        this.props.history.push('/detail'+id)
    }
    componentDidMount(){
        fetch('https://api.zbztb.cn/api/public/v1/categories').then(res=>res.json()).then(res=>{
            console.log(res)
            this.setState({
                zong:res.data.message,
                leftList:this.state.zong.map(v=>v.cat_name),
                rightList:this.state.zong[this.state.index].children
            })
        })
    }
    render() {
        // console.log(subRoutes)
        let {xuanzhong,zong,rightList} = this.state
        console.log(this.state.leftList)
        console.log(this.state.rightList)
        return (
            <div className="category">
                <Search />
                <div class="box">
                <div  class="left">
                    {
                        zong.map((item,index)=>{
                            return <div key={item.id} className="left_centent"  onClick={this.TabClick.bind(this,index)}>
                                        <div className={index==xuanzhong?"active":""} onClick={this.aaa.bind(this,index)}>{item.cat_name}</div>
                                    </div>
                            
                        })
                    }
                   
                    {/* <div v-for="(item,index) in zong" :key="item.id" class="left_centent" @click="TabClick(index)">
                    <div :class="{active:index==xuanzhong}" @click="aaa(index)">{{item.cat_name}}</div> */}
                </div>
                </div>
                <div class="right">
                    {
                        rightList.map((v)=>{
                            return <div key={v.id} className="right_title">
                                        <h3>{v.cat_name}</h3>
                                        {
                                            v.children.map(i=>{
                                                return <div key={i.id} className="right_conter" onClick={this.toprolist.bind(this,i.cat_id)}>
                                                            <img src={`${i.cat_icon}`} />
                                                             <p>{i.cat_name}</p>
                                                        </div>
                                            })
                                        }
                                    </div>   
                        })
                    }
                    {/* <div class="right_title" v-for="v in rightList" :key="v.id">
                        <h3>{{v.cat_name}}</h3>
                        <div class="right_conter" v-for="i in v.children" :key="i.id" @click="toprolist(i.cat_id)">
                            <img :src="i.cat_icon" />
                            <p>{{i.cat_name}}</p>
                        </div>
                    </div> */}
                </div>
            </div>
              
        )
    }
}

