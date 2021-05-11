import React from 'react'

function Textarea({label}) {
    return (
        <div className="form_group">
        <label htmlFor="textarea">{label}</label>
        
        <textarea
             type="text"
             id="textarea"
             placeholder="Enter Address"
             required
        />     
    </div>  
    )
}

export default Textarea
