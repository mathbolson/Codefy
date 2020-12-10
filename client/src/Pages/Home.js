import React, { useState} from "react";
import {Redirect} from "react-router-dom";
import "../App.css";
import Axios from "axios";
import "../Styles/Pure.css";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import Teamwork from "../Components/Teamwork";


const Home = () => {
  const [redirect, setRedirect] = useState(null);
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);
  
  const login = () => {
    console.log("Hello");
     Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "/api/login",
    }).then((res) => {
      console.log(res.status)
      if(res.status === 200) 
      { console.log(res.data)
      setData(res.data)
       setRedirect(true)
      } 
    }).catch(err => {
      //console.log(err.response.status)
      if (err.response.status === 403) {
      setRedirect(false)
      }
    });
  };
  
  
 if(redirect) {
   return <Redirect  to={{pathname:"/profile", state:{username : data.username}}} />
 } else {
  
  return (
    <div>
        <NavBar />

      <div className="splash-container">
        <div className="splash">
          <p className="splash-head">CODEFY</p>
            <br></br>

            <form className="pure-form pure-form-aligned">
                <fieldset>
                  <div className="pure-control-group">
                      <input type="text" id="aligned-name" placeholder="Username" onChange={(e) => setLoginUsername(e.target.value)} />
                  </div>
                  <div className="pure-control-group">
                    { redirect === false ? <div className="errorAlert"> <p><strong>User not found!</strong></p></div> : null }
                    <input type="password" id="aligned-password" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)} />
                  </div>
                  <a className="getStartedBtn pure-button-primary" onClick={login}>Log in</a><br></br>
                </fieldset>
            </form>

        </div>
      </div> 

      <div className="content-wrapper">
        <div className="content">
          <h2 className="content-head is-center">CODEFY</h2>


            <div className="pure-g">
              <div className="sm-box pure-u-sm-1">

                  <h3 className="content-subhead">
                      <i className="fa fa-rocket"></i>
                      Get Started Quickly
                  </h3>
          
                  <p>
                      Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque 
                  </p>
              </div>
              
            </div>
      </div>
  
          <div>     
            <Teamwork />
          </div>
            <Footer />
      </div>
    </div>
      
        
    );
    
  } 
  }

export default Home;
