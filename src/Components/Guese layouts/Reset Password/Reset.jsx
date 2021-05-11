import React from 'react'
import Input from '../../../Input/Input'
import Button from '../../../Button/Button'

function Reset() {
    return (
        <>
             <div className="outer_layout">
            <h4 className="belstone_text">Reset Password</h4>

            <div className="border"></div>

            <h6>Please enter new password to reset your password</h6>

            <div className="belstone_formfields">
                <form> 
                        <Input 
                             type="text"
                             id="newpassword"
                             placeholder="Enter New Password"
                             label="New Password"
                        />     
                        <Input 
                              type="text"
                              id="password"
                              placeholder="Enter Confirm Password"
                              label="Confirm Password"
                        />

                    <Button label="Done" />

                </form>

            </div>
        </div>
        </>
    )
}

export default Reset
