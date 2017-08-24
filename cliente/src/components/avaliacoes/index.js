import React from 'react'
import { getAvaliacoesApi } from '../../api'
import Griddle, { plugins, RowDefinition, ColumnDefinition} from 'griddle-react'

const Layout = ({ Table, Pagination, Filter, SettingsWrapper }) => (
  <div>
    <Filter />    
    <Table />
    <Pagination />
  </div>
)
const styleConfig = {  
  classNames: {
    Table: 'table table-striped',
    NextButton: 'griddle-next-button',    
  },
  styles: {
    Filter: { fontSize: 18 }
  }
}
class Avaliacao extends React.Component {
  constructor (params) {
    super(params)
    this.state = {
      avaliacoes: [],
      pageOfItems: [],
      message: ''
    }
    this.onChangePage = this.onChangePage.bind(this)
  }

  onChangePage (pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems })
  }
  componentDidMount () {
    getAvaliacoesApi()
    .then(avaliacoes => this.setState({avaliacoes: avaliacoes.data}))
    .catch(error => console.log(error))
  }

  sortProperties = [
    { id: 'estado', sortAscending: true }
  ]

  render () {
    return (
      <div >
        <Griddle data={this.state.avaliacoes}
          plugins={[plugins.LocalPlugin]}
          className='table-striped'
          styleConfig={styleConfig}
          sortProperties={this.sortProperties}
          pageProperties={{
            currentPage: 1,
            pageSize: 2,
            recordCount: this.state.avaliacoes.length
          }}
          components={{Layout}}
       >
          <RowDefinition>
            <ColumnDefinition id='estado' title='Estado' />
            <ColumnDefinition id='user' title='Usuario' />
            <ColumnDefinition id='book.title' title='Livro' />
          </RowDefinition>
        </Griddle>
      </div>
    )
  }
}

export default Avaliacao
