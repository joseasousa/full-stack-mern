import React from 'react'
import { connect } from 'react-redux'
import serializeForm from 'form-serialize'
import {Redirect} from 'react-router-dom'
import { loginRequest } from '../../actions'

class Login extends React.Component {  
  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, {hash: true})
    const {user, password} = values
    values.user = ''
    values.password = ''
    this.props.login({user,password})
  }

  render() {    
    return (
      <div className=' col-md-12'>
        
        {this.props.data.length > 0 && (<Redirect to={this.props.redirectTo}/>)}

        <form className='login-form' onSubmit={this.handleSubmit}>
          <div className='row'>
            <div className='input-field col s12 center'>
              <p className='center login-form-text'>Biblioteca</p>
            </div>
          </div>

          <div className='row margin'>
            <div className='input-group col-sm-12'>
              <i className='mdi-action-perm-identity prefix'></i>
              <input name='user' type='text' className='form-control' placeholder='Username'/>
            </div>
          </div>

          <div className='row margin'>
            <div className='input-group col-sm-12'>
              <i className='mdi-action-lock-outline prefix'></i>
              <input
                name='password'
                type='password'
                className='form-control'
                placeholder='Password'/>
            </div>
          </div>

          <div className='row'>
            <div className='input-field col s12'>
              <button className='btn btn-success col-md-12'>Login</button>
            </div>
          </div>

          <div className='row'>
            <div className='input-field col s6 m6 l6'>
              <p className='margin medium-small'>
                <a href='page-register.html'>Register Now!</a>
              </p>
            </div>
          </div>

        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.user.data,
    isFetching: state.user.isFetching,
    error: state.user.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => {
      dispatch(loginRequest(user))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
