function searchQuestions() {
  const query = document.getElementById("search").value.toLowerCase();
  const questions = document.querySelectorAll("#questionList li");
  questions.forEach((question) => {
    const text = question.textContent.toLowerCase();
    if (text.includes(query)) {
      question.style.display = "";
    } else {
      question.style.display = "none";
    }
  });
}
