import React from 'react'

function Button({label }) {
    return (
        <div className="btn_primary">
          <button className="btn" type="submit"  >{label}</button>
        </div>
    )
}

export default Button
