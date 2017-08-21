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
    .catch(error => console.log(error))
  }

  render () {
    return (
      <div>
        {
          this.state.avaliacoes.length > 0 &&
          (
            <table className='table table-striped' >
              <thead>
                <tr>
                  <th>estado</th>
                  <th>nota</th>
                  <th>titulo</th>
                  <th>pagina</th>
                </tr>
              </thead>

              <tbody>
                {
                  this.state.avaliacoes.map(ava => (
                    <tr key={ava._id}>
                      <td>{ava.estado}</td>
                      <td>{ava.nota}</td>
                      <td>{ava.book.title}</td>
                      <td>{ava.book.pageCount}</td>
                    </tr>
                   )
                )}
              </tbody>
            </table>
          )
        }
      </div>
    )
  }
}

export default Avaliacao
