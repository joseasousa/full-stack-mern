const InitialState = {
  data: [],
  isFetching: false,
  error: false
}

const ip = (state = InitialState, action) => {
  switch (action.type) {
    case 'LOAD_USER_LOGIN':
      return {
        isFetching: true,
        data: action.User,
        error: false
      }

    case 'LOAD_USER_SUCCESS':
      return {
        isFetching: false,
        data: action.User,
        error: false
      }

    case 'LOAD_USER_ERROR':
      return {
        isFetching: false,
        data: action.User,
        error: true
      }
    default:
      return state
  }
}

export default ip
