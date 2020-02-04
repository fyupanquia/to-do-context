import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const ThemeToggle = () => {
    const { isLightTheme, toogleTheme } = useContext(ThemeContext)

    return <button onClick={ toogleTheme }>
        Toggle the theme
    </button>
}


export default ThemeToggle;