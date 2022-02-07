$(document).ready(function(){
  let $currentQuestion = 1;
  let $techCount = 0;
  let $processCount = 0;
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
  $("#tech-page").hide();
  $("#people-page").hide();
  $("#process-page").hide();
  $("#tech-process-page").hide();
  $("#tech-people-page").hide();
  $("#process-people-page").hide();
  $("#consultant-page").hide();
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
      updateScore($questionValue)
    }

    $("#question10").hide();
    $("#finish-button").hide();

    if ($techCount >= 8) {
      $("#tech-page").show();
    }

    if ($processCount >= 8) {
      $("#process-page").show();
    }

    if ($peopleCount >= 8) {
      $("#people-page").show();
    }

    if (($techCount >= 5 && $processCount >= 3) || ($processCount >= 5 && $techCount >= 3)) {
      $("#tech-process-page").show();
    }

    if (($techCount >= 5 && $peopleCount >= 3) || ($peopleCount >= 5 && $techCount >= 3)) {
      $("#tech-people-page").show();
    }

    if (($peopleCount >= 5 && $processCount >= 3) || ($processCount >= 5 && $peopleCount >= 3)) {
      $("#process-people-page").show();
    }

    if ($peopleCount === 4 && $processCount === 3 && $techCount === 3) {
      $("#consultant-page").show();
    }

    if ($processCount === 4 && $peopleCount === 3 && $techCount === 3) {
      $("#consultant-page").show();
    }

    if ($techCount === 4 && $processCount === 3 && $peopleCount === 3) {
      $("#consultant-page").show();
    }
  });

  $("#next-button").click(function (){
    const $question = "question" + $currentQuestion;
    $("#"+$question+"").hide();

    const $nextQuestionNumber = $currentQuestion + 1
    const $nextQuestion = "question" + $nextQuestionNumber;
    $currentQuestion = $nextQuestionNumber;

    if ($currentQuestion === 10) {
      $("#next-button").hide();
      $("#finish-button").show();
    }

    $("#"+$nextQuestion+"").show();
  })

  function updateScore($questionValue) {
    if ($questionValue === "1") {
      $techCount += 1;
    }

    if ($questionValue === "2") {
      $processCount += 1;
    }

    if ($questionValue === "3") {
      $peopleCount += 1;
    }
  }
});