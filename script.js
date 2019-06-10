function proccessor(result){
    console.log(result);
}

function search(){
    var id = document.getElementById("categoryNumber").value;
    //array of topics and equivalent number []
    var categoryNumbers = [11,12,21,22];
    var difficulty = document.getElementById("level").value;
    //var categories = ["film", "music", "science", "geography"];

    var urlVariable = 'https://opentdb.com/api.php?amount=10&category=' + categoryNumbers[id] + '&difficulty=' + difficulty + '&type=boolean';
    console.log(urlVariable);
    $.ajax({
        url: urlVariable,
        type: 'GET',
        crossDomain: true,
        dataType: 'json',
        success: function(result) {
            console.log(result);
            go(result) },
        error: function() { alert('Failed!'); }
    });
}

//var numOfQuestionsChosen = document.getElementById("numberOfQuestions").value;
//console.log(numOfQuestionsChosen);

function go(result) {
//    var json = JSON.parse(result);
    questions = result.results;
    console.log(questions);

    $("#tableOne").find("td").remove();

    for (var i = 0; i < questions.length; i++) {
        $("#tableOne").append("<tr id = 'row'>" +
            "<td>" + questions[i].question+ "<td><input type=\"radio\" name = 'answer"  + i + "'>False</input></td>\n" +
            "<td><input type=\"radio\" name = 'answer1" + i + "'>True</input></td></td></tr>")

    }
    $("#tableOne").css("display", "inline-block");
}

$('input[name=Choose]').attr('checked',false);

function trueOrFalse() {
    $(".gridBtns").click(function() {

        var clickedNumber = this.value;

        $('.answerBtns').each(function (index) {
            if (index < clickedNumber)
                $(this).show();
            else
                $(this).hide();
        });

        if (this.id == 'btnTrueorFalse') {
            $('#answerTrue').show();
            $('#answerFalse').show();
        }
    })
}

var answers = "<table id='answersTable' cellpadding='10'>";

function gradeTrivia(){
    //iterate over questions
    for(var i = 0; i < questions.length; i++){
        if(correct_answer = "true"){
            return true;
    }
        if(correct_answer = "false"){
            return false;
        }
    }
    //correct answer
    //make new array with each correct answer
    //make another array of user inputed answers

    // use $('input[name=name_of_your_radiobutton]:checked').val();  to get the value of the
    $('input[name= answer0]:checked').val();
    // user answer0, answer1, answer2 etc....questions.length

    //finally compare the two arrays
}

function finishAndGrade (){
 }

//function displayAnswers(){
  //  var answers =




