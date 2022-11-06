const initialState = {
    termsConditionStatus: true,
    data: [],
    totalItemCount: 0
}

export default function rootReducer(state = initialState, action) {
   console.log(state.totalItemCount)
    switch (action.type) {
        case 'TERMSCONDITION':
            return { termsConditionStatus: !state.termsConditionStatus }
        case "TOTAL_ITEM_COUNT":
            return {...state,totalItemCount:action.count}
        case "TOTAL_ITEM":
            return {...state,...action }
        default:
            return state
    }
}