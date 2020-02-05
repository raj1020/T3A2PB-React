const defaultState= {
    products: sessionStorage.getItem('products') || null
}

export default (state = defaultState, action) =>{
    switch(action.type) {
        case "PRODUCTS":
            return {...state, all: action.payload};
        default:
            return state;
    };
};