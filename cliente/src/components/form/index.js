import React from 'react'
import serializeForm from 'form-serialize'
import './form.css'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      book: '',
      estado: ['Ótimo','Bom','Ruim', 'Regular'],
      books: [{title:'book',_id: 23},{title:'book2',_id: 2}]    
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    console.log(values)
  }
    
  
  render () {
    return (
      <div>
          <form onSubmit={this.handleSubmit} className='form-login' >
            <div>
               <select name='book' className='custom-select' >                
                {this.state.books.map((book)=> (
                  <option key={book._id}>{book.title}</option>
                ))}
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
              <input type='number' name='nota' className='form-control' />
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

export default Form
