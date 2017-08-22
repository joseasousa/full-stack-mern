import React, { Component } from 'react'
import { getUsersApi } from '../../api'

export default class Usuario extends Component {
  constructor(props){
    super(props)
    this.state={
      users: []
    }
  }
  componentDidMount = () => {
    getUsersApi()
    .then(users => this.setState({users:users.data}))
    .catch(err => console.log(err))
  }

  

  render () {
    return (
      <div>
          {this.state.users.length > 0 && (
            <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Usuario</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this
                                .state
                                .users
                                .map(user => (
                                    <tr key={user._id}>
                                        <td>{user.nome}</td>
                                        <td>{user.email}</td>
                                        <td>{user.user}</td>
                                    </tr>
                                ))
}
                        </tbody>
                    </table>
          )}
      </div>
    )
  }
}
