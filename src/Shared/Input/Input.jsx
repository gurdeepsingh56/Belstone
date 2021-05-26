import React from 'react'
import './Input.scss'

function Input({type , id ,label ,placeholder , onChange}) {
    return (
        <>
        <div className="onboarding__input form-control">
            <label htmlFor={id}>{label}</label>
            <input 
               type={type}
               placeholder={placeholder}
               id={id}
               label={label}
               onChange={onChange}
               required
            />
        </div>
            

        </>
    )
}

export default Input
