import React from 'react'
import Input from '../../../Shared/Input/Input'
import Button from '../../../Button/Button'
import Textarea from '../../../Shared/Textarea/Textarea'

function Register() {
    return (
        <>
         <div className="outer_layout">
            <h4 className="belstone_text">Register</h4>

            <div className="border"></div>

            <h6>Please enter your registered Email Address.We will send you verification code to reset your password.</h6>
            
            <div className="scroll_field">
            <div className="belstone_formfields">
                <form>
                        <Input 
                             type="text"
                             id="emailaddress"
                             placeholder="Enter Email Address"
                             label="Email Address"
                        />         
                        
                        <Input 
                             type="text"
                             id="password"
                             placeholder="Enter Password"
                             label="Password"
                        />     
                        
                        <Input
                             type="text"
                             id="confirmpassword"
                             placeholder="Enter Email Address"
                             label="Confirm Password"
                        />     
                
                   
                        
                        <Input 
                             type="text"
                             id="fullname"
                             placeholder="Enter Full Name"
                             label="Full Name"
                        />     
               
                        
                        <Input 
                             type="text"
                             id="businessname"
                             placeholder="Enter Businees Name"
                             label="Business Name"
                        />     
                        
                        <Input 
                             type="text"
                             id="phonenumber"
                             placeholder="Enter Phone Number"
                             label="Phone Number"
                        />     
                    
                        <Textarea label="Address" />

                        <Input 
                             type="text"
                             id="captche"
                             placeholder="Enter Captche"
                             label="Captche"
                        />      

                    <Button label="REGISTER NOW" />
                </form>

            </div>
        </div>

        </div>
           
            
            
            
        </>
    )
}

export default Register
