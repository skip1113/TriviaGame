//variable array of simpsons questions and answers
var simpsonsTriv = 
[
    {
        question: "Who founded Springfield?",
        choices: ["Abraham Simpson", "Jebediah Springfield", "Hans Springfield", "Abraham Lincoln"],
        answer: "Jebediah Springfield"
    },
    {
        question: "Who owns the Kwik-E-Mart?",
        choices: ["Homer Simpson", "Ned Flanders", "Apu Nahasapeenmapetilon", "Moe Seyslak"],
        answer: "Apu Nahasapeenmapetilon"
    }, 
    {
        question: "What is Homers favorite beer?", 
        choices: ["DUFF", "Malk", "Fudd Beer", "Flaming Moe"],
        answer: "DUFF"
    }, 
    {
        question: "What is the name of Mr. Burns' assistant?", 
        choices: ["Seymour Skinner", "Barnard Gumble", "Waylon Smithers", "Carl Carlson"],
        answer: "Waylon Smithers"
    }, 
    {
        question: "What did Homer give to Marge for their wedding anniversary in season 24?",
        choices: ["Diamond ring and earrings", "A box of donuts", "A dozen of roses", "A miniature Train"],
        answer: "A miniature Train"
    }, 
    {
        question: "What is Barts and Lisa's favortie cartoon show?" ,
        choices: ["Itchy & Scratchy", "Tom & Jerry", "Pink Panther", "Tiny Toon"],
        answer: "Itchy & Scratchy"
    }];


//Variable that will hold our setInterval that runs the timer for 120 seconds
var intervalId;
//set our counter to 120
var counter = 50;
var running = false;
var choiceArray = [];

//click to start
$("#start").on("click", function() {
    $("#start").hide();
    run();
    decrement();
    display();
})
//start time to countdown when the page is running

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
//decrement function and display countdown
function decrement() {
    counter--;
    $("#timer-number").html("Time Remaining: " + counter);
    
    if (counter == 0) {
        checkAnswers();
        stop()
        endResults();
    }
}

//stop interval when counter hits 0
function stop() {
    clearInterval(intervalId);
}
//display trvia questions and answers with radio buttons
function display() {
    var displayQuest = $("#question-one");
    var answers = $(".answer-check");
    
    displayQuest.append("<h2>These are the questions, Good luck, Have fun!</h2>");
    for (var i = 0; i < simpsonsTriv.length; i++) {
        displayQuest.append('<div id="questions"><br><strong>' + simpsonsTriv[i].question + '</strong></br></div>');

        var choicesOne = simpsonsTriv[i].choices[0];
        var choicesTwo = simpsonsTriv[i].choices[1];
        var choicesThree = simpsonsTriv[i].choices[2];
        var choicesFour = simpsonsTriv[i].choices[3];
        displayQuest.append('<div class="answer-check"><input class="answerInput" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="answer-checklabel" id="radio'+i+'label" for="radio'+i+'">' + choicesOne + '</label></div>');
        displayQuest.append('<div class="answer-check"><input class="answerInput" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="answer-checklabel" id="radio'+i+'label" for="radio'+i+'">' + choicesTwo + '</label></div>');
        displayQuest.append('<div class="answer-check"><input class="answerInput" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="answer-checklabel" id="radio'+i+'label" for="radio'+i+'">' + choicesThree + '</label></div>');
        displayQuest.append('<div class="answer-check"><input class="answerInput" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="answer-checklabel" id="radio'+i+'label" for="radio'+i+'">' + choicesFour + '</label></div>');
    }
}
//Check if answers are correct, incorrect, or missed
function checkAnswers() {
    var correctAnswer;
    var correctNumber = 0;
    var incorrectNumber = 0;
    var unAns = 0;
    var userChoice;
    for (var i = 0; i < simpsonsTriv.length; i++) {
        correctAnswer = simpsonsTriv[i].answer;
        console.log(correctAnswer);
        userChoice = $('form input[type=radio]:checked').text();
        console.log(userChoice);
        if (userChoice === correctAnswer) {
            correctNumber++;
        }else if (userChoice === "") {
            unAns++;
        } else if (userChoice !== correctAnswer) {
            incorrectNumber++;
        }
        endResults(correctNumber, incorrectNumber, unAns);
    }
}
//after counter ends show hidden results page
function endResults(correctNumber, incorrectNumber, unAns) {
    $("#results").show();
    $("#question-one").empty();
    $("#timer-number").empty();
    $("#here-text").text("Here are the results:");
    $("#correct-score").text("Your correct answers!: " + correctNumber);
    $("#incorrect-score").text("Wrong answers: " + incorrectNumber);
    $("#unanswered-score").text("Unanswered questions: " + unAns);
}