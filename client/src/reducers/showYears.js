export default(state=false, action)=>{
    switch(action.type){
        case 'SHOW_YEARS':
            return action.payload;

        default:
            return state;
    }
}