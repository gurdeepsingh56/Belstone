import React from 'react'
import { Route } from 'react-router-dom'
import logo from '../../../Assets/images/BelstoneLogo.png'
import brand_logo from '../../../Assets/images/brand_logo.png'
import brand_img from '../../../Assets/icons/Path 1.svg'  
import './GuestLayout.scss'


function GuestLayout({Component:Comp,...rest}) {
    return (
        <div className="common_layout">
            <div className="left_side_layout">
                <div className="brand_logo">
                    <img src={logo} alt="brandlogo"/>
                </div>
                <div className="brand_img">
                    <img src={brand_logo} alt="brandimg" />
                </div>
                <div className="brand_foot_logo">
                    <img src={brand_img}  alt="brandsvg"/>
                </div>

            </div>
            <div className="right_side_layout">
                <Route {...rest} render={(props)=> <Comp {...props} />} /> 
            </div>
        </div>
    )
}

export default GuestLayout
