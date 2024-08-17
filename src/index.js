import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

import addUrlFormSubmitHandler from "./controllers/add-url-form-submit-handler";

const form = document.querySelector(".rss-form");

form.addEventListener("submit", addUrlFormSubmitHandler);
