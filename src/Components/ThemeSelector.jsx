import React from 'react'
import RadioInput from './RadioInput';

const ThemeSelector = ({ appThemes, appTheme, setAppTheme }) => {
    const radioOptions = [
        { id: appThemes.light, name: "Light", value: appThemes.light },
        { id: appThemes.dark, name: "Dark", value: appThemes.dark }
    ];

    return (
        <div className="theme-selector">
            <RadioInput label="Style:" 
                        options={radioOptions}
                        selectedOptionId={appTheme}
                        className="theme-radio-input"
                        onChange={(value) => setAppTheme(value)}/>
        </div>
    )
}

export default ThemeSelector
