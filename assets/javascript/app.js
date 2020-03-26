//variable array of simpsons questions and answers
var simpsonsTriv = 
[
    {
        question: "Who founded Springfield?",
        choices: ["Abraham Simpson", "Jebediah Springfield", "Hans Springfield", "Abraham Lincoln"],
        answer: 1
    },
    {
        question: "Who owns the Kwik-E-Mart?",
        choices: ["Homer Simpson", "Ned Flanders", "Apu Nahasapeenmapetilon", "Moe Seyslak"],
        answer: 2
    }, 
    {
        question: "What is Homers favorite beer?", 
        choices: ["DUFF", "Malk", "Fudd Beer", "Flaming Moe"],
        answer: 0
    }, 
    {
        question: "What is the name of Mr. Burns' assistant?", 
        choices: ["Seymour Skinner", "Barnard Gumble", "Waylon Smithers", "Carl Carlson"],
        answer: 2
    }, 
    {
        question: "What did Homer give to Marge for their wedding anniversary in season 24?",
        choices: ["Diamond ring and earrings", "A box of donuts", "A dozen of roses", "A miniature Train"],
        answer: 3
    }, 
    {
        question: "What is Barts and Lisa's favortie cartoon show?" ,
        choices: ["Itchy & Scratchy", "Tom & Jerry", "Pink Panther", "Tiny Toon"],
		answer: 0
	},
	{
		question: "Who has tried many times to kill Bart?",
		choices: ["Sideshow Mel", "Krusty", "Sideshow Bob", "Ned Flanders"],
		answer: 2
	},
	{
		question: "Who is the news reporter for channel six?",
		choices: ["Kent Brockman", "Bumblebee Man", "Krusty", "Homer"],
		answer: 0
	},
	{
		question: "The simpsons live on the following street...",
		choices: ["Woodview Terrace", "Pine Tree Terrace", "State Street", "Evergreen Terrace"],
		answer: 3	
    }];


//Variable that will hold our setInterval that runs the timer for 120 seconds
var intervalId;
//set our counter to 120
var counter = 60;
var running = false;
var choiceArray = [];
var incorrectNumber = 0;
var correctNumber = 0;
var unAns = 0;
var correctAnswer = '';
var userChoice = '';

//click to start
$("#start").on("click", function() {
    $("#start").hide();
    run();
    decrement();
	display();
	doneButton();
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
	var displayQuest = $('#question-one');
	var answers = $('.answer-check');

	displayQuest.append('<h2>These are the questions, Good luck, Have fun!</h2>');
	for (var i = 0; i < simpsonsTriv.length; i++) {
		displayQuest.append('<div id="questions"><br><strong>' + simpsonsTriv[i].question + '</strong></br></div>');

		var choicesOne = simpsonsTriv[i].choices[0];
		var choicesTwo = simpsonsTriv[i].choices[1];
		var choicesThree = simpsonsTriv[i].choices[2];
		var choicesFour = simpsonsTriv[i].choices[3];
		console.log('This choice ' + choicesOne);
		// displayQuest.append(`<div class="answer-check"><input class="answerInput" value=${0} type="radio" name="radio-group${i}" id="radio${i}"><label class="answer-checklabel" id="radio${i} label" for="radio'+i+'">${choicesOne}</label></div>`);
		displayQuest.append(
			'<div class="answer-check"><input class="answerInput" value=' +
				0 +
				' type="radio" name=' +
				i +
				' id="radio' +
				i +
				'"><label class="answer-checklabel" id="radio' +
				i +
				'label" for="radio' +
				i +
				'">' +
				choicesOne +
				'</label></div>'
		);
		displayQuest.append(
			'<div class="answer-check"><input class="answerInput" value=' +
				1 +
				' type="radio" name=' +
				i +
				' id="radio' +
				i +
				'"><label class="answer-checklabel" id="radio' +
				i +
				'label" for="radio' +
				i +
				'">' +
				choicesTwo +
				'</label></div>'
		);
		displayQuest.append(
			'<div class="answer-check"><input class="answerInput" value=' +
				2 +
				' type="radio" name=' +
				i +
				' id="radio' +
				i +
				'"><label class="answer-checklabel" id="radio' +
				i +
				'label" for="radio' +
				i +
				'">' +
				choicesThree +
				'</label></div>'
		);
		displayQuest.append(
			'<div class="answer-check"><input class="answerInput" value=' +
				3 +
				' type="radio" name=' +
				i +
				' id="radio' +
				i +
				'"><label class="answer-checklabel" id="radio' +
				i +
				'label" for="radio' +
				i +
				'">' +
				choicesFour +
				'</label></div>'
		);
	}
	$(".finishBtn").on("click", function() {
		checkAnswers();
		stop();
		endResults();
	})	
}
//Check if answers are correct, incorrect, add missed questions to incorrect

function checkAnswers() {
	for (var i = 0; i < simpsonsTriv.length; i++) {
		correctAnswer = simpsonsTriv[i].answer;
		console.log('THis is the correct answer ' + correctAnswer);

		userChoice = $('input[name="' + i + '"]:checked').val();
		// $("input[name='gender']:checked").val();
		console.log('THis is the userchoice ' + userChoice);
		if (userChoice == correctAnswer) {
			correctNumber++;
		} else if (userChoice == '') {
			unAns++;
		} else if (userChoice !== correctAnswer || userChoice == undefined) {
			incorrectNumber++;
		}
	}

	endResults();
}
function doneButton() {
	$("#done-btn").empty();
	var newButton = $("<button>");
	newButton.addClass("finishBtn");
	newButton.text("Done!");
	$("#done-btn").append(newButton);

}
//after counter ends show hidden results page
function endResults() {
	$('#results').show();
	$('#question-one').empty();
	$('#timer-number').empty();
	$('#here-text').text('Here are the results:');
	$('#correct-score').text('Your correct answers!: ' + correctNumber);
	$('#incorrect-score').text('Wrong answers: ' + incorrectNumber);
	
}
$(document).on("click", ".finishBtn", endResults);