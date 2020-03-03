export function globalReducer(state, action){
    switch (action.type) {
        case 'ADD_ITEM':
            const items = state.items;
            items.push(action.item);
            return {
                ...state,
                items,
            }
            break;
        
        case 'ADD_COLOR': 
            const colors = state.colors;
            colors.push(action.color);
            return {
                ...state,
                colors,
            }
        break;

    
        default:
            break;
    }
}