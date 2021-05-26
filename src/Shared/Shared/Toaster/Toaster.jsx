import React from 'react'
import './Toaster.scss'

function Toast({type ,content , show ,onClose}) {
    return (
        <div className={`toast ${show ? "show" : "" }`}>
            <div className="toast-header">
                <strong className={`mr-auto text-${type}`}>
                   {type === "danger" ?  "Error" : "Success"}
                </strong>
                <button
                  type="button"
                  onClick={onClose}
                  className="ml-2 mb-1 close"
                >

                <span aria-hidden="true">& times</span>

                </button>

                <div className="toast-body">{content}</div>
            </div>
        </div>
    )
}

export {Toast} 
