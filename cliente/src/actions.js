export const loginRequest = User => {
  return {
    type: 'LOAD_USER_LOGIN',
    User
  }
}

export const loadUserError = () => {
  return {
    type: 'LOAD_USER_ERROR'
  }
}

export const loadUserSuccess = User => {
  return {
    type: 'LOAD_USER_SUCCESS',
    User
  }
}
