import onChange from "on-change";
import state from "../model/state";
import { addUrlFormErrorRenderer } from "./renderers/add-url-form-error-renderer";

export const watcher = onChange(state, (path, value) => {
  if (path === "addFeedForm.errors") {
    addUrlFormErrorRenderer(value);
  }
});

export const addUrlToFeeds = (url) => watcher.feeds.push(url);
export const cleanErrors = () => (watcher.addFeedForm.errors = []);
export const addErrors = (errors) => (watcher.addFeedForm.errors = errors);
export const haveFeed = (url) => !watcher.feeds.includes(url);
