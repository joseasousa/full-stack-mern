const InitialState = {
  user: {},
  isFetching: false,
  error: false
}

const ip = (state = InitialState, action) => {
  switch (action.type) {
    case 'LOAD_LOGIN_REQUEST':
      return {isFetching: true, user: action.User, error: false}

    case 'LOAD_LOGIN_SUCCESS':
      return {isFetching: false, user: action.User, error: false}

    case 'LOAD_LOGIN_ERROR':
      return {isFetching: false, user: action.User, error: true}

    case 'LOAD_USER':
      return {isFetching: false, books: action.Books, error: false}

    default:
      return state
  }
}

export default ip
