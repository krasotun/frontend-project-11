import { addErrors, addUrlToFeeds, cleanErrors } from "../view/watcher";

export default (event, urlValidationSchema) => {
  event.preventDefault();
  const urlInput = event.target.querySelector("input");
  const url = urlInput.value;
  urlValidationSchema
    .validate({ url })
    .then(({ url }) => {
      addUrlToFeeds(url);
      cleanErrors();
      urlInput.value = "";
      urlInput.focus();
    })
    .catch(({ errors }) => addErrors(errors));
};
