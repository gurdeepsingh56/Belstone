import React from 'react'
import {Link} from 'react-router-dom'
import quote from '../../../Assets/icons/ic_saved.svg'
import question from '../../../Assets/icons/question.svg'

function vanity() {
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
                       <button type="text"><Link to="/vanitybaseswood">Wood</Link></button>
                       <button type="text"><Link to="/vanitybasessteel">Steel</Link></button> 
                    </div>
                </div>
            </div>    
        </div>
    </div>    
    )


}

export default vanity
