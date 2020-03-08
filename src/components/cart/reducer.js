const initialState = {
    list:[]
}

export default (state = initialState, action) => {
    switch (action.type) {

    case "GETCARTS":
        var newState = JSON.parse(JSON.stringify(state))
        newState.list = action.list
        return newState
    // case "CHANGENUM":
    //     var newState = JSON.parse(JSON.stringify(state))
    //     return newState
    default:
        return state
    }
}
