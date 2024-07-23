var quiz = {
    "JS": [
        {
            "id": 1,
            "question": "What is the primary goal of data analysis?",
            "options": [
                {
                    "a": "Data collection",
                    "b": "Data visualization",
                    "c": "Extracting useful insights from data",
                    "d": "Data storage"
                }
            ],
            "answer": "Extracting useful insights from data",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": "Which of the following is NOT a common data analysis tool?",
            "options": [
                {
                    "a": "Excel",
                    "b": "Python",
                    "c": "PowerPoint",
                    "d": "R"
                }
            ],
            "answer": "PowerPoint",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": "Which data type represents categorical or qualitative data?",
            "options": [
                {
                    "a": "Integer",
                    "b": "Float",
                    "c": "String",
                    "d": "Boolean"
                }
            ],
            "answer": "String",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": "What is the purpose of data cleansing in data analysis?",
            "options": [
                {
                    "a": "To remove all data",
                    "b": "To aggregate data",
                    "c": "To clean the physical data storage",
                    "d": "To correct or remove inaccuracies in data"
                }
            ],
            "answer": "To correct or remove inaccuracies in data",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "Which statistical measure describes the average of a set of values?",
            "options": [
                {
                    "a": "Variance",
                    "b": "Median",
                    "c": "Mode",
                    "d": "Mean"
                }
            ],
            "answer": "Mean",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": "In a box plot, which component represents the median of the data?",
            "options": [
                {
                    "a": "Whiskers",
                    "b": "Box",
                    "c": "Outliers",
                    "d": "Middle line"
                }
            ],
            "answer": "Middle line",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": "What type of data analysis technique is used to discover patterns or relationships in data?",
            "options": [
                {
                    "a": "Descriptive analysis",
                    "b": "Inferential analysis",
                    "c": "Exploratory analysis",
                    "d": "Predictive analysis"
                }
            ],
            "answer": "Exploratory analysis",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "In a correlation coefficient, a value of 0 indicates:",
            "options": [
                {
                    "a": "No correlation",
                    "b": "Strong positive correlation",
                    "c": "Strong negative correlation",
                    "d": "Perfect positive correlation"
                }
            ],
            "answer": "No correlation",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "What is the purpose of data sampling in data analysis?",
            "options": [
                {
                    "a": "To manipulate data",
                    "b": "To visualize data",
                    "c": "To select a representative subset of data",
                    "d": "To clean data"
                }
            ],
            "answer": "To select a representative subset of data",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "Which data visualization is best for displaying the distribution of a continuous variable?",
            "options": [
                {
                    "a": "Pie chart",
                    "b": "Scatter plot",
                    "c": "Histogram",
                    "d": "Bar chart"
                }
            ],
            "answer": "Histogram",
            "score": 0,
            "status": ""
        },
    ]
}

var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = quiz.JS.length;
    var requiredScore = 7
    var currentLevel = 0;
    this.displayQuiz = function (cque) {
    this.currentque = cque;
    if (this.currentque < totalque) {
    $("#tque").html(totalque);
    $("#previous").attr("disabled", false);
    $("#next").attr("disabled", false);
    $("#qid").html(quiz.JS[this.currentque].id + '.');
    $("#question").html(quiz.JS[this.currentque].question);
    $("#question-options").html("");
    for (var key in quiz.JS[this.currentque].options[0]) {
    if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
    $("#question-options").append(
    "<div class='form-check option-block'>" +
    "<label class='form-check-label'>" +
    "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
    quiz.JS[this.currentque].options[0][key] +
    "</span></label>"
    );
    }
    }
    }
    if (this.currentque <= 0) {
    $("#previous").attr("disabled", true);
    }
    if (this.currentque >= totalque) {
    $('#next').attr('disabled', true);
    for (var i = 0; i < totalque; i++) {
    this.score = this.score + quiz.JS[i].score;
    }
    return this.showResult(this.score);
    }
    }
    this.showResult = function (scr) {
    $("#result").addClass('result');
    $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
    for (var j = 0; j < totalque; j++) {
    var res;
    if (quiz.JS[j].score == 0) {
    res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
    } else {
    res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
    }
    $("#result").append(
    '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
    '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
    '<div class="last-row"><b>Score:</b> &nbsp;' + res +
    '</div>'
    );
    }
    }
    this.checkAnswer = function (option) {
    var answer = quiz.JS[this.currentque].answer;
    option = option.replace(/</g, "&lt;") //for <
    option = option.replace(/>/g, "&gt;") //for >
    option = option.replace(/"/g, "&quot;")
    if (option == quiz.JS[this.currentque].answer) {
    if (quiz.JS[this.currentque].score == "") {
    quiz.JS[this.currentque].score = 1;
    quiz.JS[this.currentque].status = "correct";
    }
    } else {
    quiz.JS[this.currentque].status = "wrong";
    }
    }
    this.changeQuestion = function (cque) {
    this.currentque = this.currentque + cque;
    this.displayQuiz(this.currentque);
    }
    }
    var jsq = new quizApp();
    var selectedopt;
    $(document).ready(function () {
    jsq.displayQuiz(0);
    $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
    //var radio = $(this).find('input:radio');
    $(this).prop("checked", true);
    selectedopt = $(this).val();
    });
    });
    $('#next').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(1);
    });
    $('#previous').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(-1);
    });