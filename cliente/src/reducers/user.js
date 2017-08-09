const InitialState = {
  data: [],
  isFetching: false,
  error: false
}

const ip = (state = InitialState, action) => {
  switch (action.type) {
    case 'LOAD_USER_REQUEST':
      return {
        isFetching: true,
        data: [],
        error: false
      }
    case 'LOAD_USER_SUCCESS':
      return {
        isFetching: false,
        data: action.USER,
        error: false
      }

    case 'LOAD_USER_ERROR':
      return {
        isFetching: false,
        data: action.USER,
        error: true
      }
    default:
      return state
  }
}

export default ip
