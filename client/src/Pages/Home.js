import React, { useState} from "react";
import {Redirect} from "react-router-dom";
import "../App.css";
import Axios from "axios";
import "../Styles/Pure.css";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";


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
          <p className="splash-subhead">
             <strong>"Hello world!"</strong>
          </p>

      <form className="pure-form pure-form-aligned">
        <fieldset>
          <div className="pure-control-group">
              <input type="text" id="aligned-name" placeholder="Username" onChange={(e) => setLoginUsername(e.target.value)} />
          </div>
          <div className="pure-control-group">
              <input type="password" id="aligned-password" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)} />
          </div>
      <a className="pure-button pure-button-primary" onClick= {login}>Get Started</a>
      { redirect === false ? <div className="errorAlert"> <h4>User not found!</h4></div> : null }
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
                <p>
                    Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                </p>
            </div>
            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                <h3 className="content-subhead">
                    <i className="fa fa-mobile"></i>
                    Responsive Layouts
                </h3>
                <p>
                    Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                </p>
            </div>
            </div>
    </div>
 
 
    <div className="ribbon l-box-lrg pure-g">
          
          <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">

              <h1 className="content-head content-head-ribbon is-center">Work Team</h1>
              <h3>"The dictionary is the only place that success comes before work." – Vince Lombardi Jr.</h3>

             <div className="row is-center"> 
                <div className="card">
                  <img src="https://media-exp1.licdn.com/dms/image/C5603AQGJSnTjHutMEg/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=SnGQzYmOdtx5tVIpNCjweMy6TGPObg2lRjOp7BzCZ3k" alt="Diogo Candido" classeName="imgTeam" style={{width: 100}}/>
                  <div className="container">
                    <h3><b>Diogo Candido</b></h3> 
                    <div className="card-action">
                      <a href="https://www.linkedin.com/in/diogo-candido-da-silva-26061811a/"><img src="../Util/images/linkedin-icon.png" className="social" alt="LinkedIn" /></a>
                      <a href="https://github.com/diogocandidos"><img src="../Util/images/gitHublogo1.png" className="social" alt="GitHub" /></a>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <img src="https://media-exp1.licdn.com/dms/image/C5603AQGJSnTjHutMEg/profile-displayphoto-shrink_400_400/0?e=1604534400&v=beta&t=SnGQzYmOdtx5tVIpNCjweMy6TGPObg2lRjOp7BzCZ3k" alt="Matheus Bolson" style={{width: 100}}/>
                  <div className="container">
                    <h3><b>Matheus Bolson</b></h3> 
                    <div className="card-action">
                      <a href="https://www.linkedin.com/in/matheus-weber-bolson-1388421ab/"><img src="../Util/images/linkedin-icon.png" className="social" alt="LinkedIn" /></a>
                      <a href="https://github.com/mathbolson"><img src="../Util/images/gitHublogo1.png" className="social" alt="GitHub" /></a>
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
