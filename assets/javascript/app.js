
//Variable that will hold our setInterval that runs the timer for 120 seconds
var intervalId;
//set our counter to 120
var counter = 10;
console.log(counter);
//start time to countdown when the page is running
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
//decrement function and display countdown
function decrement() {
    counter--;
    $("#timer-number").html(counter);
    if (counter == 0) {
        stop()
    }
}
run();
//stop interval when counter hits 0
function stop() {
    clearInterval(intervalId);
}