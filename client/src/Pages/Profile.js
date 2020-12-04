import React, { Component } from "react";
import { render } from "react-dom";
import $ from "jquery";

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

        $( document ).ready(function() {
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
    } render () {
        return ( 
           <div>
           <br></br>
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