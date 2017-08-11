import React from 'react'
import serializeForm from 'form-serialize'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { bookRequest, loadUser } from '../../actions'
import './form.css'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.props.user() 
    this.state = {
      value: 1,
      book: '',
      estado: ['Ótimo','Bom','Ruim', 'Regular']
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    console.log(values)
  }
  
  componentDidMount = () => {        
     this.props.book()
  }
  
  
  render () {
    return (
      <div>
        {
          this.props.login.length === 0  && (
          <Redirect to='/login' />
        )}
          <form onSubmit={this.handleSubmit} className='form-login' >
            <div>
               <select name='book' className='custom-select' >
               {
                 !this.props.isFetching && (
                 this.props.books.map(book => (
                  <option key={book._id}>{book.title}</option>
                 )))
               }
              </select>
            </div>

            <div>
            <select name='estado' className='custom-select' >
                {this.state.estado.map((estado, index)=> (
                  <option key={index}>{estado}</option>
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
    },
    user: () => {
      dispatch(loadUser)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
