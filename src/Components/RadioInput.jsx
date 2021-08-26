import React, { useEffect } from 'react';
import { useState } from 'react';

const RadioInput = ({ label, options, selectedOptionId, className, onChange }) => {
    const [checkedOption, setCheckedOption] = useState(options.find(op => op.id === selectedOptionId));

    const isOptionChecked = (optionId) => checkedOption.id === optionId;

    useEffect(() => {
        onChange?.call(null, checkedOption.value);
    }, [checkedOption]);

    return (
        <div className={`radio-input ${className}`}>
            {
                label ?
                    <span className="label">{label}</span>
                    :
                    <></>
            }
            <div className="radio-options">
                {
                    options.map(option => (
                        <div key={option.id} 
                             className={`radio-option ${isOptionChecked(option.id) ? "checked" : ""}`}
                             onClick={() => setCheckedOption(option)}>
                            {option.name}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RadioInput
