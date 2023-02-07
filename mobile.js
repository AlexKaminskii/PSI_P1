    // function menu() {
    //     var button = document.getElementById("mbtn");
    //     button.style.display="none";
    //     var menu = document.getElementById("mobile");
    //     menu.style.height="15vh"; 
    //     visible();
    // }

    // function visible() {
    //     var container = document.getElementById("container");
    //     container.style.display="block";
    // }

function menu() {
  var x = document.getElementById("container");
  if (x.style.display === "block") {
    x.style.display = "none";
  } 
  
  else {
    x.style.display = "block";
  }
}