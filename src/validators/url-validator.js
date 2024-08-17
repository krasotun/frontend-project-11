import { string, object, url } from "yup";
import { haveFeed } from "../view/watcher";

export const urlValidationSchema = object({
  url: string()
    .url("Ссылка должна быть валидным URL")
    .test("uniq", "RSS уже существует", (feed) => {
      return haveFeed(feed);
    }),
});
