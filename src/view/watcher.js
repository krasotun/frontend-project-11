import onChange from "on-change";
import { v4 as uuidv4 } from "uuid";
import state from "../model/state";
import addUrlFormFeedbackRenderer from "../components/add-url-form-feedback";
``;
import feedsRenderer from "../components/feeds";
``;
import axios from "axios";
import urlInterceptor from "../shared/url-interceptor";
import domParser from "../shared/dom-parser";

const watcher = onChange(state, (path, value) => {
  if (path === "addFeedForm.errors") {
    addUrlFormFeedbackRenderer(value);
  }

  if (path === "feeds") {
    feedsRenderer(value);
  }
});

const addFeed = (url) => {
  axios
    .get(urlInterceptor(url))
    .then((response) => {
      const id = uuidv4();
      const { contents } = response.data;
      const { feedTitle, feedDescription } = domParser(contents);
      const feed = { id, feedTitle, feedDescription };

      watcher.feeds.push(feed);
    })
    .catch((error) => console.log(error));
};
const cleanErrors = () => (watcher.addFeedForm.errors = []);
const addErrors = (errors) => (watcher.addFeedForm.errors = errors);
const haveFeed = (url) => !watcher.feeds.some((feed) => feed.url === url);

export { watcher, addFeed, cleanErrors, addErrors, haveFeed };
