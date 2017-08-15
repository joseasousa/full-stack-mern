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
    .then(avaliacoes => this.setState({avaliacoes}))
    .catch(err => this.setState({message: err}))
  }
  render () {
    return (
      <div>
        {
          JSON.stringify(this.state.avaliacoes)
        }
      </div>
    )
  }
}

export default Avaliacao
