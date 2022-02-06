$(document).ready(function(){
  let $currentQuestion = 1;
  let $techCount = 0;
  let $processesCount = 0;
  let $peopleCount = 0;

  $("#next-button").hide();
  $("#question1").hide();
  $("#question2").hide();
  $("#question3").hide();
  $("#question4").hide();
  $("#question5").hide();
  $("#question6").hide();
  $("#question7").hide();
  $("#question8").hide();
  $("#question9").hide();
  $("#question10").hide();
  $("#finish-button").hide();

  $("#start-button").click(function(){
    $("#welcome-page").hide();
    $("#question1").show();
    $("#next-button").show();
    // $('#next-button').prop('disabled', true);
  });

  $("#finish-button").click(function(){
    for (let count = 1; count <= 10; count++) {
      const $questionNumber = "question" + count.toString();
      const $questionValue = $('input[name="'+ $questionNumber +'"]:checked').val();
      calculateScore($questionValue)
    }
  });

  $("#next-button").click(function (){
    const $question = "question" + $currentQuestion;
    $("#"+$question+"").hide();

    const $nextQuestionNumber = $currentQuestion + 1
    const $nextQuestion = "question" + $nextQuestionNumber;
    $currentQuestion = $nextQuestionNumber;

    if ($currentQuestion ===  10) {
      $("#next-button").hide();
      $("#finish-button").show();
    }

    $("#"+$nextQuestion+"").show();
  })

  function calculateScore($questionValue) {
    if ($questionValue === "1") {
      $techCount + 1;
    }

    if ($questionValue === "2") {
      $processesCount + 1;
    }

    if ($questionValue === "3") {
      $peopleCount + 1;
    }
  }
});