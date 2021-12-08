import produce from "immer"

function reserve(state = [], action){


    switch(action.type){
        case 'ADD_RESERVE':
            return produce(state, draft =>{
                const tripIndex = draft.findIndex(trip => trip.id === action.item.id)
                // se não tivr return -1 se tiver return o index

                if(tripIndex >=0){
                    draft[tripIndex].amount +=1
                }else{
                    draft.push({
                        ...action.item,
                        amount: 1,
                    });
                }
            });

        case 'REMOVE_RESERVE':
            return produce(state, draft =>{
                const tripIndex = draft.findIndex(trip => trip.id === action.id)

                if(tripIndex >= 0){
                    draft.splice(tripIndex, 1)
                }
            })


            case 'UPDATE_RESERVE':{
                if(action.amount <= 0){
                    return state
                }

                return produce(state, draft =>{
                    const tripIndex = draft.findIndex(trip => trip.id === action.id)

                    if(tripIndex >= 0){
                        draft[tripIndex].amount = Number(action.amount)
                    }

                })
            }

        default:
            return state
    }
}

export default reserve