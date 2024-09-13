import domRenderer from "../shared/dom-renderer";
import i18next from "i18next";

export default (feeds) => {
  const feedsContainerEl = document.querySelector("div.feeds");
  feedsContainerEl.innerHTML = "";

  const cardEl = domRenderer({
    tagName: "div",
    classNames: ["card", "border-0"],
    children: [
      {
        tagName: "div",
        classNames: ["card-body"],
        children: [
          {
            tagName: "h2",
            classNames: ["card-title", "h4"],
            textContent: i18next.t("feeds"),
          },
        ],
      },
    ],
  });

  const feedsListEl = domRenderer({
    tagName: "ul",
    classNames: ["list-group", "border-0", "border-end-0"],
    children: feeds.map((feed) => {
      return {
        tagName: "li",
        classNames: ["list-group-item", "border-0", "border-end-0"],
        children: [
          {
            tagName: "h3",
            classNames: ["h6", "m-0"],
            textContent: feed.feedTitle,
          },
          {
            tagName: "p",
            classNames: ["m-0", "small", "text-black-50"],
            textContent: feed.feedDescription,
          },
        ],
      };
    }),
  });

  cardEl.append(feedsListEl);

  feedsContainerEl.append(cardEl);
};
