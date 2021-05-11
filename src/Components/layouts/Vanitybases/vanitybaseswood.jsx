import React from 'react'
import quote from '../../../Assets/icons/ic_saved.svg'
import question from '../../../Assets/icons/question.svg'
import {Link } from 'react-router-dom'

function vanitybaseswood() {
    return (
        <div className="outside_div">
        <div className="outer_div">
            <p>Hospitality / Vanity Bases</p>

            <div className="header">
                <h1>Vanity Bases</h1>
                <p>View quote <img src={quote} alt="quote"></img></p>
            </div>

            <div className="inner_div">
                <div className="common_div">
                    <div className="heading">
                       <p>Material Type</p> 
                       <img src={question} alt="question" />
                    </div>
                    <div class="buttons">
                       <button type="text">Wood</button>
                       <button type="text"><Link to="/vanitybasessteel">Steel</Link></button> 
                    </div>
                </div>
          
            <div className="common_div">
                  <div className="input_fields">
                    <div className="form-control">
                        <label htmlFor="woodvanity">Wood Vanity Bases</label>
                        <select id="woodvanity" className="selectbox">
                            <option value="Standerd">Standerd</option>
                            <option value="Normal">Normal</option>
                            <option value="Regular">Regular</option>  
                        </select>
                        
                    </div>
                    <div className="form-control">
                        <label htmlFor="length">Length</label>
                        <select id="length" className="selectbox">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>  
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="species">Species Group</label>
                        <select id="species" className="selectbox">
                            <option value="Birch">Birch/Beech</option>
                            <option value="Beech">Beech</option>
                            <option value="Birch">Birch</option>  
                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="Shelf">Shelf</label>
                        <select id="Shelf" className="selectbox">
                            <option value="Shelf">Shelf</option>
                            <option value="No Shelf">No Shelf</option>    
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
                            <label htmlFor="edge">Material Type</label>
                            <button id="edge" className="btn">Wood</button>
                        </div>
                        <div className="form-control">
                            <label htmlFor="color">Wood Vanity Bases</label>
                            <button id="color" className="btnwood">Standerd</button>
                        </div>
                        <div className="form-control">
                            <label htmlFor="luxe">Length</label>
                            <button id="luxe" className="btn">20</button>
                        </div>
                        <div className="form-control">
                            <label htmlFor="feet">Species Group</label>
                            <button id="feet" className="btn">Birch/Beech</button>
                        </div>
                        <div className="form-control">
                            <label htmlFor="cutouts">Shelf</label>
                            <button id="cutouts" className="btn">No Shelf</button>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>    
    )
}

export default vanitybaseswood
