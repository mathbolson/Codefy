import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "../Styles/Pure.css"
import Axios from "axios";



function NavBar() {

  //const [redirect, setRedirect] = useState(null);
  
  const [data, setData] = useState(null);
  const [registerUsername, setRegisterUsername] = useState("");
 const [registerPassword, setRegisterPassword] = useState("");
  
  const login = () => {
    console.log("Hello");
    console.log(registerUsername, registerPassword)
     Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "/api/login",
    }).then((res) => {
      console.log(res.status)
      if(res.status === 200) 
      { console.log(res.data)
      setData(res.data)
       
      } 
    }).catch(err => {
      //console.log(err.response.status)
      if (err.response.status === 403) {
      //setRedirect(false)
      }
    });
  };

    const register = () => {
        Axios({
          method: "POST",
          data: {
            username: registerUsername,
            password: registerPassword,
          },
          withCredentials: true,
          url: "/api/register",
        }).then((res) => console.log(res))
        window.location.href ="/profile"
        login()
        //userCreated();
      };
      
    //   const userCreated = () => {
    //     alert("User Created!");
    //   }

  return (
<div>
    <div className="header">
    <nav className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
       <a className="pure-menu-heading" href="/" >CODEFY</a>
        <ul className="pure-menu-list">
            <div className="app">
            <div className="pure-control-group">
                <input className=" signUp" type="text" id="aligned-name" placeholder="Username" onChange={(e) => setRegisterUsername(e.target.value)} />
                <input className=" signUp" placeholder="Password" type="password" onChange={(e) => setRegisterPassword(e.target.value)} />
                <button className="signBtn pure-button-primary" onClick={register}>Sign Up</button>
            </div>
            </div>
        </ul>
    </nav>
    </div>


    




    </div>

















    );
}

export default NavBar;