import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookDetails = ({ style, book }) => {
	const { dispatch } = useContext(BookContext);

	return (
		<li style= {style} onClick={ () => dispatch({ type:'REMOVE_BOOK', id: book.id }) } >
			<div className="title">{ book.title }</div>
			<div className="author">{ book.author }</div>
		</li>
	)
}


export default BookDetails;