import React from 'react'
import serializeForm from 'form-serialize'
import { addBookApi, getBookISBNApi } from '../../api'

export default class CadLivros extends React.Component {
    constructor(props){
        super(props)

        this.state={
            book: {},
            isbn: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({[name]: value})       
    }

    handleSubmit = e => {
        e.preventDefault()
        const values = serializeForm(e.target, { hash: true })  
        addBookApi(values)
        .then(message => console.log(message))
        .catch(err => console.log(err))  
      }
    
    buscaLivro = () => {
        const { isbn } = this.state        
        getBookISBNApi(isbn)
        .then(res => {            
            const book = res.data.items.map(book => ({
                title: book.volumeInfo.title,
                description: book.volumeInfo.description,
                authors: book.volumeInfo.authors,
                pageCount: book.volumeInfo.pageCount,
                isbn: book.volumeInfo.industryIdentifiers[0].identifier,
                language: book.volumeInfo.language,
                imageLinks: book.volumeInfo.imageLinks.thumbnail
              }))
              this.setState({book:book[0]})             
        }).catch(err => console.log(err))
    }
  render () {
    return (

        <div>  
            
            <form  
                onSubmit={this.handleSubmit}
                className='form' >

                <div className='form-group'>
                <div className='form-inline'> 
                               
                    <div className='form-group'>
                    <input name='isbn'                         
                        type='string' 
                        className='form-control'
                        value={this.state.isbn}
                        onChange={this.handleChange}
                        placeholder='Digite o ISBN do livro' />
                    </div>
                    <a className="btn btn-primary" onClick={() => this.buscaLivro() }>Buscar Livro</a>
                
                </div>
                </div>

                <div className='form-group'>
                <input 
                    name='title' 
                    className='form-control' 
                    type='string' 
                    value={this.state.book.title}
                    placeholder='Digite o titulo do livro' />
                </div>
                <div className='form-group'>
                <input 
                    name='description' 
                    className='form-control' 
                    value={this.state.book.description}
                    type='text' 
                    placeholder='Digite a descricao' />
                </div>

                <div className='form-group'>
                <input 
                    name='pageCount' 
                    value={this.state.book.pageCount}
                    className='form-control' 
                    type='text' 
                    placeholder='Digite seu Usuario' />
                </div>

                <div className='form-group'>
                <input 
                    name='language' 
                    value={this.state.book.language}
                    className='form-control' 
                    type='text' 
                    placeholder='Digite senha' />
                </div>

                <div className='form-group'>
                <input 
                    name='imageLinks' 
                    value={this.state.book.imageLinks}
                    className='form-control' 
                    type='text' 
                    placeholder='Digite senha' />
                </div>
                <img src={this.state.book.imageLinks} />

                <div className='form-group'>
                    <button 
                        className='btn btn-success' >Cadastrar</button>
                </div>
            </form>            
        </div>
      )
  }
}
