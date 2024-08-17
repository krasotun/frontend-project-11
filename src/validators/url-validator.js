import { string, object, url } from "yup";
import { haveFeed } from "../view/watcher";
import i18next from "i18next";

export default () => {
  return object({
    url: string()
      .url(i18next.t("urlError"))
      .test("notUniq", i18next.t("notUniqError"), (feed) => {
        return haveFeed(feed);
      }),
  });
};
