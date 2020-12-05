import React, { useState} from "react";
import "../App.css";
import Axios from "axios";
import "../Styles/Pure.css";
import Footer from "../Components/Footer";


const Home = () => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);
  
  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => {
      console.log(res)
      getUser() 
    });
  };
  
  
  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };

    
  return (
<div>

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
        </fieldset>
      </form>

{/* VERIFICAR PQ O BTN LOG IN NAO FUNCIONA QDO COLOCADO DENTRO DO FORM */}
          <button className="pure-button pure-button-primary" onClick= {login}>Log in</button>
          {data ? <h1>Welcome {data.username}</h1> : null}


       <p>
            <a href="http://purecss.io" className="pure-button pure-button-primary">Get Started</a>
        </p>
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
          <div className="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
              <img width="300" alt="File Icons" className="pure-img-responsive" src="" />
          </div>
          <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">

              <h2 className="content-head content-head-ribbon">Laboris nisi ut aliquip.</h2>

              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor.
              </p>
              <br></br>
          </div>
          
      </div>
    <Footer />
    </div>
    </div>
    
  


);

}

export default Home;
