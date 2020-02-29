export default (state = true, action)=>{
    switch(action.type){
        case 'SHOW_MONTHS':
            return action.payload;

        default:
            return state;
    }
}