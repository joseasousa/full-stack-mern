export const loginRequest = User => {
  return {
    type: 'LOAD_LOGIN_REQUEST',
    User
  }
}

export const loadUserError = () => {
  return {
    type: 'LOAD_LOGIN_ERROR'
  }
}

export const loadUserSuccess = User => {
  return {
    type: 'LOAD_LOGIN_SUCCESS',
    User
  }
}

export const loadUser = () => {
  return {
    type: 'LOAD_USER'
  }
}
