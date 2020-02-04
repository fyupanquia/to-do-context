import React, { useContext, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { BookContext } from '../contexts/BookContext'


const NewBoookForm = () => {
	const { isLightTheme, light, dark } = useContext(ThemeContext)
	const {addBook} = useContext(BookContext);
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const theme = isLightTheme ? light : dark

	const onFieldChange = (e) => {
		switch(e.target.name) {
			case 'title':
				setTitle(e.target.value)
			break;
			case 'author':
				setAuthor(e.target.value)
			break;
			default:
			break;
		}
	}

	const  handleDefault = (e) => {
		e.preventDefault();
		addBook({title,author});
		setTitle("")
		setAuthor("")
	}
	return <form onSubmit={ handleDefault }>
			<input type="text" name="title" 
					placeholder="book title" 
					value={title} onChange={ onFieldChange } 
					required
					style={{ background: theme.ui }}
					/>
			<input type="text" name="author" 
					placeholder="author" 
					value={author} onChange={ onFieldChange }
					required
					style={{ background: theme.ui }}/>
			<input type="submit" value="add book"/>
		</form>
}


export default NewBoookForm;