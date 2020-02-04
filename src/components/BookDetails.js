import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookDetails = ({ style, book }) => {
	const {removeBook} = useContext(BookContext);

	return (
		<li style= {style} onClick={ () => removeBook(book.id) } >
			<div className="title">{ book.title }</div>
			<div className="author">{ book.author }</div>
		</li>
	)
}


export default BookDetails;