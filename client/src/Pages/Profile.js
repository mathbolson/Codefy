import React, { Component } from "react";
//import { render } from "react-dom";
import $ from "jquery";
import api from "../Util/api"
class Profile extends Component {
    componentDidMount() {
        api.getCurrentUser().then(user => {console.log(user)})
        // $("#btnSubmit").on('click', function() {
        //     console.log("cherries")
        //     $.post("http://localhost:4000/addQuestion",
        //     {
        //         question: "Donald Duck",
        //         answer: "Duckburg"
        //     },
        //     function(data, status){
        //       alert("Data: " + data + "\nStatus: " + status);
        //     });
        //   });

        $(document).ready(function() {
            $.getJSON('http://localhost:4000/questionsAndAnswers', function(res) {
                //console.log(res);
                for (let i = 0; i < res.length; i++) {
                    $("#questionList").append('<div class="question" id="question' + i + '">' + res[i].question + '</div><button class="revealAnswer" id="revealAnswer' + i + '">Get Answer</button>');
                };
            });

            $(document).on('click','.revealAnswer', function(event) {
                $.getJSON('http://localhost:4000/questionsAndAnswers', function(res) {
                    let questionNumber = event.target.id.replace("revealAnswer", "");
                    let answer = res[questionNumber].answer;
                    if (res[questionNumber].answer === undefined) {
                        answer = "No Answer Yet!";
                    }
                    $('#' + event.target.id).after('<p>' + answer + '</p>');
                });
            }); 
        
        });
    } 
    //Diogo
    handleSubmit= event =>{
        api.logOut().then (user => {
            window.location.href="/"
         })
    }
    render () {
        return ( 
           <div>
           <br></br>

         {/* Diogo   */}
           <div className="header">
                <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
                    <a className="pure-menu-heading" href="" >CODEFY</a>
                    <button className="logOutBtn pure-button-primary" onClick={this.handleSubmit}>Log Out</button>
                </div>
            </div>
           
           <div className="pure-menu-heading" style={{textAlign: "center"}}><h2>Welcome to Codefy 
                      {this.props.location.state.username} </h2></div>
           
           
           
           
           
           
           <h1> Submit Questions  </h1>
           <h3>This is a form so you can add your question and answer!</h3>
          <form id="formAddUser" name="adduser" method="post" action="http://localhost:4000/addQuestion">
            <input id="inputUserEmail" type="text" placeholder="Insert Coding Question" name="question" />
            <input id="addAnswer" type="text" placeholder="Add Answer" name="answer" />                 <button id="btnSubmit" type="submit">Submit</button>
            </form>
            <br></br>
            <h2>Question List</h2>
            <div id="questionList">
            
            </div>



           </div>
           
        );
    }

}
    
 

    // return (
    //     <div>
    //              <h1>Submit Question</h1>
    //          <form id="formAddUser" name="adduser" method="post" action="/adduser">
    //             <input id="inputUserEmail" type="text" placeholder="Insert Coding Question" name="username" />
    //             <input id="addAnswer" type="text" placeholder="Add Answer" name="answer" />
    //              <button id="btnSubmit" type="submit">Submit</button>
    //         </form>
    //         <div id="allQuestions">
    //             <button id="testButton">hide</button>

    //         </div>
    //     </div> 
        
    // );
// }

export default Profile;