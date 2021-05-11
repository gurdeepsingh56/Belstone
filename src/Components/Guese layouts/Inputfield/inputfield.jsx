import React from 'react'
import './inputfield.scss'

function inputfield({type , label , placeholder , onChange}) {
    let inputId = `${type}${label.split(" ").join("")}`;
    return (
        <div className="form-group onboarding__input">
            <label htmlFor={inputId}>{label}</label>
            <input
               type={type}
               className="form-control"
               id={inputId}
               placeholder={placeholder}
               onChange={onChange}
            />
        </div>
    )
}

export default inputfield
