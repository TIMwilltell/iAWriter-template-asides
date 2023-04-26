window.addEventListener("load", () => {
  var processAside = function () {
    const types = ["tip", "warning", "caution", "important", "note"];
    const typeSymbol = [
      {
        tip: "\u{ea80}",
        warning: "\u{e7ba}",
        important: "\u{e946}",
        note: "\u{e783}",
        caution: "\u{ea39}",
      },
    ];

    // Loop through each type
    types.forEach((type) => {
      const elements = document.querySelectorAll(`${type}`);

      // Loop through each element
      elements.forEach((element) => {
        // Create a new aside element for each element
        const aside = document.createElement("aside");
        aside.classList.add(`${type}`);

        // Replace the tip element with the new aside element
        element.parentNode.replaceWith(aside);

        // Insert the tip content into the aside element
        aside.innerHTML = element.innerHTML;

        // Create a new span element for the symbol
        const symbol = document.createElement("span");
        symbol.classList.add(`${type}-symbol`);
        symbol.textContent = typeSymbol[0][type] + "\u{0020}";

        // Create a new span element for the text
        const text = document.createElement("span");
        text.classList.add(`${type}-text`);
        text.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)}: `;

        // Insert the new symbol and text elements before the existing content
        element.insertAdjacentElement("afterbegin", symbol);
        element.insertAdjacentElement("afterbegin", text);

        // Combine the new symbol, text, and original content into a new string
        const newContent = symbol.outerHTML + text.outerHTML + aside.innerHTML;

        // Set the innerHTML of the tip element to the new content
        aside.innerHTML = newContent;
      });
    });
  };

  function $(selector, context) {
    return (context || document).querySelector(selector);
  }

  function $$(selector, context) {
    return (context || document).querySelectorAll(selector);
  }

  // hljs.configure({
  //   languageDetect: false,
  // })
  // hljs.highlightAll();

  // test conditional code highlighting
  function highlightCode() {
    // Set all pre > code blocks with a class name equal to a variable
    // to a new class name that starts with "language-"
    // and then add the new class name to the code block
    // while skipping any without a class name
    var codeBlocks = $$("pre > code[class]");
    for (var i = 0; i < codeBlocks.length; i++) {
      var className = codeBlocks[i].className;
      if (className !== null && className !== "") {
        var newClassName = "language-" + className;
        codeBlocks[i].classList.replace(className, newClassName);
      }
    }

  // highlight all code blocks with a class name that starts with "language-"
  var blocks = $$(`pre > code[class^="language-"]`);
  for (var i = 0; i < blocks.length; i++) {
    hljs.highlightElement(blocks[i]);
  }
}

  // OG code highlighting
  // function highlightCode() {
  //   // highlight all code blocks with the class of the language
  //   var blocks = $$(`pre > code[class^="${classLang}"]`);
  //   console.log(blocks.length);
  //   for (var i = 0; i < blocks.length; i++) {
  //     hljs.highlightElement(blocks[i]);
  //   }
  // }

  var refresh = function () {
    processAside();
    highlightCode();
  };
  //refresh()
  document.body.addEventListener("ia-writer-change", refresh);
  refresh();
});
