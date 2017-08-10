const InitialState = {
  data: [],
  isFetching: false,
  error: false
}

const book = (state = InitialState, action) => {
  switch (action.type) {
    case 'LOAD_BOOK_REQUEST':
      return {
        isFetching: true,
        data: action.Book,
        error: false
      }

    case 'LOAD_USER_SUCCESS':
      return {
        isFetching: false,
        data: action.Book,
        error: false
      }

    case 'LOAD_USER_ERROR':
      return {
        isFetching: false,
        data: action.Book,
        error: true
      }
    default:
      return state
  }
}

export default book
