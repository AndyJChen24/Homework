// get date and year 
var m = moment();
// set format for date
var date = m.format('MMM Do YYYY');
//set date to header
$("#currentDay").text(date)

$(document).ready(function(){
    

})



// get button click
$(".saveBtn").on("click", function(){
    console.log("is been clicked")
    console.log(this)

    // get user input for plans for that time
    var plans = $(this).prev().val();
    // point to the sibling element 
    var keyPointer = $(this).siblings()[0];
    // set the text inside sibling element as the key to local storage
    var key = $(keyPointer).text();
    // saved plans to local storage
    localStorage.setItem(key, JSON.stringify(plans))
})
    
