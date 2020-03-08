import navReducer from '../components/nav/reducer'
import cartReducer from '../components/cart/reducer'
import {combineReducers} from 'redux'

var reducer = combineReducers({
    nav:navReducer,
    cart:cartReducer
})

export default reducer;