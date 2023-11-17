function toggleAnswer(questionNumber) {
    const answerId = 'answer' + questionNumber;
    const answerElement = document.getElementById(answerId);

    if (answerElement.style.display === 'block') {
      answerElement.style.display = 'none';
    } else {
      answerElement.style.display = 'block';
    }
  }