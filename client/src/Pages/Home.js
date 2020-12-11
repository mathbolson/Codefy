import React, { useState} from "react";
import {Redirect} from "react-router-dom";
import "../App.css";
import Axios from "axios";
import "../Styles/Pure.css";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import linkedinIcon from "../Util/images/linkedin-icon.png";
import gitHubIcon from "../Util/images/gitHublogo1.png";




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
  
  
  
  // const getUser = () => {
  //   Axios({
  //     method: "GET",
  //     withCredentials: true,
  //     url: "/user",
  //   }).then((res) => {
  //     setData(res.data);
  //     console.log(res.data);
  //   });
  // };

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



       {/* <p>
            <a href="http://purecss.io" className="pure-button pure-button-primary">Get Started</a>
          </p> */}
    </div>
</div> 

  <div className="content-wrapper">
    <div className="content">
        <h2 className="content-head is-center">CODEFY</h2>


        <div className="pure-g">
            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">

                <h3 className="content-subhead">
                    <i className="fa fa-rocket"></i>
                    Get Started Quickly
                </h3>
                <div>
                  This is a new div This is a new div This is a new div This is a 
                  new div This is a new div 
                  This is a new div This is a new div This is a new div This is a new 
                  div This is a new div 
                  This is a new div This is a new div This is a new div This is a new 
                  div This is a new div 
                  This is a new div This is a new div This is a new div This is a new d
                  iv This is a new div 
                  This is a new div This is a new div This is a new div This is a new 
                  div This is a new div 
                  This is a new div 
                  This is a new div This is a new div This is a new div This is a new div This is a new div 
                  This is a new div This is a new div This is a new div This is a new div 

                </div>
                <p>
                TthisssssTthisssssTthisssssTthisssssTthisssssTthisssssTthisssss
                </p>
            </div>
            
            </div>
    </div>
 
 
    <div className="ribbon l-box-lrg pure-g">
          
          <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">

              <h1 className="content-head content-head-ribbon is-center">Teamwork</h1>
              <h3>"The dictionary is the only place that success comes before work." – Vince Lombardi Jr.</h3>

             <div className="row is-center"> 
                <div className="card">
                  <img src="https://media-exp1.licdn.com/dms/image/C5603AQGJSnTjHutMEg/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=SnGQzYmOdtx5tVIpNCjweMy6TGPObg2lRjOp7BzCZ3k" alt="Diogo Candido" className="imgTeam" style={{width: 100}}/>
                  <div className="container">
                    <h3><b>Diogo Candido</b></h3> 
                    <div className="card-action">
                      <a href="https://www.linkedin.com/in/diogo-candido-da-silva-26061811a/"><img src={linkedinIcon} className="social" alt="LinkedIn" /></a>
                      <a href="https://github.com/diogocandidos"><img src={gitHubIcon} className="social" alt="GitHub" /></a>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <img src="https://media-exp1.licdn.com/dms/image/C5603AQGJSnTjHutMEg/profile-displayphoto-shrink_100_100/0/1598205880593?e=1613001600&v=beta&t=AE20GOgZK57RJcczZhlai_SMMCUVAvlYPU0VgSxTeBw" alt="Matheus Bolson" style={{width: 100}}/>
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
    <Footer />
    </div>
    </div>
    
    
    
    
    );
    
  } 
  }

export default Home;
