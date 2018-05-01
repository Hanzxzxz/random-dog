let url, type;
let list = document.querySelector("ul");
function Add() {
  for (let i = 0; i < 4; i++) {
    fetch("http://random-dog-api.openode.io/randomdog")
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        url = myJson.message;
        console.log(url);
        if (url.indexOf(".mp4") == -1) {
          type = "img";
        } else {
          type = "video";
        }
        createNewElement(type);
      });
  }
}
function createNewElement(type) {
  let element = document.createElement(type);
  element.className = "view";
  if (type == "video") {
    element.autoplay = "autoplay";
  }
  element.src = url;
  list.appendChild(element);
}
Add();
list.addEventListener("scroll", function() {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    Add();
  }
});