function myFunction() {
  var x = document.getElementById("listNav");
  if (x.className === "list-nav") {
    x.className += " responsive";
  } else {
    x.className = "list-nav";
  }
}
