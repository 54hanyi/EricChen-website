import React from 'react'


function ThemeButtom({ theme, toggleTheme }) {
    
    return (
        <>
            <div className="theme-btn" onClick={toggleTheme}>
                <img src={theme === 'light' ? `${process.env.PUBLIC_URL}/images/light.png` : `${process.env.PUBLIC_URL}/images/dark.png`} alt="Theme" />
            </div>
        </>
  )
}

export default ThemeButtom