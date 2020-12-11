import React, { useState} from "react";
import {Redirect} from "react-router-dom";
import "../App.css";
import "../Styles/Pure.css";
import linkedinIcon from "../Util/images/linkedin-icon.png";
import gitHubIcon from "../Util/images/gitHublogo1.png";
import diogo from "../Util/images/diogo.jpeg";
import matheus from "../Util/images/matheus.jpeg";

function Teamwork() {
    return (
        <div className="ribbon l-box-lrg pure-g">
          
            <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">
              <h1 className="content-head content-head-ribbon is-center">Teamwork</h1>
              <h3>"The dictionary is the only place that success comes before work." – Vince Lombardi Jr.</h3>

                <div className="row is-center"> 
                    <div className="card">
                         <img className="imgTeam" src={diogo} alt="Diogo Candido"/>
                            <div className="container">
                                <h3><b>Diogo Candido</b></h3> 
                                <div className="card-action">
                                <a href="https://www.linkedin.com/in/diogo-candido-da-silva-26061811a/"><img src={linkedinIcon} className="social" alt="LinkedIn" /></a>
                                <a href="https://github.com/diogocandidos"><img src={gitHubIcon} className="social" alt="GitHub" /></a>
                            </div>
                    </div>
                </div>

                <div className="card">
                    <img className="imgTeam" src={matheus} alt="Matheus Bolson"/>
                    <div className="container">
                        <h3><b>Matheus Bolson</b></h3> 
                        <div className="card-action">
                            <a href="https://www.linkedin.com/in/matheus-weber-bolson-1388421ab/"><img src={linkedinIcon} className="social" alt="LinkedIn" /></a>
                            <a href="https://github.com/mathbolson"><img src={gitHubIcon} className="social" alt="GitHub" /></a>
                        </div>
                    </div>
                </div>
                
                </div>
            </div>
        </div>


    );
}

export default Teamwork;