export default (feedback, isError = true) => {
  const feedbackContainerEl = document.querySelector("p.feedback");
  feedbackContainerEl.textContent = "";

  if (isError) {
    const inputContainer = document.querySelector('input[id="url-input"]');
    inputContainer.classList.remove("is-invalid");
    if (feedback.length) {
      const errorText = feedback.join("; ");
      feedbackContainerEl.textContent = errorText;
      inputContainer.classList.add("is-invalid");
    }
  } else {
    const errorText = feedback.join("; ");
    feedbackContainerEl.textContent = errorText;
  }
};
