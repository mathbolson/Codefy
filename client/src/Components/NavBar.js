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
          url: "http://localhost:4000/register",
        }).then((res) => console.log(res));
      };

  return (

    <div className="header">
    <nav className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
       <a className="pure-menu-heading" href="../Pages/Home.js">LOGO</a>
        <ul className="pure-menu-list">
            <div className="App">
            <div>
                <input placeholder="username" onChange={(e) => setRegisterUsername(e.target.value)} />
                <input placeholder="password" type="password" onChange={(e) => setRegisterPassword(e.target.value)} />
                <button onClick={register}>Sign up</button>
            </div>
            </div>
        </ul>
    </nav>
    </div>


    );
}

export default NavBar;