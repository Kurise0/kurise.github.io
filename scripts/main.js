const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/001.jpg") {
    myImage.setAttribute("src", "images/002.jpg");
  } else {
    myImage.setAttribute("src", "images/001.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Climbing is cool, ${myName}`;
  }
}
myButton.onclick = function () {
  setUserName();
};

