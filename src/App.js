import React from 'react'
import Common from './Components/Common/Common'
import {BrowserRouter, Switch } from "react-router-dom"

import kitchen from './Components/layouts/Kitchen/kitchen'
import countertops from './Components/layouts/Countertops/countertops'
import vanitybases from './Components/layouts/Vanitybases/vanitybases'
import vanitybaseswood from './Components/layouts/Vanitybases/vanitybaseswood'
import vanitybasessteel from './Components/layouts/Vanitybases/vanitybasessteel'
import Showerdoors from './Components/layouts/Showerdoors/Showerdoors'
import pans from './Components/layouts/Pans/pans'
import sinks from './Components/layouts/Sinks/sinks'
import surroundstone from './Components/layouts/Surroundstone/surroundstone'
import Bruskin from './Components/layouts/Bruskin/Bruskin'
import GuestLayout from './Components/Guese layouts/Common/GuestLayout'
import Login from './Components/Guese layouts/Login/Login'
import Forget from './Components/Guese layouts/Forget/Forget'
import Register from './Components/Guese layouts/Register/Register'
import Reset from './Components/Guese layouts/Reset Password/Reset'
import Verification from './Components/Guese layouts/Verification/Verification'
import Vanities from './Components/layouts/Vanities/Vanities'
import Modal from './Shared/Modal/Modal'




function App() {
  return (
    <BrowserRouter>
      <Switch>
        
        <GuestLayout exact path="/" Component={Login} />
        <GuestLayout exact path="/Forget" Component={Forget} />
        <GuestLayout exact path="/Register" Component={Register} />
        <GuestLayout exact path="/Reset" Component={Reset} />
        <GuestLayout exact path="/Verification" Component={Verification} />
        
        <Common exact path="/Vanities" Component={Vanities} />
        <Common exact path="/kitchen" Component={kitchen} />
        <Common exact path="/countertops" Component={countertops} />
        <Common exact path="/vanitybases" Component={vanitybases} />
        <Common exact path="/vanitybaseswood" Component={vanitybaseswood} />
        <Common exact path="/vanitybasessteel" Component={vanitybasessteel} />
        <Common exact path="/Showerdoors" Component={Showerdoors} />
        <Common exact path="/pans" Component={pans} />
        <Common exact path="/sinks" Component={sinks} />
        <Common exact path="/surroundstone" Component={surroundstone} />
        <Common exact path="/Bruskin" Component={Bruskin} />

        <Modal exact path="/Modal" />

      </Switch>
    </BrowserRouter>
  )
}

export default App

  

