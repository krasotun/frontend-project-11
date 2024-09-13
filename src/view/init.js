import i18next from "i18next";
import addUrlFormSubmitHandler from "../controllers/add-url-form-submit-handler";
import createValidationSchema from "../shared/url-validator";
import ru from "../i18n/ru";

export default () => {
  i18next.init({
    lng: "ru",
    resources: ru,
  });

  const form = document.querySelector(".rss-form");
  form.addEventListener("submit", () => {
    addUrlFormSubmitHandler(event, createValidationSchema());
  });
};
