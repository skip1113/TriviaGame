//variable array of simpsons questions and answers
var simpsonsTriv = [{
    question: "Who founded Springfield?",
    choices: ["Abraham Simpson", "Jebediah Springfield", "Hans Springfield", "Abraham Lincoln"],
    validAnswer: 1
}, {
    question: "Who owns the Kwik-E-Mart?",
    choices: ["Homer Simpson", "Ned Flanders", "Apu Nahasapeenmapetilon", "Moe Seyslak"],
    validAnswer: 2
}, {
    question: "What is Homers favorite beer?",
    choices: ["DUFF", "Malk", "Fudd Beer", "Flaming Moe"],
    validAnswer: 0
}, {
    question: "What is the name of Mr. Burns' assistant?",
    choices: ["Seymour Skinner", "Barnard Gumble", "Waylon Smithers", "Carl Carlson"],
    validAnswer: 2
}, {
    question: "What did Homer give to Marge for their wedding anniversary in season 24?",
    choices: ["Diamond ring and earrings", "A box of donuts", "A dozen of roses", "A miniature Train"],
    validAnswer: 3
}, {
    question: "What is Barts and Lisa's favortie show?",
    choices: ["Itchy & Scratchy", "Tom & Jerry", "Pink Panther", "Tiny Toon"],
    validAnswer: 0
}]
//correct, incorrect, and unanswered questions
var correctAns = 0;
var incorrectAns = 0;
var unAns = 0;
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