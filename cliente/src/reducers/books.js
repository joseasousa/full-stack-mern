const InitialState = {
  books: [],
  isFetching: false,
  error: false
}

const book = (state = InitialState, action) => {
  switch (action.type) {
    case 'LOAD_BOOK_REQUEST':
      return {isFetching: true, books: action.Books, error: false}

    case 'LOAD_BOOK_SUCCESS':
      return {isFetching: false, books: action.Books, error: false}

    case 'LOAD_BOOK_ERROR':
      return {isFetching: false, books: action.Books, error: true}

    default:
      return state
  }
}

export default book
