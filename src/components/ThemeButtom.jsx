import React from 'react'
import light from '../images/light.png';
import dark from '../images/dark.png';

function ThemeButtom({ theme, toggleTheme }) {
    
    return (
        <>
            <div className="theme-btn" onClick={toggleTheme}>
                <img src={theme === 'light' ? light : dark} alt="Theme" />
            </div>
        </>
  )
}

export default ThemeButtom