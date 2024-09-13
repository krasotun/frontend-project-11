export default (data) => {
  const parser = new DOMParser();
  try {
    const doc = parser.parseFromString(data, "text/xml");

    const feedTitle = doc.querySelector("channel > title").textContent;
    const feedDescription = doc.querySelector(
      "channel > description"
    ).textContent;

    return { feedTitle, feedDescription };
  } catch (error) {
    console.log("parsingError", error);
  }
};
