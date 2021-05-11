import React from 'react'
import {Link} from 'react-router-dom'
import eye  from '../../../Assets/icons/ic_eye.svg'
import Input from '../../../Input/Input'
import Button from '../../../Button/Button'

function Login() {
    return (
        <>
        <div className="outer_layout">
            <h4 className="belstone_text">Login</h4>

            <div className="border"></div>

            <h6>Please login to check price estimation</h6>

            <div className="belstone_formfields">
                <form>
                    <Input 
                        type="text"
                        id="email"
                        placeholder="Enter Email Address"
                        label="Email Address"
                    />
                    
                    <Input 
                        type="password"
                        id="password"
                        placeholder="Enter Password"
                        label="Password"

                    />

                    <p className="link_tag"><Link to="/Forget" >FORGOT PASSWORD?</Link></p>   

                    <Button label="Login" />

                    <p className="login_footer_text">Don’t Have An Account? <Link to="/Register">Register Now</Link></p>
                </form>

            </div>
        </div>
            
        </>
    )
}

export default Login

