export default ({ tagName, classNames, textContent, children = [] }) => {
  const renderEl = ({ tagName, classNames, textContent, children }) => {
    const el = document.createElement(tagName);
    if (classNames) {
      classNames.forEach((className) => el.classList.add(className));
    }

    if (textContent) {
      el.textContent = textContent;
    }

    if (children.length) {
      children.forEach((child) => {
        const { tagName, classNames, textContent, children = [] } = child;
        const childEl = renderEl({
          tagName,
          classNames,
          textContent,
          children,
        });
        el.append(childEl);
      });
    }

    return el;
  };

  return renderEl({ tagName, classNames, textContent, children });
};
