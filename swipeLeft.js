var hidden = document.querySelectorAll(".Hidden");
var nope;

hidden.forEach(e => {
  if (e.innerHTML == "Nope") {
    nope = e;
  };
})

setInterval(() => nope.click(), 1000);
