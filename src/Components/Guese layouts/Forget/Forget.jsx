import React from 'react'
import {Link} from 'react-router-dom'
import Input from '../../../Input/Input'
import Button from '../../../Button/Button'

function Forget() {
    return (
        <>
         <div className="outer_layout">
            <h4 className="belstone_text">Forgot Password</h4>

            <div className="border"></div>

            <h6>Please enter your registered Email Address.We will send you verification code to reset your password.</h6>

            <div className="belstone_formfields">
                <form>
                   <Input 
                      type="email"
                      label="Email Address"
                      placeholder="Enter Email Address"
                      id="email"

                    />

                    <Button label="SUBMIT" />

                    <p className="login_footer_text"><Link to="/">Sign In</Link></p>
                </form>

            </div>
        </div>
            
            
        </>
    )
}

export default Forget
