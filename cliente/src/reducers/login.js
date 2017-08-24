const InitialState = {
  login: {},
  isFetching: false,
  error: false
}

const ip = (state = InitialState, action) => {
  switch (action.type) {
    case 'LOAD_LOGIN_REQUEST':
      return {isFetching: true, login: action.User, error: false}

    case 'LOAD_LOGIN_SUCCESS':
      return {isFetching: false, login: action.User, error: false}

    case 'LOAD_LOGIN_ERROR':
      return {isFetching: false, login: action.User, error: true}

    default:
      return state
  }
}

export default ip
