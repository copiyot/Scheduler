export default(state = 2020, action)=>{
    switch(action.type){
        case 'FIRST_YEAR':
            return action.payload;
        default:
            return state;
    }
}