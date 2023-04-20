const initialState={
    data:""
}

const AlertReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ON_SET_ALERT": 
            return {
                ...state,
                data:action.payload
                
            }
        
        default: 
            return state ; 
    }       
} 