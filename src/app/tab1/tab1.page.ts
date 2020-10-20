import { Component, OnInit } from '@angular/core';
import * as Survey from "survey-angular";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor() {}
  ngOnInit() {
    const surveyJSON = {
      "title":"Minimum data reporting form – for suspected and probable cases of COVID-19",
      "pages":[
         {
            "name":"page1",
            "navigationTitle":"Collector",
            "navigationDescription":"Collector's info",
            "elements":[
              
               {
                  "type":"panel",
                  "name":"first_page_container_panel",
                  "elements":[
                     {
                        "type":"text",
                        "name":"unique_case_id_textbox",
                        "startWithNewLine":false,
                        "title":"Unique Case ID / Cluster Number (if applicable):",
                        "inputType":"number",
                        "hideNumber":true
                     },
                     {
                        "type":"panel",
                        "name":"current_status_panel",
                        "elements":[
                           {
                              "type":"boolean",
                              "name":"current_status",
                              "titleLocation":"hidden",
                              "labelTrue":"Alive",
                              "labelFalse":"Dead",
                              "hideNumber":true
                           }
                        ],
                        "title":"Current Status",
                        "showNumber":true
                     },
                     {
                        "type":"panel",
                        "name":"data_collector_information",
                        "elements":[
                           {
                              "type":"text",
                              "name":"name_of_data_collector",
                              "title":"Name of data collector"
                           },
                           {
                              "type":"text",
                              "name":"data_collector_institution",
                              "title":"Data collector Institution"
                           },
                           {
                              "type":"text",
                              "name":"data_collector_telephone_number",
                              "title":"Data collector telephone number",
                              "inputType":"tel"
                           },
                           {
                              "type":"text",
                              "name":"email",
                              "title":"Email",
                              "inputType":"email"
                           },
                           {
                              "type":"text",
                              "name":"form_completion_date",
                              "title":"Form completion date",
                              "inputType":"date"
                           }
                        ],
                        "title":"Data Collector Information",
                        "showNumber":true,
                        "showQuestionNumbers":"off"
                     }
                  ],
                  "startWithNewLine":false
               }
            ]
         },
         {
            "name":"page2",
            "navigationTitle":"Person",
            "navigationDescription":"Person's info",
            "elements":[
               {
                  "type":"boolean",
                  "name":"is_the_person_providing_the_information_is_the_patient",
                  "title":"Is the person providing the information is the patient?",
                  "isRequired":true,
                  "labelTrue":"Yes",
                  "labelFalse":"No",
                  "hideNumber":true
               },
               {
                  "type":"panel",
                  "name":"case_identifier_information ",
                  "elements":[
                     {
                        "type":"text",
                        "name":"given_names",
                        "title":"Given name(s)"
                     },
                     {
                        "type":"text",
                        "name":"family_name",
                        "startWithNewLine":false,
                        "title":"Family name"
                     },
                     {
                        "type":"radiogroup",
                        "name":"case_identifier_information_sex",
                        "startWithNewLine":false,
                        "title":"Sex",
                        "choices":[
                           {
                              "value":"item1",
                              "text":"Male"
                           },
                           {
                              "value":"item2",
                              "text":"Female"
                           },
                           {
                              "value":"item3",
                              "text":"Not known"
                           }
                        ],
                        "colCount":3
                     },
                     {
                        "type":"panel",
                        "name":"case_identifier_information_patient_date_of_birth_panel",
                        "elements":[
                           {
                              "type":"text",
                              "name":"case_identifier_information_patient_date_of_birth_date",
                              "visibleIf":"{case_identifier_information_patient_date_of_birth_checkbox} empty",
                              "titleLocation":"hidden",
                              "inputType":"date"
                           },
                           {
                              "type":"checkbox",
                              "name":"case_identifier_information_patient_date_of_birth_checkbox",
                              "startWithNewLine":false,
                              "titleLocation":"hidden",
                              "choices":[
                                 "Unknown"
                              ]
                           }
                        ],
                        "title":"Date of Birth"
                     },
                     {
                        "type":"text",
                        "name":"case_identifier_information_patient_telephone_mobile_number",
                        "title":"Telephone (mobile) number",
                        "inputType":"tel"
                     },
                     {
                        "type":"panel",
                        "name":"case_identifier_information_patient_age",
                        "elements":[
                           {
                              "type":"text",
                              "name":"case_identifier_information_patient_age_years",
                              "visibleIf":"{case_identifier_information_patient_age_checkbox} empty",
                              "title":"Years:",
                              "titleLocation":"left",
                              "inputType":"number"
                           },
                           {
                              "type":"text",
                              "name":"case_identifier_information_patient_age_months",
                              "visibleIf":"{case_identifier_information_patient_age_checkbox} empty",
                              "startWithNewLine":false,
                              "title":"Months:",
                              "titleLocation":"left",
                              "inputType":"number"
                           },
                           {
                              "type":"checkbox",
                              "name":"case_identifier_information_patient_age_checkbox",
                              "startWithNewLine":false,
                              "titleLocation":"hidden",
                              "choices":[
                                 "Unknown"
                              ]
                           }
                        ],
                        "title":"Age (years, months) "
                     },
                     {
                        "type":"text",
                        "name":"case_identifier_information_patient_email",
                        "title":"Email",
                        "inputType":"email"
                     },
                     {
                        "type":"text",
                        "name":"case_identifier_information_patient_address",
                        "startWithNewLine":false,
                        "title":"Address"
                     },
                     {
                        "type":"text",
                        "name":"case_identifier_information_patient_national_social_number",
                        "startWithNewLine":false,
                        "title":"National social number/ identifier (if applicable)\n"
                     },
                     {
                        "type":"dropdown",
                        "name":"case_identifier_information_patient_country_of_residence",
                        "title":"Country of residence",
                        "choices":[
                           "item1",
                           "item2",
                           "item3"
                        ],
                        "choicesByUrl":{
                           "url":"https://restcountries.eu/rest/v2/all",
                           "valueName":"name"
                        }
                     },
                     {
                        "type":"radiogroup",
                        "name":"case_identifier_information_patient_case_status",
                        "startWithNewLine":false,
                        "title":"Case status",
                        "choices":[
                           {
                              "value":"item1",
                              "text":"Suspected"
                           },
                           {
                              "value":"item2",
                              "text":"Probable"
                           },
                           {
                              "value":"item3",
                              "text":"Confirmed"
                           }
                        ],
                        "colCount":3
                     }
                  ],
                  "visibleIf":"{is_the_person_providing_the_information_is_the_patient} = true",
                  "title":"Case Identifier Information",
                  "showNumber":true,
                  "showQuestionNumbers":"off"
               },
               {
                  "type":"panel",
                  "name":"interview_respondent_information_if_the_persons_providing_the_information_is_not_the_patient",
                  "elements":[
                     {
                        "type":"text",
                        "name":"first_name",
                        "title":"First name "
                     },
                     {
                        "type":"text",
                        "name":"surname",
                        "startWithNewLine":false,
                        "title":"Surname"
                     },
                     {
                        "type":"radiogroup",
                        "name":"interview_respondent_information_sex",
                        "startWithNewLine":false,
                        "title":"Sex",
                        "choices":[
                           {
                              "value":"item1",
                              "text":"Male"
                           },
                           {
                              "value":"item2",
                              "text":"Female"
                           },
                           {
                              "value":"item3",
                              "text":"Not known"
                           }
                        ],
                        "colCount":3
                     },
                     {
                        "type":"panel",
                        "name":"interview_respondent_information_patient_date_of_birth_panel",
                        "elements":[
                           {
                              "type":"text",
                              "name":"interview_respondent_information_patient_date_of_birth_date",
                              "visibleIf":"{interview_respondent_information_patient_date_of_birth_checkbox} empty",
                              "titleLocation":"hidden",
                              "inputType":"date"
                           },
                           {
                              "type":"checkbox",
                              "name":"interview_respondent_information_patient_date_of_birth_checkbox",
                              "startWithNewLine":false,
                              "titleLocation":"hidden",
                              "choices":[
                                 "Unknown"
                              ]
                           }
                        ],
                        "title":"Date of Birth"
                     },
                     {
                        "type":"text",
                        "name":"relationship_to_patient",
                        "title":"Relationship to patient"
                     },
                     {
                        "type":"text",
                        "name":"respondent_address",
                        "startWithNewLine":false,
                        "title":"Respondent address"
                     },
                     {
                        "type":"text",
                        "name":"interview_respondent_information_patient_telephone_mobile_number",
                        "startWithNewLine":false,
                        "title":"Telephone (mobile) number",
                        "inputType":"tel"
                     }
                  ],
                  "visibleIf":"{is_the_person_providing_the_information_is_the_patient} = false",
                  "title":"Interview respondent information",
                  "showNumber":true,
                  "showQuestionNumbers":"off"
               }
            ]
         },
         {
            "name":"page3",
            "navigationTitle":"Symptoms",
            "navigationDescription":"Patient symptoms",
            "elements":[
               {
                  "type":"image",
                  "name":"third_page_image",
                  "imageLink":"/Content/Images/examples/covid/03.png",
                  "imageHeight":690,
                  "imageWidth":500,
                  "width":"600px"
               },
               {
                  "type":"panel",
                  "name":"patient_symptoms_from_disease_onset",
                  "elements":[
                     {
                        "type":"panel",
                        "name":"date_of_first_symptom_onset",
                        "elements":[
                           {
                              "type":"text",
                              "name":"date_of_first_symptom_onset_date",
                              "enableIf":"{date_of_first_symptom_onset_checkbox} empty",
                              "titleLocation":"hidden",
                              "inputType":"date",
                              "width":"314px"
                           },
                           {
                              "type":"checkbox",
                              "name":"date_of_first_symptom_onset_checkbox",
                              "startWithNewLine":false,
                              "titleLocation":"hidden",
                              "choices":[
                                 {
                                    "value":"item1",
                                    "text":"No symptoms",
                                    "enableIf":"{date_of_first_symptom_onset_checkbox} <> ['item2']"
                                 },
                                 {
                                    "value":"item2",
                                    "text":"Unknown",
                                    "enableIf":"{date_of_first_symptom_onset_checkbox} <> ['item1']"
                                 }
                              ],
                              "colCount":2
                           },
                           {
                              "type":"radiogroup",
                              "name":"question1",
                              "title":"Fever (≥38 °C) or history of fever ",
                              "titleLocation":"left",
                              "choices":[
                                 {
                                    "value":"item1",
                                    "text":"Yes"
                                 },
                                 {
                                    "value":"item2",
                                    "text":"No"
                                 },
                                 {
                                    "value":"item3",
                                    "text":"Unknown"
                                 }
                              ],
                              "colCount":3
                           }
                        ],
                        "title":"Date of first symptom onset"
                     },
                     {
                        "type":"radiogroup",
                        "name":"sore_throat",
                        "title":"Sore throat",
                        "titleLocation":"left",
                        "choices":[
                           {
                              "value":"item1",
                              "text":"Yes"
                           },
                           {
                              "value":"item2",
                              "text":"No"
                           },
                           {
                              "value":"item3",
                              "text":"Unknown"
                           }
                        ],
                        "colCount":3
                     },
                     {
                        "type":"radiogroup",
                        "name":"runny_nose",
                        "title":"Runny nose",
                        "titleLocation":"left",
                        "choices":[
                           {
                              "value":"item1",
                              "text":"Yes"
                           },
                           {
                              "value":"item2",
                              "text":"No"
                           },
                           {
                              "value":"item3",
                              "text":"Unknown"
                           }
                        ],
                        "colCount":3
                     },
                     {
                        "type":"radiogroup",
                        "name":"cough",
                        "title":"Cough",
                        "titleLocation":"left",
                        "choices":[
                           {
                              "value":"item1",
                              "text":"Yes"
                           },
                           {
                              "value":"item2",
                              "text":"No"
                           },
                           {
                              "value":"item3",
                              "text":"Unknown"
                           }
                        ],
                        "colCount":3
                     },
                     {
                        "type":"radiogroup",
                        "name":"shortness_of_Breath",
                        "title":"Shortness of Breath",
                        "titleLocation":"left",
                        "choices":[
                           {
                              "value":"item1",
                              "text":"Yes"
                           },
                           {
                              "value":"item2",
                              "text":"No"
                           },
                           {
                              "value":"item3",
                              "text":"Unknown"
                           }
                        ],
                        "colCount":3
                     },
                     {
                        "type":"radiogroup",
                        "name":"vomiting",
                        "title":"Vomiting",
                        "titleLocation":"left",
                        "choices":[
                           {
                              "value":"item1",
                              "text":"Yes"
                           },
                           {
                              "value":"item2",
                              "text":"No"
                           },
                           {
                              "value":"item3",
                              "text":"Unknown"
                           }
                        ],
                        "colCount":3
                     },
                     {
                        "type":"radiogroup",
                        "name":"nausea",
                        "title":"Nausea",
                        "titleLocation":"left",
                        "choices":[
                           {
                              "value":"item1",
                              "text":"Yes"
                           },
                           {
                              "value":"item2",
                              "text":"No"
                           },
                           {
                              "value":"item3",
                              "text":"Unknown"
                           }
                        ],
                        "colCount":3
                     },
                     {
                        "type":"radiogroup",
                        "name":"diarrhea",
                        "title":"Diarrhea",
                        "titleLocation":"left",
                        "choices":[
                           {
                              "value":"item1",
                              "text":"Yes"
                           },
                           {
                              "value":"item2",
                              "text":"No"
                           },
                           {
                              "value":"item3",
                              "text":"Unknown"
                           }
                        ],
                        "colCount":3
                     }
                  ],
                  "title":"Patient symptoms (from disease onset)",
                  "startWithNewLine":false,
                  "showNumber":true,
                  "showQuestionNumbers":"off"
               }
            ]
         },
         {
            "name":"page4",
            "navigationTitle":"Sample",
            "navigationDescription":"Initial sample",
            "elements":[
               {
                  "type":"image",
                  "name":"fouth_page_image",
                  "width":"600px",
                  "imageLink":"/Content/Images/examples/covid/04.png",
                  "imageHeight":567,
                  "imageWidth":500
               },
               {
                  "type":"panel",
                  "name":"initial_sample_collection",
                  "elements":[
                     {
                        "type":"text",
                        "name":"date_respiratory_sample_collected",
                        "title":"Date respiratory sample collected",
                        "inputType":"date"
                     },
                     {
                        "type":"radiogroup",
                        "name":"what_type_of_respiratory_sample_was_collected",
                        "title":"What type of respiratory sample was collected?",
                        "hasOther":true,
                        "choices":[
                           {
                              "value":"item1",
                              "text":"Nasal swab"
                           },
                           {
                              "value":"item2",
                              "text":"Throat swab "
                           },
                           {
                              "value":"item3",
                              "text":"Nasopharyngeal swab"
                           }
                        ],
                        "otherText":"Other, specify",
                        "colCount":2
                     },
                     {
                        "type":"panel",
                        "name":"has_baseline_serum_been_taken_panel",
                        "elements":[
                           {
                              "type":"radiogroup",
                              "name":"has_baseline_serum_been_taken_radio",
                              "titleLocation":"hidden",
                              "choices":[
                                 {
                                    "value":"item1",
                                    "text":"Yes"
                                 },
                                 {
                                    "value":"item2",
                                    "text":"No"
                                 },
                                 {
                                    "value":"item3",
                                    "text":"Unknown"
                                 }
                              ],
                              "colCount":3
                           },
                           {
                              "type":"text",
                              "name":"has_baseline_serum_been_taken_date",
                              "visibleIf":"{has_baseline_serum_been_taken_radio} = 'item1'",
                              "startWithNewLine":false,
                              "title":"Date baseline serum taken",
                              "titleLocation":"left",
                              "inputType":"date"
                           }
                        ],
                        "title":"Has baseline serum been taken?"
                     },
                     {
                        "type":"panel",
                        "name":"were_other_samples_collected_panel",
                        "elements":[
                           {
                              "type":"radiogroup",
                              "name":"were_other_samples_collected_radio",
                              "titleLocation":"hidden",
                              "choices":[
                                 {
                                    "value":"item1",
                                    "text":"Yes"
                                 },
                                 {
                                    "value":"item2",
                                    "text":"No"
                                 },
                                 {
                                    "value":"item3",
                                    "text":"Unknown"
                                 }
                              ],
                              "colCount":3
                           },
                           {
                              "type":"text",
                              "name":"were_other_samples_collected_textbox",
                              "visibleIf":"{were_other_samples_collected_radio} = 'item1'",
                              "startWithNewLine":false,
                              "title":"Which samples:"
                           },
                           {
                              "type":"text",
                              "name":"were_other_samples_collected_date",
                              "visibleIf":"{were_other_samples_collected_radio} = 'item1'",
                              "startWithNewLine":false,
                              "title":"Date taken",
                              "inputType":"date"
                           }
                        ],
                        "title":"Were other samples collected? "
                     }
                  ],
                  "title":"Initial sample collection",
                  "startWithNewLine":false,
                  "showNumber":true,
                  "showQuestionNumbers":"off"
               }
            ]
         },
         {
            "name":"page5",
            "navigationTitle":"Complications",
            "navigationDescription":"Clinical Course",
            "elements":[
               {
                  "type":"image",
                  "name":"fifth_image",
                  "width":"600px",
                  "imageLink":"/Content/Images/examples/covid/05.png",
                  "imageHeight":713,
                  "imageWidth":500
               },
               {
                  "type":"panel",
                  "name":"clinical_course_complications_panel",
                  "elements":[
                     {
                        "type":"panel",
                        "name":"hospitalization_required_panel",
                        "elements":[
                           {
                              "type":"radiogroup",
                              "name":"hospitalization_required_radio",
                              "width":"49%",
                              "titleLocation":"hidden",
                              "choices":[
                                 {
                                    "value":"item1",
                                    "text":"Yes"
                                 },
                                 {
                                    "value":"item2",
                                    "text":"No"
                                 },
                                 {
                                    "value":"item3",
                                    "text":"Unknown"
                                 }
                              ],
                              "colCount":3
                           },
                           {
                              "type":"text",
                              "name":"hospitalization_required_hospital",
                              "enableIf":"{hospitalization_required_radio} = 'item1'",
                              "startWithNewLine":false,
                              "title":"Name of hospital",
                              "width":"313px",
                              "titleLocation":"left"
                           }
                        ],
                        "title":"Hospitalization required?"
                     },
                     {
                        "type":"radiogroup",
                        "name":"icu_Intensive_Care_Unit_admission_required",
                        "title":"ICU (Intensive Care Unit) admission required",
                        "titleLocation":"left",
                        "choices":[
                           {
                              "value":"item1",
                              "text":"Yes"
                           },
                           {
                              "value":"item2",
                              "text":"No"
                           },
                           {
                              "value":"item3",
                              "text":"Unknown"
                           }
                        ],
                        "colCount":3
                     },
                     {
                        "type":"radiogroup",
                        "name":"acute_respiratory_distress_syndrome_ards",
                        "title":"Acute Respiratory Distress Syndrome (ARDS)",
                        "titleLocation":"left",
                        "choices":[
                           {
                              "value":"item1",
                              "text":"Yes"
                           },
                           {
                              "value":"item2",
                              "text":"No"
                           },
                           {
                              "value":"item3",
                              "text":"Unknown"
                           }
                        ],
                        "colCount":3
                     },
                     {
                        "type":"panel",
                        "name":"pneumonia_by_chest_xray_panel",
                        "elements":[
                           {
                              "type":"radiogroup",
                              "name":"pneumonia_by_chest_xray_radio",
                              "width":"49%",
                              "titleLocation":"hidden",
                              "choices":[
                                 {
                                    "value":"item1",
                                    "text":"Yes"
                                 },
                                 {
                                    "value":"item2",
                                    "text":"No"
                                 },
                                 {
                                    "value":"item3",
                                    "text":"Not applicable (no X-ray performed)"
                                 }
                              ],
                              "colCount":3
                           },
                           {
                              "type":"text",
                              "name":"pneumonia_by_chest_xray_date",
                              "enableIf":"{pneumonia_by_chest_xray_radio} = 'item1'",
                              "startWithNewLine":false,
                              "title":"Date",
                              "titleLocation":"left",
                              "width":"313px",
                              "inputType":"date"
                           }
                        ],
                        "title":"Pneumonia by chest X-ray "
                     },
                     {
                        "type":"panel",
                        "name":"other_severe_or_life_threatening_illness_suggestive_of_an_infection_panel",
                        "elements":[
                           {
                              "type":"radiogroup",
                              "name":"other_severe_or_life_threatening_illness_suggestive_of_an_radio",
                              "width":"49%",
                              "titleLocation":"hidden",
                              "choices":[
                                 {
                                    "value":"item1",
                                    "text":"Yes"
                                 },
                                 {
                                    "value":"item2",
                                    "text":"No"
                                 },
                                 {
                                    "value":"item3",
                                    "text":"Unknown"
                                 }
                              ],
                              "colCount":3
                           },
                           {
                              "type":"text",
                              "name":"other_severe_or_life_threatening_illness_suggestive_of_an_specify",
                              "enableIf":"{other_severe_or_life_threatening_illness_suggestive_of_an_radio} = 'item1'",
                              "startWithNewLine":false,
                              "title":"Specify:",
                              "width":"313px",
                              "titleLocation":"left"
                           }
                        ],
                        "title":"Other severe or life-threatening illness suggestive of an infection"
                     },
                     {
                        "type":"radiogroup",
                        "name":"mechanical_ventilation_required",
                        "title":"Mechanical ventilation required",
                        "titleLocation":"left",
                        "choices":[
                           {
                              "value":"item1",
                              "text":"Yes"
                           },
                           {
                              "value":"item2",
                              "text":"No"
                           },
                           {
                              "value":"item3",
                              "text":"Unknown"
                           }
                        ],
                        "colCount":3
                     },
                     {
                        "type":"radiogroup",
                        "name":"extracorporeal_membrane_oxygenation_emo",
                        "title":"Extracorporeal membrane oxygenation (EMO)",
                        "titleLocation":"left",
                        "choices":[
                           {
                              "value":"item1",
                              "text":"Yes"
                           },
                           {
                              "value":"item2",
                              "text":"No"
                           },
                           {
                              "value":"item3",
                              "text":"Unknown"
                           }
                        ],
                        "colCount":3
                     }
                  ],
                  "title":"Clinical Course: Complications",
                  "startWithNewLine":false,
                  "showNumber":true,
                  "showQuestionNumbers":"off"
               }
            ]
         },
         {
            "name":"page6",
            "navigationTitle":"Exposures",
            "navigationDescription":"Before illness",
            "elements":[
               {
                  "type":"panel",
                  "name":"human_exposures_in_the_days_before_illness_onset",
                  "elements":[
                     {
                        "type":"panel",
                        "name":"have_you_travelled_within_the_last_days_domestically_panel",
                        "elements":[
                           {
                              "type":"radiogroup",
                              "name":"have_you_travelled_within_the_last_days_domestically_radio",
                              "width":"50%",
                              "titleLocation":"hidden",
                              "choices":[
                                 {
                                    "value":"item1",
                                    "text":"Yes"
                                 },
                                 {
                                    "value":"item2",
                                    "text":"No"
                                 },
                                 {
                                    "value":"item3",
                                    "text":"Unknown"
                                 }
                              ],
                              "colCount":3
                           },
                           {
                              "type":"panel",
                              "name":"have_you_travelled_within_the_last_days_domestically_date_panel",
                              "elements":[
                                 {
                                    "type":"text",
                                    "name":"have_you_travelled_within_the_last_days_domestically_date_from",
                                    "title":"from",
                                    "titleLocation":"left",
                                    "inputType":"date"
                                 },
                                 {
                                    "type":"text",
                                    "name":"have_you_travelled_within_the_last_days_domestically_date_to",
                                    "startWithNewLine":false,
                                    "title":"to",
                                    "titleLocation":"left",
                                    "inputType":"date"
                                 }
                              ],
                              "visibleIf":"{have_you_travelled_within_the_last_days_domestically_radio} = 'item1'",
                              "title":"Dates of travel"
                           },
                           {
                              "type":"text",
                              "name":"have_you_travelled_within_the_last_days_domestically_regions",
                              "visibleIf":"{have_you_travelled_within_the_last_days_domestically_radio} = 'item1'",
                              "title":"Regions:",
                              "titleLocation":"left"
                           },
                           {
                              "type":"text",
                              "name":"have_you_travelled_within_the_last_days_domestically_cities_visited",
                              "visibleIf":"{have_you_travelled_within_the_last_days_domestically_radio} = 'item1'",
                              "startWithNewLine":false,
                              "title":"Cities visited:",
                              "titleLocation":"left"
                           }
                        ],
                        "title":"Have you travelled within the last 14 days domestically?",
                        "showQuestionNumbers":"off"
                     },
                     {
                        "type":"panel",
                        "name":"have_you_travelled_within_the_last_days_internationall_panel",
                        "elements":[
                           {
                              "type":"radiogroup",
                              "name":"have_you_travelled_within_the_last_days_internationall_radio",
                              "width":"50%",
                              "titleLocation":"hidden",
                              "choices":[
                                 {
                                    "value":"item1",
                                    "text":"Yes"
                                 },
                                 {
                                    "value":"item2",
                                    "text":"No"
                                 },
                                 {
                                    "value":"item3",
                                    "text":"Unknown"
                                 }
                              ],
                              "colCount":3
                           },
                           {
                              "type":"panel",
                              "name":"have_you_travelled_within_the_last_days_internationall_date_panel",
                              "elements":[
                                 {
                                    "type":"text",
                                    "name":"have_you_travelled_within_the_last_days_internationall_date_from",
                                    "title":"from",
                                    "titleLocation":"left",
                                    "inputType":"date"
                                 },
                                 {
                                    "type":"text",
                                    "name":"have_you_travelled_within_the_last_days_internationall_date_to",
                                    "startWithNewLine":false,
                                    "title":"to",
                                    "titleLocation":"left",
                                    "inputType":"date"
                                 }
                              ],
                              "visibleIf":"{have_you_travelled_within_the_last_days_internationall_radio} = 'item1'",
                              "title":"Dates of travel"
                           },
                           {
                              "type":"text",
                              "name":"have_you_travelled_within_the_last_days_internationall_countries",
                              "visibleIf":"{have_you_travelled_within_the_last_days_internationall_radio} = 'item1'",
                              "title":"Countries visited:",
                              "titleLocation":"left"
                           },
                           {
                              "type":"text",
                              "name":"have_you_travelled_within_the_last_days_internationall_cities",
                              "visibleIf":"{have_you_travelled_within_the_last_days_internationall_radio} = 'item1'",
                              "startWithNewLine":false,
                              "title":"Cities visited:",
                              "titleLocation":"left"
                           }
                        ],
                        "title":"Have you travelled within the last 14 days internationally?",
                        "showQuestionNumbers":"off"
                     },
                     {
                        "type":"panel",
                        "name":"in_the_past_days_have_you_had_contact_with_a_anyone_with_suspected_or_confirmed_ncov_infection_panel",
                        "elements":[
                           {
                              "type":"radiogroup",
                              "name":"in_the_past_days_have_you_had_contact_with_a_anyone_with_suspected_or_confirmed_ncov_infection_radio",
                              "width":"50%",
                              "titleLocation":"hidden",
                              "choices":[
                                 {
                                    "value":"item1",
                                    "text":"Yes"
                                 },
                                 {
                                    "value":"item2",
                                    "text":"No"
                                 },
                                 {
                                    "value":"item3",
                                    "text":"Unknown"
                                 }
                              ],
                              "colCount":3
                           },
                           {
                              "type":"text",
                              "name":"in_the_past_days_have_you_had_contact_with_a_anyone_with_suspected_or_confirmed_ncov_infection_date",
                              "enableIf":"{in_the_past_days_have_you_had_contact_with_a_anyone_with_suspected_or_confirmed_ncov_infection_radio} = 'item1'",
                              "startWithNewLine":false,
                              "title":"Date of last contact",
                              "titleLocation":"left",
                              "inputType":"date"
                           }
                        ],
                        "title":"In the past 14 days, have you had contact with a anyone with suspected or confirmed 2019-nCoV infection?",
                        "showQuestionNumbers":"off"
                     },
                     {
                        "type":"panel",
                        "name":"patient_attended_festival_or_mass_gathering_panel",
                        "elements":[
                           {
                              "type":"radiogroup",
                              "name":"patient_attended_festival_or_mass_gathering_radio",
                              "width":"50%",
                              "titleLocation":"hidden",
                              "choices":[
                                 {
                                    "value":"item1",
                                    "text":"Yes"
                                 },
                                 {
                                    "value":"item2",
                                    "text":"No"
                                 },
                                 {
                                    "value":"item3",
                                    "text":"Unknown"
                                 }
                              ],
                              "colCount":3
                           },
                           {
                              "type":"text",
                              "name":"patient_attended_festival_or_mass_gathering_specify",
                              "enableIf":"{patient_attended_festival_or_mass_gathering_radio} = 'item1'",
                              "startWithNewLine":false,
                              "title":"Specify:",
                              "titleLocation":"left"
                           }
                        ],
                        "title":"Patient attended festival or mass gathering",
                        "showQuestionNumbers":"off"
                     },
                     {
                        "type":"radiogroup",
                        "name":"patient_exposed_to_person_with_similar_illness",
                        "title":"Patient exposed to person with similar illness",
                        "width":"50%",
                        "hideNumber":true,
                        "choices":[
                           {
                              "value":"item1",
                              "text":"Yes"
                           },
                           {
                              "value":"item2",
                              "text":"No"
                           },
                           {
                              "value":"item3",
                              "text":"Unknown"
                           }
                        ],
                        "colCount":3
                     },
                     {
                        "type":"radiogroup",
                        "name":"location_of_exposure",
                        "title":"Location of exposure",
                        "width":"50%",
                        "hideNumber":true,
                        "hasOther":true,
                        "choices":[
                           {
                              "value":"item1",
                              "text":"Home"
                           },
                           {
                              "value":"item2",
                              "text":"Hospital"
                           },
                           {
                              "value":"item3",
                              "text":"Workplace"
                           },
                           {
                              "value":"item4",
                              "text":"Tour group"
                           },
                           {
                              "value":"item5",
                              "text":"Unknown"
                           }
                        ],
                        "otherText":"Other, specify:",
                        "colCount":3
                     },
                     {
                        "type":"panel",
                        "name":"patient_visited_or_was_admitted_to_inpatient_health_facility_panel",
                        "elements":[
                           {
                              "type":"radiogroup",
                              "name":"patient_visited_or_was_admitted_to_inpatient_health_facility_radio",
                              "width":"50%",
                              "titleLocation":"hidden",
                              "choices":[
                                 {
                                    "value":"item1",
                                    "text":"Yes"
                                 },
                                 {
                                    "value":"item2",
                                    "text":"No"
                                 },
                                 {
                                    "value":"item3",
                                    "text":"Unknown"
                                 }
                              ],
                              "colCount":3
                           },
                           {
                              "type":"text",
                              "name":"patient_visited_or_was_admitted_to_inpatient_health_facility_specify",
                              "enableIf":"{patient_visited_or_was_admitted_to_inpatient_health_facility_radio} = 'item1'",
                              "startWithNewLine":false,
                              "title":"Specify:",
                              "titleLocation":"left"
                           },
                           {
                              "type":"panel",
                              "name":"patient_visited_outpatient_treatment_facility_panel",
                              "elements":[
                                 {
                                    "type":"radiogroup",
                                    "name":"patient_visited_outpatient_treatment_facility_radio",
                                    "width":"50%",
                                    "titleLocation":"hidden",
                                    "choices":[
                                       {
                                          "value":"item1",
                                          "text":"Yes"
                                       },
                                       {
                                          "value":"item2",
                                          "text":"No"
                                       },
                                       {
                                          "value":"item3",
                                          "text":"Unknown"
                                       }
                                    ],
                                    "colCount":3
                                 },
                                 {
                                    "type":"text",
                                    "name":"patient_visited_outpatient_treatment_facility_specify",
                                    "enableIf":"{patient_visited_outpatient_treatment_facility_radio} = 'item1'",
                                    "startWithNewLine":false,
                                    "title":"Specify:",
                                    "titleLocation":"left"
                                 }
                              ],
                              "title":"Patient visited outpatient treatment facility"
                           },
                           {
                              "type":"panel",
                              "name":"patient_visited_traditional_healer_panel",
                              "elements":[
                                 {
                                    "type":"radiogroup",
                                    "name":"patient_visited_traditional_healer_radio",
                                    "width":"50%",
                                    "titleLocation":"hidden",
                                    "choices":[
                                       {
                                          "value":"item1",
                                          "text":"Yes"
                                       },
                                       {
                                          "value":"item2",
                                          "text":"No"
                                       },
                                       {
                                          "value":"item3",
                                          "text":"Unknown"
                                       }
                                    ],
                                    "colCount":3
                                 },
                                 {
                                    "type":"text",
                                    "name":"patient_visited_traditional_healer_specify",
                                    "enableIf":"{patient_visited_traditional_healer_radio} = 'item1'",
                                    "startWithNewLine":false,
                                    "title":"Specify:",
                                    "titleLocation":"left"
                                 },
                                 {
                                    "type":"panel",
                                    "name":"patient_occupation_specify_location_facility_panel",
                                    "elements":[
                                       {
                                          "type":"checkbox",
                                          "name":"patient_occupation_specify_location_facility_checkbox",
                                          "titleLocation":"hidden",
                                          "hasOther":true,
                                          "choices":[
                                             {
                                                "value":"item1",
                                                "text":"Health care worker"
                                             },
                                             {
                                                "value":"item2",
                                                "text":"Working with animals "
                                             },
                                             {
                                                "value":"item3",
                                                "text":"Health laboratory worker"
                                             },
                                             {
                                                "value":"item4",
                                                "text":"Student"
                                             }
                                          ],
                                          "otherText":"Other, specify:",
                                          "colCount":3
                                       },
                                       {
                                          "type":"text",
                                          "name":"patient_occupation_specify_location_facility_specify",
                                          "visibleIf":"{patient_occupation_specify_location_facility_checkbox} notempty",
                                          "title":"For each occupation, please specify location or facility:",
                                          "titleLocation":"left"
                                       }
                                    ],
                                    "title":"Patient occupation (specify location/facility)",
                                    "showQuestionNumbers":"off"
                                 }
                              ],
                              "title":"Patient visited traditional healer"
                           }
                        ],
                        "title":"Patient visited or was admitted to inpatient health facility",
                        "showQuestionNumbers":"off"
                     }
                  ],
                  "title":"Human exposures in the 14 days before illness onset",
                  "showNumber":true
               }
            ]
         },
         {
            "name":"page7",
            "navigationTitle":"Completion",
            "navigationDescription":"Status of form",
            "elements":[
               {
                  "type":"image",
                  "name":"seventh_image",
                  "width":"600",
                  "imageLink":"/Content/Images/examples/covid/07.png",
                  "imageHeight":441,
                  "imageWidth":500
               },
               {
                  "type":"panel",
                  "name":"status_of_form_completion_panel",
                  "elements":[
                     {
                        "type":"boolean",
                        "name":"status_of_form_completion_boolean",
                        "title":"Form completed",
                        "isRequired":true,
                        "labelTrue":"Yes",
                        "labelFalse":"No or partially"
                     },
                     {
                        "type":"radiogroup",
                        "name":"status_of_form_completion_radio",
                        "visibleIf":"{status_of_form_completion_boolean} = false",
                        "title":"Reason:",
                        "hasOther":true,
                        "choices":[
                           {
                              "value":"item1",
                              "text":"Missed"
                           },
                           {
                              "value":"item2",
                              "text":"Not attempted"
                           },
                           {
                              "value":"item3",
                              "text":"Not performed"
                           },
                           {
                              "value":"item4",
                              "text":"Refusal"
                           }
                        ],
                        "otherText":"Other, specific:"
                     }
                  ],
                  "title":"Status of form completion",
                  "startWithNewLine":false,
                  "showNumber":true,
                  "showQuestionNumbers":"off"
               }
            ]
         }
      ]
   }

    

    // var survey = new Survey.Model(surveyJSON);
    // survey.onComplete.add(this.sendDataToServer);
    // Survey.SurveyWindowNG.render("surveyElement", {model:survey});

    var survey = new Survey.Model(surveyJSON);
    survey.onComplete.add(this.sendDataToServer);
    Survey.StylesManager.applyTheme("bootstrap");
    Survey.SurveyNG.render("surveyElement", {model:survey});
  }

  sendDataToServer(ev){
    console.log('called')
  }
}
