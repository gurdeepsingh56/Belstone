import React ,{useState} from 'react'
import Group1 from '../../Assets/images/Group1.png'

function Modaldata() {
            
    let data=[
        {
            name:"AbbaDabba"
        }
    ]
               
           
    return (
        <>
           {
               data.map((item)=>(
                   <div className="card" key={item.name}>
                       <img src={item.img}  />

                       <div className="container">
                           <h4>{item.name}</h4>
                       </div>
                   </div>
               ))
           }
            
        </>
    )
}

export default Modaldata
