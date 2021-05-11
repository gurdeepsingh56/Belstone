import React from 'react'
import quote from '../../../Assets/icons/ic_saved.svg'
import question from '../../../Assets/icons/question.svg'

function Countertops() {
    return (
        <div className="outside_div">
        <div className="outer_div">
            <p>Hospitality / Countertops</p>

            <div className="header">
                <h1>Countertops</h1>
                <p>View quote <img src={quote} alt="quote"></img></p>
            </div>

            <div className="inner_div">
                <div className="common_div">
                    <div className="heading">
                       <p>Edge</p> 
                       <img src={question} alt="question" />
                    </div>
                    <div class="buttons">
                       <button type="text">3/4" E&P/BN</button>
                       <button type="text">3/4" Ogee</button>
                       <button type="text">11/2" Lam E&P/BN</button>
                       <button type="text">11/4" OG</button>
                       <button type="text">3/4" lam Miter</button>
                       <button type="text">11/2" lam Ogee</button>
                       <button type="text">11/4" E&P/BN</button>
                       
                    </div>
                </div>
                <div className="common_div">
                    <div className="heading">
                        <p>Collections</p>
                        <img src={question} alt="question" />
                    </div>
                    
                    <div class="buttons">
                       <button type="text">Luxe</button>
                       <button type="text">Due'Torre</button>
                       <button type="text">Terranea</button>
                       <button type="text">Private</button>
                       <button type="text">Elite</button>
                      
                    </div>
                </div>
                   
                <div className="common_div">
                  <div className="input_fields">
                    <div className="form-control">
                        <label htmlFor="feet">Sq. Feet</label>
                        <input type="text" name="feet" id="feet"></input>
                    </div>
                    <div className="form-control">
                        <label htmlFor="cutouts">Sink Cutouts</label>
                        <input type="text" id="cutouts"></input>
                    </div>
                    <div className="form-control">
                        <label htmlFor="units">Units</label>
                        <input type="text" id="units"></input>
                    </div>
                    <div className="form-control">
                        <label htmlFor="types">Sink Type</label>
                        <select id="types">
                            <option value="Vanity">Galey</option>
                            <option value="Sinks">Galey + Island</option>
                            <option value="Shower">U Shaped</option>
                            
                        </select>
                    </div>
                    <div > 
                       <button type="submit" className="btn_primary">CALCULATE NOW</button>
                       <button type="submit" className="btn_secondary">ADD TO QUOTE</button>
                    </div>
                   
                    
                    <h3>$108.50</h3>
                  </div>
                </div>
                <div className="common_div">
                    <div className="input_fields">
                        <div className="form-control">
                            <label htmlFor="edge">Edge</label>
                            <button id="edge" className="btn">3/4" E&P/BN</button>
                        </div>
                        <div className="form-control">
                            <label htmlFor="color">Color</label>
                            <button id="color" className="btn">Luxe</button>
                        </div>
                        <div className="form-control">
                            <label htmlFor="luxe">Luxe</label>
                            <button id="luxe" className="btn">Abbadabba</button>
                        </div>
                        <div className="form-control">
                            <label htmlFor="feet">Sq.Feet</label>
                            <button id="feet" className="btn">5</button>
                        </div>
                        <div className="form-control">
                            <label htmlFor="cutouts">Sink Cutouts</label>
                            <button id="cutouts" className="btn">1</button>
                        </div>
                        <div className="form-control">
                            <label htmlFor="units">Units</label>
                            <button id="units" className="btn">2</button>
                        </div>
                        <div className="form-control">
                            <label htmlFor="sink"> Type</label>
                            <button id="sink" className="btn">Galey</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Countertops
