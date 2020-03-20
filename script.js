var hoursData = {
  '9': '',
  '10': '',
  '11': '',
  '12': '',
  '13': '',
  '14': '',
  '15': '',
  '16': '',
  '17': ''
};

//display current day and time on screen
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

// let currentHour be the hour of the current time of day
var currentHour = parseInt(moment().format("H"));
var timeBlockElements = $(".time-block");

// for each hour
timeBlockElements.each(function () {
  // get the hour of the block
  // get reference to all the hours
  var timeBlockHour = parseInt(this.id.split("-")[1]);

  // how to determine if time is future/present/past
  //if timeblock is less than current hour than change box to color of past css style
  //else if it equals to same time as current then it should change present css style
  //else change time block to future in css
  if (timeBlockHour < currentHour) {
    $(this).addClass("past");

  } else if (timeBlockHour === currentHour) {

    $(this).addClass("present");

  } else {
    $(this).addClass("future");
  }
});
//insert saveBtn to save user input when clicked on
$('.saveBtn').on('click', function () {});
//$(this).attr(id)
//$(this).val()
//$(selector).parent(function)
//$(selector).siblings(function)

  //json stringify set item/ get item 
//create user object from submission with onclick button
//when button is clicked user input should be saved on to local storage
//stores that data by settin it to local storage and saveBtn saves its within display


