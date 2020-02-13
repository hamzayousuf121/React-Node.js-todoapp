const iState = {
    text:'hamza',
    mywishes:[{name:'hamza', father: 'yousuf'}]
}

const reducer = (state=iState, action)=>{
    // if(action.type === 'UPDATE_INPUT'){
    //     return {
    //         ...state,
    //         text : action.payload
    //     }
    //}
    return state;
}
export default reducer;