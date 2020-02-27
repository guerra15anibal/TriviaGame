$(document).ready(function () {

    var myQuestions = [
        {
            questions: "What is Colorado's State animal?",
            answers: [
                "Rocky Moutian Goat",
                "Big Foot",
                "Ovis Canadensis",
                "Moose"
            ],
            correctAnswer: "Ovis Canadensis"
        },
        {
            questions: "What is Colorado's State fish?",
            answers: [
                "Rainbow Trout",
                "Great White Shark",
                "Lake Trout",
                "Greenback Cutthroat Trout"
            ],
            correctAnswer: "Greenback Cutthroat Trout"
        },
        {
            questions: "What is Colorado's State song?",
            answers: [
                "Where the Columbine's Grow",
                "Oh Colorado!",
                "I'ev Been Working on the Railroad",
                "Baby Got Back"
            ],
            correctAnswer: "Where the Columbine's Grow"
        },
        {
            questions: "What is Colorado's State flower?",
            answers: [
                "Daisy",
                "Columbine",
                "Sunflower",
                "Kush"
            ],
            correctAnswer: "Columbine"
        },
        {
            questions: "What is Colorado's State fruit?",
            answers: [
                "Green Apples",
                "Grapes",
                "Palisade Peach",
                "Oranges"
            ],
            correctAnswer: "Palisade Peach"
        },
        {
            questions: "What is Colorado's most famous Boxer?",
            answers: [
                "Muhammad Ali",
                "Rocky Marciano",
                "Mike Tyson",
                "Jack Dempsey"
            ],
            correctAnswer: "Jack Dempsey"
        }
    ];

    var corret = [];
    var incorrect = [];
    let counter = 30;

    function startQuiz() {
        timer = setInterval(countdown, 1000);
        $(".timeLeft").prepend(
            "<h2>Time Left: <span id='time-left'>30</span> Seconds</h2>"
        )
        for (let i = 0; i < myQuestions.length; i++) {
            $(".questions").append("<h2>" + myQuestions[i].questions + "</h2>")

            for (let j = 0; j < myQuestions[i].answers.length; j++) {
                $(".questions").append("<input type='radio' name='question-" + i + "'value='" + myQuestions[i].answers[j] + "''>" + myQuestions[i].answers[j])

            }

        }
    }
    startQuiz();
    function countdown() {
        counter--;
        $("#time-left").text(counter);
        if (counter == 0) {
            gameOver();
        }
    }
    $(document).on("click", "#submit", function () {
        console.log("submit btn click")
        gameOver();

    })
    function gameOver() {
        var inputs = $(".questions").children("input:checked");
        console.log(inputs)
        for (let i = 0; i < inputs.length; i++) {
            if ($(inputs[i]).val() === myQuestions[i].correctAnswer) {
                corret++;
                console.log(corret);
            }
            else {
                incorrect++;
                console.log(incorrect)
            }

        }
        displayResults();
    }
    function displayResults() {
        console.log("display results functions")
        clearInterval(timer);
        $(".questions").html("<h2>Results </h2>");
        $(".questions").append("<h3> Correct Answers: " + corret + "</h3>")
        $(".questions").append("<h3> InCorrect Answers: " + incorrect + "</h3>")
    }


});