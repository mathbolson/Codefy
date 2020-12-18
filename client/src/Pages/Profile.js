import React, { Component } from "react";
import { render } from "react-dom";
import "../Styles/profile.css";
import $ from "jquery";
import ProfilePageHeader from "../Components/ProfilePageHeader";
import logo from "../Util/images/profilepicd.png";
import api from "../Util/api" ;//Diogo
import Footer from "../Components/Footer";
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


            $.getJSON('/api/questionsAndAnswers', function(res) {

                $('#filterBtn').on('click', function() {
                   // console.log(res)
                    let tagInput = $("#inputFilterTag").val();
                    console.log(tagInput);
                    console.log(res);
                    for (let i = 0; i < res.length; i++) {
                        console.log(res[i].tag);
                        if (false === res[i].tag.includes(tagInput)) {
                            //  console.log(res[i]);   
                            $( "#fullQuestionAnswer" + i ).remove();
                        }
                    }
                });

                $("#questionList").empty();

                //console.log(res);
                for (let i = 0; i < res.length; i++) {
                    $("#questionList").append('<div class="fullQuestions" id="fullQuestionAnswer' + i +'"><div className="question" id="question' + i + '">Question: ' + res[i].question + '<div class="tag" id="tag"' + i + '>Tag: ' + res[i].tag + '</div><button class="revealAnswer" data-id="'+i+'" id="revealAnswer' + i + '">Get Answer</button><div id="results'+i+'"></div></div>');
                };
            });

            let container = $("#container");
            let divList = document.getElementsByClassName("fullQuestions");
            console.log(divList)
            $(document).on('click','#filterMostLikedBtn', function(event) {
                console.log(divList.length)

            });

            $(document).on('click','.tagBtn', function(event) {
                // $.getJSON('/api/getSpecificQuestion', function(res) {
                //     console.log(res);
                // });

                //console.log(event.target.parentElement.firstChild.data)
                let question = event.target.parentElement.firstChild.data.replace("Question: ", "");
                //console.log(question);

                //console.log(event.target.parentElement.id)
                let questionNumber = event.target.parentElement.id.replace("question", "");
                console.log(questionNumber)

                let newTag = $("#tagInput" + questionNumber).val();
                console.log(newTag);

                let oldTag = event.target.parentElement.firstElementChild.innerHTML.replace("Tag: ", "");

                // console.log(newTag)
                $.ajax({
                    url: "/api/updateQuestionsAndAnswers",
                    method: 'PUT',
                    dataType: 'json',
                    data: {"question": question, "tag": oldTag + ', ' + newTag},
                    success: function (data) {
                        console.log(data);
                        
                      }
                })
                window.location.href = "/profile";
            });

            $(document).on('click','.revealAnswer', function(event) {

                $.getJSON('/api/questionsAndAnswers', function(res) {
                    let questionNumber = event.target.id.replace("revealAnswer", "");
                    let answer = res[questionNumber].answer;
                 let id = $(this).attr("data-id")
                 console.log("id", questionNumber)

                    if (res[questionNumber].answer === undefined) {
                        answer = "No Answer Yet!";
                    }
                    $('#' + event.target.id).after('<pre class="answerReveal">' + answer + '</pre>' + "<input id='tagInput" + questionNumber +  "'type='text' placeholder='Add new tags' name='tags'></input><button id='tagBtn' class='btn btn-default tagBtn' type='submit'> Add tags! </button><button id='likesBtn' action='/api/questionsAndAnswers' type='submit' class='btn btn-success'><span class='glyphicon glyphicon-thumbs-up'></span> Like <i class='fa fa-thumbs-o-up'></i></button>");

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
           
           <div className="section profile-content">
           <div className="pure-menu-heading" style={{textAlign: "center"}}><h2>Welcome {""} 
           {this.props.location.state ? this.props.location.state.username : ""} </h2></div>
           <div className="owner">
            <div className="avatar">
            <img src={logo} className="rounded-circle" id="profilePic" alt="Cinque Terre"/>
            </div>
            <div className="name">
              <h4 className="title">
                Diogo Candido <br />
              </h4>
              <h6 className="description">Web Developer</h6>
            </div>
          </div>


           <br></br>
            <div id="submitBox">
            <h1> Submit Questions  </h1>
            <h5>This is a form so you can add your question and answer and tags so others can get woke!</h5>

             <form id="formAddUser" name="adduser" method="post" action="/api/addQuestion">

            <div className="form-group">
            <label for="questionInp">Write your interview question</label>
            <pre>
                <code>
            <textarea id="inputUserEmail" type="text" className="form-control" placeholder="Insert Coding Question" name="question" />
            </code>
            </pre>
            </div>

            <div className="form-group">
             <label for="answerInp">This is YOUR answer</label>
             <textarea id="addAnswer" type="text" className="form-control" placeholder="Add Answer" name="answer"/>
            </div>

            <div className="form-group">
             <label for="tagInp">Tag your question</label>
             <input id="inputUserTag" type="text" className="form-control" placeholder="Insert Tags" name="tag"/>
            </div>
            <button id="btnSubmit" type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>

            <br></br>

            <h1>Filter questions by</h1>
            <h5>Look for questions based on Date(most recent added), Most Liked and look up by Tags</h5>
            <div id="filterBox">
            <button id="filterDateBtn" type="submit" className="btn btn-default">Most Recent</button>
            <button id="filterMostLikedBtn" type="submit" className="btn btn-default">Most Liked</button>
            <input id="inputFilterTag" type="text" placeholder="Insert Tag" name="tagFilter" />
            <button id="filterBtn" type="submit" className="btn btn-default">Search</button>
            </div>

            <br></br>
            
            <div id="questionList">
            <h1>Question List</h1>
            </div>
           
            
            
            </div>
            
           </div>
           <Footer />
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