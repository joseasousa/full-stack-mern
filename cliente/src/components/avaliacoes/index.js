import React from 'react'
import { getAvaliacoesApi } from '../../api'

class Avaliacao extends React.Component {
  constructor (params) {
    super(params)
    this.state = {
      avaliacoes: [],
      message: ''
    }
  }
  componentDidMount () {
    getAvaliacoesApi()
    .then(avaliacoes => this.setState({avaliacoes: avaliacoes.data}))
    .catch(err => this.setState({message: err}))
  }
  render () {
    return (
      <div>
        <table className='table table-striped' >
          <thead>
            <tr>
              <th>Livro</th>
              <th>Nota</th>
              <th>Usuario</th>
            </tr>
          </thead>
          <tbody>
            {
         this.state.avaliacoes.map(ava => (
           <tr key={ava._id}>
             <td>{ava.book.title}</td>
             <td>{ava.estado}</td>
             <td>{ava.user}</td>
           </tr>
         ))
        }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Avaliacao
