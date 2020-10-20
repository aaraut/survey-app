import { Component, OnInit } from '@angular/core';
import * as Survey from "survey-angular";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  constructor() {}
  ngOnInit() {
    const surveyJSON = {
      "title":"American History",
      "showProgressBar":"bottom",
      "showTimerPanel":"top",
      "maxTimeToFinishPage":10,
      "maxTimeToFinish":30,
      "firstPageIsStarted":true,
      "startSurveyText":"Start Quiz",
      "pages":[
         {
            "questions":[
               {
                  "type":"html",
                  "html":"You are about to start quiz by history. <br/>You have 10 seconds for every page and 25 seconds for the whole survey of 3 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
               }
            ]
         },
         {
            "questions":[
               {
                  "type":"radiogroup",
                  "name":"civilwar",
                  "title":"When was the Civil War?",
                  "choices":[
                     "1750-1800",
                     "1800-1850",
                     "1850-1900",
                     "1900-1950",
                     "after 1950"
                  ],
                  "correctAnswer":"1850-1900"
               }
            ]
         },
         {
            "questions":[
               {
                  "type":"radiogroup",
                  "name":"libertyordeath",
                  "title":"Who said 'Give me liberty or give me death?'",
                  "choicesOrder":"random",
                  "choices":[
                     "John Hancock",
                     "James Madison",
                     "Patrick Henry",
                     "Samuel Adams"
                  ],
                  "correctAnswer":"Patrick Henry"
               }
            ]
         },
         {
            "maxTimeToFinish":15,
            "questions":[
               {
                  "type":"radiogroup",
                  "name":"magnacarta",
                  "title":"What is the Magna Carta?",
                  "choicesOrder":"random",
                  "choices":[
                     "The foundation of the British parliamentary system",
                     "The Great Seal of the monarchs of England",
                     "The French Declaration of the Rights of Man",
                     "The charter signed by the Pilgrims on the Mayflower"
                  ],
                  "correctAnswer":"The foundation of the British parliamentary system"
               }
            ]
         }
      ],
      "completedHtml":"<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
   }

    

    // var survey = new Survey.Model(surveyJSON);
    // survey.onComplete.add(this.sendDataToServer);
    // Survey.SurveyWindowNG.render("surveyElement", {model:survey});

    var survey = new Survey.Model(surveyJSON);
    survey.onComplete.add(this.sendDataToServer);
    survey.firstPageIsStarted = true;
    survey.startSurveyText = "Click to start my Quiz";
    survey.showPrevButton = false;
    Survey.StylesManager.applyTheme("bootstrap");
    Survey.SurveyNG.render("surveyResult2", {model:survey});
  }

  sendDataToServer(ev){
    console.log('called')
  }
}
