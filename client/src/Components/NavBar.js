import React, { useState } from "react";
//import { Link } from "react-router-dom";
import "../Styles/Pure.css"
import Axios from "axios";


function NavBar() {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

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
        userCreated();
      };
      
      const userCreated = () => {
        alert("User Created!");
      }

  return (
<div>
    <div className="header">
    <nav className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
       <a className="pure-menu-heading" href="#" >CODEFY</a>
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