import React ,{useState }from 'react'
import quote from '../../../Assets/icons/ic_saved.svg'
import question from '../../../Assets/icons/question.svg'
import Mask from '../../../Assets/images/Mask.png'
import Modal from '../../../Shared/Modal/Modal'


function Vanities() {

    const[show ,setShow]=useState(false)
    
    return (
        <div className="outside_div">
            <div className="outer_div">
                <p>Multi Housing / Vanity Countertops</p>

                <div className="header">
                    <h1>Vanities</h1>
                    <p>Saved Collections<img src={quote} alt="quote" ></img></p>
                    

                </div>   

                <div className="inner_div">
                    <div className="common_div">
                        <div className="heading">
                           <p><b>Edge</b></p> 
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
                            <p><b>Collections</b></p>
                            <img src={question} alt="question" />
                        </div>
                        
                        <div class="buttons">
                           <button type="text">Luxe</button>
                           <button type="text">Due'Torre</button>
                           <button type="text">Terranea</button>
                           <button type="text">Private</button>
                           <button type="text">Elite</button>
                          
                        </div>

                        <div className="border"></div>

                        <div className="heading">
                            <p><b>Luxe</b></p>
                            <button className="show-popup-button" onClick={()=>setShow(true)}>See All</button>
                            <Modal show={show} onClose={()=>setShow(false)}/> 
                        </div>

                        <div className="card_container">
                            <div class="card">
                                <img src={Mask}/>
                                <div class="container">
                                   <small>Abbadabba</small>
                                </div>
                            </div>
                            <div class="card">
                                <img src={Mask}/>
                                <div class="container">
                                   <small>
                                       Bergamot
                                   </small>
                                </div>
                            </div>
                            <div class="card">
                                <img src={Mask}/>
                                <div class="container">
                                   <small>Buckwheat</small>
                                </div>
                            </div>
                            <div class="card">
                                <img src={Mask}/>
                                <div class="container">
                                   <small>Dabbado</small>
                                </div>
                            </div>
                            <div class="card">
                                <img src={Mask}/>
                                <div class="container">
                                   <small>Bergamot</small>
                                </div>
                            </div>
                            <div class="card">
                                <img src={Mask}/>
                                <div class="container">
                                   <small>Damask</small>
                                </div>
                            </div>
                            <div class="card">
                                <img src={Mask}/>
                                <div class="container">
                                   <small>Dulce Leche</small>
                                </div>
                            </div>
                            <div class="card">
                                <img src={Mask}/>
                                <div class="container">
                                   <small>Embers</small>
                                </div>
                            </div>
                            <div class="card">
                                <img src={Mask}/>
                                <div class="container">
                                   <small>Hazlenut</small>
                                </div>
                            </div>
                            <div class="card">
                                <img src={Mask}/>
                                <div class="container">
                                   <small>Indi Pearl</small>
                                </div>
                            </div>
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
                            <label htmlFor="types">Sink Types</label>
                            <select id="types">
                                <option value="Vanity">Vanity</option>
                                <option value="Sinks">Sinks</option>
                                <option value="Shower">Shower</option>
                                <option value="Basein">Basein</option>
                            </select>
                        </div>

                        <h1>$108.50</h1>
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
                                <label htmlFor="sink">Sink Types</label>
                                <button id="sink" className="btn">Vanity</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vanities
