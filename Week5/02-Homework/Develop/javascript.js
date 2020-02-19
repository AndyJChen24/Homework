// get date and year 
var m = moment();
// set format for date
var date = m.format('MMM Do YYYY');
//set date to header
$("#currentDay").text(date)

$(document).ready(function(){
    onLoad();
})



// get button click
$(".saveBtn").on("click", function(){
    // get user input for plans for that time
    var plans = $(this).prev().val();
    // point to the sibling element 
    var keyPointer = $(this).siblings()[0];
    // set the text inside sibling element as the key to local storage
    var key = $(keyPointer).attr("id");
    console.log(key)
    // saved plans to local storage
    localStorage.setItem(key, JSON.stringify(plans))
})


// called this function to load all user plans from local memory to screen
function onLoad(){
    // created an array for all the times on the planner because this program used the time as a key
    var timeblock = ["9AM", "10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM"]
    // for each time on the planner 
    $.each(timeblock, function(index,value){
        // get the what user store into local memery
        items = JSON.parse(localStorage.getItem(value))
        // put the value inside that key on the text blocks
        $("#"+ value).next().text(items);
    })
}