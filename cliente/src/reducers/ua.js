const InitialState = {
    data: [],
    isFetching: false,
    error: false
}

const ua = (state = InitialState, action) => {
    switch (action.type) {
        case 'LOAD_UA_REQUEST':
            return {isFetching: true, data: [], error: false}
        case 'LOAD_UA_SUCCESS':
            return {isFetching: false, data: action.data, error: false}
        case 'LOAD_UA_ERROR':
            return {isFetching: false, data: action.data, error: true}
        default:
            return state
    }
}

export default ua