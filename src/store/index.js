import {createStore} from 'redux'
import reducer from './reducer'
var store = createStore(reducer);  //仓库是唯一的

export default store;