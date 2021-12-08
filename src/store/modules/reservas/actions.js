export function addReserve (item){
    return{
    
        type: 'ADD_RESERVE',
        item
         
    }
}

export function removeReserve (id){
    return{
        type: 'REMOVE_RESERVE',
        id,
    }
}

export function updateAmount(id, amount){
    return{
        type: 'UPDATE_RESERVE',
        id,
        amount,
    }
}