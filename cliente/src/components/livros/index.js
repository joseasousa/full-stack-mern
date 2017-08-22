import React from 'react'
import {connect} from 'react-redux'
import {bookRequest} from '../../actions'

class Livros extends React.Component {
    
    componentDidMount = () => {
        this
            .props
            .book()
    }

    render() {
        return (
            <div>
                {!this.props.isFetching && (
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Livro</th>
                                <th>Nota</th>
                                <th>Usuario</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this
                                .props
                                .books
                                .map(book => (
                                    <tr key={book._id}>
                                        <td>{book.title}</td>
                                        <td>{book.description}</td>
                                        <td>{book.pageCount}</td>
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

const mapStateToProps = (state, ownProps) => {
    return {books: state.book.books, isFetching: state.book.isFetching, error: state.book.error}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        book: () => {
            dispatch(bookRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Livros)
