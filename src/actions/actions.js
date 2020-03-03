export function addItem(item) {
    return {
        type: 'ADD_ITEM',
        item,
    }
}

export function addColor(color){
    return {
        type : 'ADD_COLOR',
        color,
    }
}

