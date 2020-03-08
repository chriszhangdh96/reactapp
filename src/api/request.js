import axios from './index'


export const login = (username,password)=>{
    return axios.get('login.php',{params:{username,password}})
}

export const reg = (username,password)=>{
    return axios.get('reg.php',{params:{username,password}})
}

export const detail = (id)=>{
    return axios.get('detail.php',{params:{id}})
}

export const addproduct = (uid,pid,pnum)=>{
    return axios.get('add-product.php',{params:{uid,pid,pnum}})
}

export const getcartlist = (id) =>{
    return axios.get('cart-list.php',{params:{id}})
}

export const updatecartlist = (uid,pid,pnum)=>{
    return axios.get('cart-update-num.php',{params:{uid,pid,pnum}})
}

export const deleteproduct = (uid,pid) =>{
    return axios.get('cart-delete.php',{params:{uid,pid}})
}