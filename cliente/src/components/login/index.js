import React from 'react'
import {login} from './LoginApi'
import serializeForm from 'form-serialize'
import {Redirect} from 'react-router-dom'

class Login extends React.Component {
  state = {
    redirectTo: false,
    user: {}
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, {hash: true})
    const {user, password} = values

    login(user, password).then(res => {
      const v = res.data
      if (v.length > 0) {
        this.setState({redirectTo: true})
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    const {redirectTo} = this.state
    return (
      <div className=' col-md-12'>
        
        {redirectTo && (<Redirect to='/'/>)}

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

export default Login
