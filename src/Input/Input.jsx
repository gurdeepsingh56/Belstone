import React from 'react'
import './Input.scss'

function Input({type , id ,label ,placeholder}) {
    return (
        <>
        <div className="onboarding__input form-control">
            <label htmlFor={id}>{label}</label>
            <input 
               type={type}
               placeholder={placeholder}
               id={id}
               label={label}
               required
            />
        </div>
            

        </>
    )
}

export default Input
