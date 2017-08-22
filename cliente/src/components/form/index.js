import React from 'react'
import serializeForm from 'form-serialize'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { bookRequest } from '../../actions'
import { addAvaliacaoApi} from '../../api/index'
import './form.css'

class Form extends React.Component {
  constructor(props) {
    super(props)       
    this.state = {
      estado: ['Ótimo','Bom','Ruim', 'Regular'],
      user: JSON.parse (localStorage.getItem('user'))
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    values.book = this.props.books[values.book]
    values.user = this.state.user[0].user
    console.log(JSON.stringify(values))
    addAvaliacaoApi(values)
      .then(message => console.log(message))
      .catch(err => console.log(err))
  }
  
  componentDidMount = () => {
    this.props.book()
  }  
  
  render () {    
    if(this.state.user==null || this.state.user.length === 0){
        return <Redirect to='/login' />
    }
    return (
      <div>        
          <form 
            onSubmit={this.handleSubmit} 
            className='form-login' >

            <div>               
              {
                 !this.props.isFetching && (
                  <select name='book' className='custom-select' >
                  {
                    this.props.books.map((book,index) => (
                      <option key={book._id} value={index} >{book.title}</option>
                    ))
                  }
                 </select>)
              }              
            </div>

            <div>
            <select name='estado' className='custom-select' >
                {this.state.estado.map((estado, index)=> (
                  <option key={index}>{ estado }</option>
                ))}
              </select>
            </div>
            
            <div className='input-group' >
              <input type='number' name='nota' min='1' max='5' className='form-control' />
            </div>

            <div className='input-group' >
              <textarea name='observacao' className='form-control' />
            </div>

            <button  className='btn btn-success'>Enviar</button>
          </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    books: state.book.books,
    login: state.login.login,
    isFetching: state.book.isFetching,
    error: state.book.error
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    book: () => {
      dispatch(bookRequest())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
