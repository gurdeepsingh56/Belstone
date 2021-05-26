import React from 'react'
import quote from '../../../Assets/icons/ic_saved.svg'

function Bruskin() {
    return (
        <div className="outside_div">
        <div className="outer_div">
            <p>Hospitality / Bruskin</p>

            <div className="header">
                <h1>Bruskin</h1>
                <p>View quote <img src={quote} alt="quote"></img></p>
            </div>

            <div className="inner_div">
                
          
            <div className="common_div">
                <div className="input_fields">
                    <div className="form-control">
                        <label htmlFor="pan">Pan</label>
                        <input type="text" id="pan" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="surrounds">Surrounds</label>
                        <input type="text" id="surrounds" />
                        
                    </div>
                    <div className="form-control">
                        <label htmlFor="length">Doors</label>
                        <select id="length" className="selectbox" >
                            <option value="1">Bianco</option>
                            <option value="2">Large</option>
                            <option value="3">Extra Large</option>  
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="length">Lighting</label>
                        <select id="length" className="selectbox" >
                            <option value="1">No-Lighting</option>
                            <option value="2">Lighting</option>
                            <option value="3">Extra Large</option>  
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
                            <label htmlFor="edge">Pan</label>
                            <button id="edge" className="btn ">Ultra Low</button>
                        </div>
                        <div className="form-control">
                            <label htmlFor="edge">Surrounds</label>
                            <button id="edge" className="btn ">Surrounds</button>
                        </div>
                        <div className="form-control">
                            <label htmlFor="edge">Doors</label>
                            <button id="edge" className="btn ">Hinge</button>
                        </div>
                        <div className="form-control">
                            <label htmlFor="edge">Lighting</label>
                            <button id="edge" className="btn ">No Lighting</button>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>   
    )
}

export default Bruskin
