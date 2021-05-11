import React from 'react'
import quote from '../../../Assets/icons/ic_saved.svg'

function pans() {
    return (
        <div className="outside_div">
        <div className="outer_div">
            <p>Hospitality / Pans</p>

            <div className="header">
                <h1>Pans</h1>
                <p>View quote <img src={quote} alt="quote"></img></p>
            </div>

            <div className="inner_div">
                
          
            <div className="common_div">
                <div className="input_fields">
                    <div className="form-control">
                        <label htmlFor="woodvanity">Type</label>
                        <select id="woodvanity" className="selectbox">
                            <option value="Standerd">Urbanities</option>
                            <option value="Normal">Normal</option>
                            <option value="Regular">Regular</option>  
                        </select>
                        
                    </div>
                    <div className="form-control">
                        <label htmlFor="length">Size</label>
                        <select id="length" className="selectbox" placeholder="Select Size">
                            <option value="1">Medium</option>
                            <option value="2">Large</option>
                            <option value="3">Extra Large</option>  
                        </select>
                    </div>
                   
                  <div>
                    <button type="submit" className="btn_primary">CALCULATE NOW</button>
                    <button type="submit" className="btn_secondary">ADD TO QUOTE</button>
                   </div> 
                    <h3>$108.50</h3>
                  </div>
                </div>
                <div className="common_div">
                    <div className="input_fields">
                        <div className="form-control">
                            <label htmlFor="edge">Type</label>
                            <button id="edge" className="btn">Urbanities</button>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>   
    )
}

export default pans
