var initState ={  //状态的初始值
    navlist:[
        {
            id:1,
            name:'价格专区',
            img:'assets/img/kaquan.png'
        },
        {
            id:2,
            name:'新品上架',
            img:'assets/img/kaquan.png'
        },
        {
            id:3,
            name:'热卖',
            img:'assets/img/remai.png'
        },
        {
            id:4,
            name:'超市',
            img:'assets/img/chaoshi.png'
        },
        {
            id:5,
            name:'自营专区',
            img:'assets/img/ziying.png'
        },
        {
            id:6,
            name:'我要提货',
            img:'assets/img/tihuo.png'
        },
        {
            id:7,
            name:'现货直发',
            img:'assets/img/xianhuo.png'
        },
        {
            id:8,
            name:'卡劵充值',
            img:'assets/img/chongzhi.png'
        },
        {
            id:9,
            name:'特别推荐',
            img:'assets/img/tuijian.png'
        },
        {
            id:10,
            name:'关于我们',
            img:'assets/img/women.png'
        }
    ]
}
var reducer=(state=initState,action)=>{  //state 数据  action动作
   switch(action.type){
    case 'Add': 
    var newState=JSON.parse(JSON.stringify(state));
    newState.n = newState.n + 1;
    return newState;
    default:
        return state
    }
}

export default reducer;