import React, { useContext } from "react";
import { ThemeContext } from '../contexts/ThemeContext'
import { BookContext } from '../contexts/BookContext'
import BookDetails from './BookDetails'
import BookForm from './BookForm'

const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const { books } = useContext(BookContext)
    const theme = isLightTheme ? light : dark
    
    return <React.Fragment>
	    {
	    	books.length ? 
		    (
			    <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
			        <ul>
			        	{
			        		books.map(book => (
			        			//<li style={ { background: theme.ui } }  key={ book.id }>{ book.title }</li>
			        			<BookDetails style={ { background: theme.ui } } book={book} key={ book.id } />
			        		))
			        	}
			        </ul>
			        
			    </div>
		    ) : (
		    	<div className="empty" style={{ background: theme.bg, color: theme.syntax }} >No books to read</div>
		    )
	    }
	    <BookForm/>
    </React.Fragment>

}


export default BookList;