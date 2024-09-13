import { string, object } from "yup";

import urlInterceptor from "../shared/url-interceptor";
import { haveFeed } from "../view/watcher";
import i18next from "i18next";
import axios from "axios";

export default () => {
  return object({
    url: string()
      .url(i18next.t("urlError"))
      .test("notUniq", i18next.t("notUniqError"), (url) => {
        return haveFeed(url);
      })
      .test("notFeed", i18next.t("notFeedError"), (url) => {
        return axios.get(urlInterceptor(url)).then((response) => {
          return response.data.status.content_type.startsWith(
            "application/rss+xml"
          );
        });
      }),
  });
};
