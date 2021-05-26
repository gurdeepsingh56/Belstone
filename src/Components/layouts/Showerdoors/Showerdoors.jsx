import React from 'react'
import quote from '../../../Assets/icons/ic_saved.svg'

function Showerdoors() {
    

    return (
        <div className="outside_div">
        <div className="outer_div">
            <p>Hospitality / Shower Doors</p>

            <div className="header">
                <h1>Shower Doors</h1>
                <p>View quote <img src={quote} alt="quote"></img></p>
            </div>

            <div className="inner_div">
                
          
            <div className="common_div">
                <div className="input_fields">
                    <div className="form-control">
                        <label htmlFor="woodvanity">Type</label>
                        <select id="woodvanity" className="selectbox" >
                            <option value="Urbanities">Urbanities</option>
                            <option value="Normal">Normal</option>
                            <option value="Regular">Regular</option>  
                        </select>
                        
                    </div>
                    <div className="form-control">
                        <label htmlFor="length">Finish</label>
                        <select id="length" className="selectbox" >
                            <option value="Polished">Polished</option>
                            <option value="Regular">Regular</option>
                            <option value="Un-Polished">Un-Polished</option>  
                        </select>
                    </div>
                   
                   <div className="d-flex">
                     <div>
                      <button type="submit" className="btn_primary">CALCULATE NOW</button>
                      <button type="submit" className="btn_secondary">ADD TO QUOTE</button>
                     </div>
                     <h3>$108.50</h3>
                   </div>
                   
                  </div>
                </div>
                <div className="common_div">
                    <div className="input_fields">
                        <div className="form-control">
                            <label htmlFor="edge">Type</label>
                            <button id="edge" className="btn">Regular</button>
                        </div>
                        <div className="form-control">
                            <label htmlFor="color">Finish</label>
                            <button id="color" className="btnwood">Polished</button>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>   
    )
}

export default Showerdoors

