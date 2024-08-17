export const addUrlFormErrorRenderer = (errors) => {
  const errorContainareEl = document.querySelector("p.feedback");
  errorContainareEl.textContent = "";

  const inputContainer = document.querySelector('input[id="url-input"]');
  inputContainer.classList.remove("is-invalid");

  if (errors.length) {
    const errorText = errors.join("; ");
    errorContainareEl.textContent = errorText;
    inputContainer.classList.add("is-invalid");
  }
};
