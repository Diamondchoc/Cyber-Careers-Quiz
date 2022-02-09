$(document).ready(function() {
  let $currentQuestion = 1;
  let $techCount = 0;
  let $processCount = 0;
  let $peopleCount = 0;
  let $startAgain = false;

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
  $("#start-again").hide();

  $("#start-button").click(function() {
    $("#welcome-page").hide();
    $("#question1").fadeIn();
    $("#next-button").fadeIn();
    $('#next-button').prop('disabled', true);
    $('#finish-button').prop('disabled', true);
  });

  $("#finish-button").click(function() {
    for (let count = 1; count <= 10; count++) {
      const $questionNumber = "question" + count.toString();
      const $questionValue = $('input[name="'+ $questionNumber +'"]:checked').val();
      updateScore($questionValue)
    }

    $("#question10").hide();
    $("#finish-button").hide();

    determineCareer($techCount, $processCount, $peopleCount);

    $startAgain = true;

    if ($startAgain) {
      $("#start-again").fadeIn();
    }
  });

  $("#start-again").click(function () {
    $currentQuestion = 1;
    $techCount = 0;
    $processCount = 0;
    $peopleCount = 0;
    $startAgain = false;

    deselectAllAnswers();
    hideAllOutcomePages();

    $('#start-again').hide();
    $("#welcome-page").fadeIn();
  })

  function deselectAllAnswers() {
    $('.form-check-input').prop('checked', false);
  }

  function hideAllOutcomePages() {
    $("#tech-page").hide();
    $("#process-page").hide();
    $("#people-page").hide();
    $("#tech-process-page").hide();
    $("#tech-people-page").hide();
    $("#process-people-page").hide();
    $("#consultant-page").hide();
  }

  $("#next-button").click(function () {
    const $question = "question" + $currentQuestion;
    $("#"+$question+"").hide();

    const $nextQuestionNumber = $currentQuestion + 1
    const $nextQuestion = "question" + $nextQuestionNumber;
    $currentQuestion = $nextQuestionNumber;

    if ($currentQuestion === 10) {
      $("#next-button").hide();
      $("#finish-button").fadeIn();
      $('#finish-button').prop('disabled', true);
    }

    $("#"+$nextQuestion+"").fadeIn();
    $('#next-button').prop('disabled', true);
  });

  $(".form-check").change(function () {
    $('#next-button').prop('disabled', false);
    $('#finish-button').prop('disabled', false);
  });

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

  function determineCareer($techCount, $processCount, $peopleCount) {
    if (($techCount >= 8)
      || ($techCount === 6 && $processCount === 2 && $peopleCount === 2)
      || ($techCount === 7 && $processCount === 2 && $peopleCount === 1)
      || ($techCount === 7 && $processCount === 1 && $peopleCount === 2)) {
      $("#tech-page").fadeIn();
    }

    if (($processCount >= 8)
      || ($techCount === 2 && $processCount === 6 && $peopleCount === 2)
      || ($techCount === 2 && $processCount === 7 && $peopleCount === 1)
      || ($techCount === 1 && $processCount === 7 && $peopleCount === 2)) {
      $("#process-page").fadeIn();
    }

    if (($peopleCount >= 8)
      || ($techCount === 2 && $processCount === 2 && $peopleCount === 6)
      || ($techCount === 2 && $processCount === 1 && $peopleCount === 7)
      || ($techCount === 1 && $processCount === 2 && $peopleCount === 7)) {
      $("#people-page").fadeIn();
    }

    if (($techCount >= 5 && $processCount >= 3) || ($processCount >= 5 && $techCount >= 3)) {
      $("#tech-process-page").fadeIn();
    }

    if (($techCount >= 5 && $peopleCount >= 3) || ($peopleCount >= 5 && $techCount >= 3)) {
      $("#tech-people-page").fadeIn();
    }

    if (($peopleCount >= 5 && $processCount >= 3) || ($processCount >= 5 && $peopleCount >= 3)) {
      $("#process-people-page").fadeIn();
    }

    if (($peopleCount === 4 && $processCount === 3 && $techCount === 3)
      || ($processCount === 4 && $peopleCount === 3 && $techCount === 3)
      || ($techCount === 4 && $processCount === 3 && $peopleCount === 3)) {
      $("#consultant-page").fadeIn();
    }
  }
});