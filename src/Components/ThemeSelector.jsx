import React from 'react'

const ThemeSelector = ({ appThemes, appTheme, setAppTheme }) => {
    return (
        <div className="theme-selector">
            <span>Style:</span>
            <input type="radio" name="theme-selector-radio" value="Light" 
                   checked={appTheme === appThemes.light} 
                   onChange={() => setAppTheme(appThemes.light)}/>
            <input type="radio" name="theme-selector-radio" value="Dark" 
                   checked={appTheme === appThemes.dark} 
                   onChange={() => setAppTheme(appThemes.dark)}/>
        </div>
    )
}

export default ThemeSelector
