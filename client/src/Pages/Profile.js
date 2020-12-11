import React, { Component } from "react";
import { render } from "react-dom";
import "../Styles/profile.css";
import $ from "jquery";
import ProfilePageHeader from "../Components/ProfilePageHeader";
import logo from "../Util/images/joe-gardner-2.jpg";
import api from "../Util/api" //Diogo
// import Button from "@material-ui/core/Button";

class Profile extends Component {
    componentDidMount() {
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
        api.getCurrentUser().then(user => {console.log(user)})

        $(document).ready(function() {
            $.getJSON('http://localhost:4000/questionsAndAnswers', function(res) {

                $('#filterBtn').on('click', function() {
                   // console.log(res)
                    let tagInput = $("#inputFilterTag").val();
                    console.log(tagInput);
                    for (let i = 0; i < res.length; i++) {
                        if (res[i].tag) {
                            console.log(res[i].tag);
                            if (res[i].tag !== tagInput) {
                             //  console.log(res[i]);         	
                                $( "#fullQuestionAnswer" + i ).remove();
                            }
                        };
                    }
                });


                //console.log(res);
                for (let i = 0; i < res.length; i++) {
                    $("#questionList").append('<div id="fullQuestionAnswer' + i +'"><div class="question" id="question' + i + '">' + res[i].question + '</div> <div class="tag" id="tag"' + i + '>Tag: ' + res[i].tag + '<button class="revealAnswer" id="revealAnswer' + i + '">Get Answer</button></div>');
                };
            });

            $(document).on('click','.revealAnswer', function(event) {
                $.getJSON('http://localhost:4000/questionsAndAnswers', function(res) {
                    let questionNumber = event.target.id.replace("revealAnswer", "");
                    let answer = res[questionNumber].answer;

                    if (res[questionNumber].answer === undefined) {
                        answer = "No Answer Yet!";
                    }
                    $('#' + event.target.id).after('<div>' + answer + '</div>' + "<input id='tagInput' type='text' placeholer='Add new tags' name='tags'></input>" + "<button id='tagBtn' class='btn btn-default' action='http://localhost:4000/questionsAndAnswers' type='submit'> Add tags! </button> " + "<button id='likesBtn' action='http://localhost:4000/questionsAndAnswers' type='submit' class='btn btn-success'> Like </button>" + "<button id='dislikeBtn' action='http://localhost:4000/questionsAndAnswers' type='submit'class='btn btn-danger' > Dislike </button>");
                });
            }); 
            $('#filterDateBtn').on('click', function(event) {
                window.location.href = "/profile";
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
                    <a className="pure-menu-heading" href="#">CODEFY</a>
                    <button className="logOutBtn pure-button-primary" onClick={this.handleSubmit}>Log Out</button>
                </div>
            </div>
            
           <div id="container">
           <ProfilePageHeader />
           <div className="section profile-content">
           <div className="pure-menu-heading" style={{textAlign: "center"}}><h2>Welcome {""} 
           {this.props.location.state ? this.props.location.state.username : ""} </h2></div>
           <div className="owner">
            <div className="avatar">
            <img src={logo} class="rounded-circle" id="profilePic" alt="Cinque Terre"/>
            </div>
            <div className="name">
              <h4 className="title">
                Jane Faker <br />
              </h4>
              <h6 className="description">Web Developer</h6>
            </div>
          </div>


           <br></br>
            <div id="submitBox">
            <h1> Submit Questions  </h1>
            <h5>This is a form so you can add your question and answer and tags so others can get woke!</h5>

             <form id="formAddUser" name="adduser" method="post" action="http://localhost:4000/addQuestion">

            <div class="form-group">
            <label for="questionInp">Write your interview question</label>
            <input id="inputUserEmail" type="text" class="form-control" placeholder="Insert Coding Question" name="question" />
            </div>

            <div class="form-group">
             <label for="answerInp">This is YOUR answer</label>
             <input id="addAnswer" type="text" class="form-control" placeholder="Add Answer" name="answer"/>
            </div>

            <div class="form-group">
             <label for="tagInp">Tag your question</label>
             <input id="inputUserTag" type="text" class="form-control" placeholder="Insert Tags" name="tag"/>
            </div>
            <button id="btnSubmit" type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>

            <br></br>

            <h1>Filter questions by</h1>
            <h5>Look for questions based on Date(most recent added), Most Liked and look up by Tags</h5>
            <div id="filterBox">
            <button id="filterDateBtn" type="submit" class="btn btn-default">Most Recent</button>
            <button id="filterMostLikedBtn" type="submit" class="btn btn-default">Most Liked</button>
            <input id="inputFilterTag" type="text" placeholder="Insert Tag" name="tagFilter" />
            <button id="filterBtn" type="submit" class="btn btn-default">Search</button>
            </div>

            <br></br>
            
            <div id="questionList">
            <h1>Question List</h1>
            </div>
           


            </div>
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