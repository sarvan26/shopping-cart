const initialState = {
    termsConditionStatus: true,
    data: [],
    totalItemCount: 0,
    cart:[]
}

export default function rootReducer(state = initialState, action) {
   console.log(state,"=============state===============",action)
    switch (action.type) {
        case "ADD_CART":
            return {...state,cart: action.cart}
        case 'TERMSCONDITION':
            return { ...state,termsConditionStatus: !state.termsConditionStatus }
        case "TOTAL_ITEM_COUNT":
            return {...state,totalItemCount:action.count}
        case "TOTAL_ITEM":
            return {...state,...action }
        
        default:
            return state
    }
}