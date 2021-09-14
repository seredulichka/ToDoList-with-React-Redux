const ADD_DEAL = 'ADD-DEAL',
      UPDATE_NEW_DEAL_TEXT = 'UPDATE-NEW-DEAL-TEXT',
      DELETE_DEAL = 'DELETE-DEAL',
      IMPORTANT_DEAL = 'IMPORTANT-DEAL',
      DONE_DEAL = 'DONE-DEAL';


let initialState  = {
    deals: [
        {id: 1, label: 'Going to learn React', important: false, done: false},
        {id: 2, label: 'To make task with Redux', important: false, done: false},
        {id: 3, label: 'To have a break...', important: false, done: false}
    ], 
    newMessageText:''
}

const dealsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_DEAL: let body = state.newMessageText;
            state.newMessageText = '';
            state.deals.push({id: 4, label: body, important: false, done: false});
            console.log(state);
            return state;
        case UPDATE_NEW_DEAL_TEXT:
            state.newMessageText = action.newText;
            return state;
        case DELETE_DEAL:
            let index = state.deals.findIndex(element => element.label === action.label)
            state.deals.splice(index,1);
            return state;
        case IMPORTANT_DEAL:
            let indexImportant = state.deals.findIndex(element => element.label === action.label);
            if(state.deals[indexImportant].important){
                state.deals[indexImportant].important = false;
            } else {
                state.deals[indexImportant].important = true;
            } 
            return state;
        case DONE_DEAL:
            let indexDone = state.deals.findIndex(element => element.label === action.label);
            if(state.deals[indexDone].done){
                state.deals[indexDone].done = false;
            } else {
                state.deals[indexDone].done = true;
            } 
            console.log(state)
            return state;
        default:
            return state 
    }
}

export default dealsReducer;