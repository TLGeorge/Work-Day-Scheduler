//Display current date in Jumbotron
function setDateTime() {
    var dateTimeP = $("#currentDay");

    const today = moment();
    dateTimeP.text(today.format("dddd" + ", " + "MMMM" + " " + "DD" + ", " + "YYYY"));
}
setDateTime();

//Variables for each hour, input and button on Scheduler

var Activity9am = $("#9amActivity");
var save9am = $("#save9am");
var Activity10am = $("#10amActivity");
var save10am = $("#save10am");
var Activity11am = $("#11amActivity");
var save11am = $("#save11am");
var Activity12pm = $("#12pmActivity");
var save12pm = $("#save12pm");
var Activity1pm = $("#1pmActivity");
var save1pm = $("#save1pm");
var Activity2pm = $("#2pmActivity");
var save2pm = $("#save2pm");
var Activity3pm = $("#3pmActivity");
var save3pm = $("#save3pm");
var Activity4pm = $("#4pmActivity");
var save4pm = $("#save4pm");
var Activity5pm = $("#5pmActivity");
var save5pm = $("#save5pm");
var Activity8pm = $("#8pmActivity");
var save8pm = $("#save8pm");
var Activity9pm = $("#9pmActivity");
var save9pm = $("#save9pm");

//save button to input info into rows
$(".saveBtn").on(".click", function (event) {
    //keeps information from clearing after page refresh
    event.preventDefault();
    //when save button is clicked, the value of the textarea is saved
    var textArea = $(this).parent(".btnBg").siblings("textarea").val();
    var key = $(this).attr("id");

    console.log(textArea);

    localStorage.setItem(key, textArea);

});

//Add user's input to form via local storage
$("#9amActivity").val(localStorage.getItem("save9am"));
$("10amActivity").val(localStorage.getItem("save10am"));
$("#11amActivity").val(localStorage.getItem("save11am"));
$("#12pmActivity").val(localStorage.getItem("save12pm"));
$("#1pmActivity").val(localStorage.getItem("save1pm"));
$("#2pmActivity").val(localStorage.getItem("save2pm"));
$("#3pmActivity").val(localStorage.getItem("save3pm"));
$("#4pmActivity").val(localStorage.getItem("save4pm"));
$("#5pmActivity").val(localStorage.getItem("save5pm"));
$("#8pmActivity").val(localStorage.getItem("save8pm"));
$("#9pmActivity").val(localStorage.getItem("save9pm"));

//Change color on form based on time: past/present/future 

function updateBg() {
    var currentHour = moment().hours();
    $(".row").each(function () {
        var blockHour = parseInt($(this).attr("id"));
        if (blockHour < currentHour) {
            $(this).addClass("past");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");

        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
            console.log("future")
        }

    });
}
updateBg();
