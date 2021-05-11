import React from 'react'
import {Link} from 'react-router-dom'
import Button from '../../../Button/Button'

function Verification() {
    return (
        <>
         <div className="outer_layout">
            <h4 className="belstone_text">Verification Code</h4>

            <div className="border"></div>
            

            <h6>Please enter six digit code sent to your registered Email Address</h6>

            <div className="belstone_formfields">
                <form>
                    <div className="form_group">
                        <label htmlFor="emailaddress">Verification Code</label>
                    </div>

                    <div className="input_fields">
                        <input type="text" required/>
                        <input type="text" required/>
                        <input type="text" required/>
                        <input type="text" required/>
                        <input type="text" required/>
                        <input type="text" required/>
                    </div>

                    
                    <Button label="SUBMIT" />

                    <p className="login_footer_text"><Link to="/Register">Resend Verification Code</Link></p>
                </form>

            </div>
        </div>
            
        </>
    )
}

export default Verification
