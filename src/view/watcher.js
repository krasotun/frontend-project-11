import onChange from "on-change";
import state from "../model/state";
import addUrlFormFeedbackRenderer from "./renderers/add-url-form-feedback-renderer";

const watcher = onChange(state, (path, value) => {
  if (path === "addFeedForm.errors") {
    addUrlFormFeedbackRenderer(value);
  }
});

const addUrlToFeeds = (url) => watcher.feeds.push(url);
const cleanErrors = () => (watcher.addFeedForm.errors = []);
const addErrors = (errors) => (watcher.addFeedForm.errors = errors);
const haveFeed = (url) => !watcher.feeds.includes(url);

export { watcher, addUrlToFeeds, cleanErrors, addErrors, haveFeed };
