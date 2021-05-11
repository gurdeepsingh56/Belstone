import React ,{useEffect} from 'react'
import logo from '../../Assets/images/BelstoneLogo.png'
import house from '../../Assets/icons/Home.svg'
import arrow from '../../Assets/icons/arrow.svg'
import { Link, Route} from "react-router-dom"
import hospitality from '../../Assets/icons/Group 82.svg'
import logout from '../../Assets/icons/ic_logout.svg'
import menu from '../../Assets/icons/ic_menu.svg'
import search from '../../Assets/icons/ic_menu (1).svg'
import bannerimg from '../../Assets/images/Mask Group 1.png'
import imglogo from '../../Assets/icons/Path 1.svg'
import './Common.scss'

function Common({Component:Comp,...rest}) {
    
    useEffect(() => {
        var dropdown = document.getElementsByClassName("dropdown-btn");
        

        for ( let i = 0; i < dropdown.length; i++) {
           dropdown[i].addEventListener("click", function() {
            

           var dropdownContent = this.nextElementSibling;
           if (dropdownContent.style.display === "flex") {
              dropdownContent.style.display = "none";

            } else {
              dropdownContent.style.display = "flex";
            }

            
        });
      }
    }, [])

   

    return (
        <div className="main_div">
            <div className="left">
                <div className="brand_logo">
                    <img src={logo} alt="logo"></img>
                </div>
            
                <div className="sidenav">
                   <div className="dropdown_div">
                    <button className="dropdown-btn">
                       <img src={house} alt="house"></img>
                       Multi Housing
                       <img src={arrow} alt="arrow" className="side icon" ></img>
                    </button>
                    <div className="dropdown-container">
                        <Link to="/vanities">Vanity Countertops</Link>
                        <Link to="/kitchen">Kitchen Countertops</Link>
                    </div>
                   </div>
                   <div className="dropdown_div">
                    <button className="dropdown-btn">
                       <img src={hospitality} alt="hospitality"></img>
                       Hospitality
                       <img src={arrow} alt="arrow" className="sidearrow icon" ></img>
                    </button>
                    <div className="dropdown-container">
                        <Link to="/countertops">Countertops</Link>
                        <Link to="/vanitybases">Vanity Bases</Link>
                        <Link to="/showerdoors">Shower Doors</Link>
                        <Link to="/pans">Pans</Link>
                        <Link to="/sinks">Sinks</Link>
                        <Link to="/surroundstone">Surrounstone</Link>
                        <Link to="/bruskin">Bruskin</Link>
                    </div>
                   </div>
                    <button className="logout_btn">
                       <img src={logout} alt="logout"></img>
                       Logout
                    </button>
                </div>
            </div>
            <div className="center">
                <div className="searchinput">
                    <img src={menu} alt="menu"></img>
                    <input type="text" ></input>
                    <img src={search} alt="search" className="search"></img>
                </div>
                <div className="border"></div>

                <div className="banner_img">
                    <img src={bannerimg} alt="img" />
                </div>

                <div className="logo">
                    <img src={imglogo}  alt="logo" />
                </div>
            </div>
            <div className="right">
               <Route {...rest} render={(props)=> <Comp {...props} />} /> 
            </div>
        </div>
    )
}


export default Common


