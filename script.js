// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentHour = dayjs().hour();

$(document).ready(function(){
  //get current date and time using Day.js
  const currentDate = dayjs().format('dddd, MMMM D, YYYY');
  $('#currentDay').text(currentDate);

// Create time blocks for standard business hours (9-5)
var workHours = Array.from({length: 9}, (_, index) => index + 9 );
console.log(workHours);
var workHour = [];

workHours.forEach( (hour) =>{
  if (hour <= 12 ){
     workHour.push(hour); 
  } else{
    workHour.push(hour - 12);
  }
});
console.log( "workHour = " + workHour);


//Creates variable to get current time 
var currentHour = dayjs().hour(); 
console.log(currentHour);

// Creating variables for each time block
const hourNine = $("#hour-9");
const hourTen = $("#hour-10");
const hourEleven = $("#hour-11");
const hourTwelve = $("#hour-12");
const hourThirteen = $("#hour-13");
const hourFourteen = $("#hour-14");
const hourFifteen = $("#hour-15");
const hourSixteen = $("#hour-16");
const hourSeventeen = $("#hour-17");
const btnIcon = $("<i>").addClass("fas fa-save");
btnIcon.ariaHidden = "true"; //setAttribute("ariaHidden", "true");  // add: aria-hidden ="true"


})  

// select all time block divs
var timeBlock = document.getElementsByClassName('time-block');
console.log("timeBlock: " + timeBlock );

function timeBlockIndicator(){
  
  // iterate through each div
  for ( var i = 0; i < timeBlock.length; i++){

    var divi = timeBlock[i];
    // identify each time blokc div and isolate their id
    var divid = divi.id;
    console.log ("divid: " + divid);
    
    var timeKey = parseInt(divid.split("-")[1]);
    console.log("time key: " + timeKey);
    
    // check compare number in id to current hour
    
    if (timeKey < currentHour ){
      $(divi).addClass("past");
    }else if (timeKey == currentHour){
      $(divi).addClass("present");
    }else{
      $(divi).addClass("future");
    }
  }


}
timeBlockIndicator();

$('.btn').on("click", function(event){
  event.preventDefault();
  var parentEl = ''; // the div containing the button
  var iconSelected = event.target; // Could be the icon or the button, if statemt willl decide
  //console.log("iconSelected: " + iconSelected); // [object HTMLButtonElement]
  var txtArea;


  // if statement to trigger selection of the buttons pertaining div element 
  if (iconSelected.tagName == "I"){
    parentEl = $(iconSelected).parent().parent();
    //console.log('parentEl: ' + parentEl);
    txtArea = $(iconSelected).parent().prev().val();
  }else {
    parentEl = $(iconSelected).parent() ;
    txtArea = $(iconSelected).prev().val();
  }
  //console.log("icon selected: " + iconSelected); [object HTMLButtonElement]
  console.log("textArea: " + txtArea); 
  console.log('parentEl: ' + JSON.stringify(parentEl));

  // Get the id of the parentEl and set it as a key in local storage
  var divIdd = $(parentEl).attr("id");
  console.log('divIdd: ' + divIdd);
  localStorage.setItem(divIdd, txtArea);

  // gets value from local storage and stores that into txtAreaContent
  txtAreaContent = localStorage.getItem(divIdd);

  $(txtArea).val(localStorage.getItem(divIdd));

  console.log('txtAreaContent: ' + txtAreaContent); // string entered into txtArea
  console.log('CurrentTxtArea: ' + txtArea);

  var storageKeys;



});

/*$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});*/
