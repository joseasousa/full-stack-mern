export const bookRequest = () => {
  return {type: 'LOAD_BOOK_REQUEST'}
}

export const loadBookError = () => {
  return {type: 'LOAD_BOOK_ERROR'}
}

export const loadBookSuccess = Books => {
  return {type: 'LOAD_BOOK_SUCCESS', Books}
}
