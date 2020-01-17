// this is a self-invoking anonymous function
// also called an IIFE
// also called a module (its a pattern)

(() => {
// for ex. python = print('whatever');
  console.log('hello from JS!');

// find the elements in the document
  let toggleButton = document.querySelector(".switch-text"),
      myHeading = document.querySelector('h1'),
      //svgImg = document.querySelector("#badge"),
      allSVGs = document.querySelectorAll(".svg");

// this function should change the heading text
  function changeText() {
    myHeading.textContent = "What is up? I am script";
  }

// this function should log the ID for each SVG to the console
  function logSVG() {
    console.log(this.id);
  }
// things a user can do to make stuff happen on a page
  toggleButton.addEventListener("click", changeText);

  //svgImg.addEventListener("click", logSVG);
  //svgImg2.addEventListener("click", logSVG);

  allSVGs.forEach(item => item.addEventListener("click", logSVG));

// document.querySelector('h1').textContent = "What is up? I am script";
})();
