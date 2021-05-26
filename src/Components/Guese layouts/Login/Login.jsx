import React ,{useState } from 'react'
import {Link } from 'react-router-dom'
import Input from '../../../Shared/Input/Input'
import Button from '../../../Button/Button'
import Auth from '../../../Shared/Shared/Authentication/Auth'



function Login() {
    const [email,setEmail]=useState('')
    const[password, setPassword]=useState('')

    const handleSubmit=(e)=>{
        
    Auth.login({"email":email , "password":password})
    }

    return (
        <>

        <div className="outer_layout">
            <h4 className="belstone_text">Login</h4>

            <div className="border"></div>

            <h6>Please login to check price estimation</h6>

            <div className="belstone_formfields">
                <form  onSubmit={handleSubmit}>
                    <Input 
                        type="text"
                        id="email"
                        placeholder="Enter Email Address"
                        label="Email Address"
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    
                    <Input 
                        type="password"
                        id="password"
                        placeholder="Enter Password"
                        label="Password"
                        onChange={(e)=>setPassword(e.target.value)}
                        
                    />
                    

                    <p className="link_tag"><Link to="/Forget" >FORGOT PASSWORD?</Link></p>   

                    <Button label="Login"  />

                    <p className="login_footer_text">Don’t Have An Account? <Link to="/Register">Register Now</Link></p>
                </form>

            </div>
        </div>
            
        </>
    )
}

export default Login

