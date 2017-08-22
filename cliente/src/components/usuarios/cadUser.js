import React from 'react'
import serializeForm from 'form-serialize'
import { addUserApi } from '../../api'

export default class CadLivros extends React.Component {
    handleSubmit = e => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })  
        addUserApi(values)
        .then(message => console.log(message))
        .catch(err => console.log(err))  
      }
  render () {
    return (
        <div>
            <form  
                onSubmit={this.handleSubmit}
                className='form' >
                <input name='nome' className='form-control' type='string' placeholder='Digite seu nome' />
                <input name='email' className='form-control' type='email' placeholder='Digite seu email' />
                <input name='phone' className='form-control' type='phone' placeholder='Digite seu telefone' />
                <input name='user' className='form-control' type='string' placeholder='Digite seu Usuario' />
                <input name='password' className='form-control' type='password' placeholder='Digite senha' />
                <button className='btn btn-success' >Cadastrar</button>
            </form>
        </div>
      )
  }
}
