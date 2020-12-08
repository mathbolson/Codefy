import React from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import NavBar from "./Components/NavBar";
import Wrapper from "./Components/Wrapper";
import './Styles/Pure.css'
import Home from "./Pages/Home";
//import Footer from "./Components/Footer";
import NotFoundPage from "./Pages/NotFoundPage";
import Profile from "./Pages/Profile";


function App() {
  return (
    <Router>

        {/* <NavBar /> */}
        <Wrapper>
            <Route exact path="/" component={Home} />
            <Route component={NotFoundPage} />
            <Route exact path="/profile" component={Profile} />
        </Wrapper>
        {/* <Footer /> */}
    </Router>
    
    
  );
}

export default App;































// import React, { useState } from "react";
// import "./App.css";
// import Axios from "axios";

// function App() {
//   const [registerUsername, setRegisterUsername] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");
//   const [loginUsername, setLoginUsername] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const [data, setData] = useState(null);
//   const register = () => {
//     Axios({
//       method: "POST",
//       data: {
//         username: registerUsername,
//         password: registerPassword,
//       },
//       withCredentials: true,
//       url: "http://localhost:4000/register",
//     }).then((res) => console.log(res));
//   };
//   const login = () => {
//     Axios({
//       method: "POST",
//       data: {
//         username: loginUsername,
//         password: loginPassword,
//       },
//       withCredentials: true,
//       url: "http://localhost:4000/login",
//     }).then((res) => console.log(res));
//   };
//   const getUser = () => {
//     Axios({
//       method: "GET",
//       withCredentials: true,
//       url: "http://localhost:4000/user",
//     }).then((res) => {
//       setData(res.data);
//       console.log(res.data);
//     });
//   };
//   return (
//     <div className="App">
//       <div>
//         <h1>Sign Up</h1>
//         <input
//           placeholder="username"
//           onChange={(e) => setRegisterUsername(e.target.value)}
//         />
//         <input
//           placeholder="password"
//           onChange={(e) => setRegisterPassword(e.target.value)}
//         />
//         <button onClick={register}>Submit</button>
//       </div>

//       <div>
//         <h1>Login</h1>
//         <input
//           placeholder="username"
//           onChange={(e) => setLoginUsername(e.target.value)}
//         />
//         <input
//           placeholder="password"
//           onChange={(e) => setLoginPassword(e.target.value)}
//         />
//         <button onClick={login}>Submit</button>
//       </div>

//       <div>
//         <h1>Get Started</h1>
//         <button onClick={getUser}>Submit</button>
//         {data ? <h1>Welcome Back {data.username}</h1> : null}
//       </div>
//     </div>
//   );
// }

// export default App;
