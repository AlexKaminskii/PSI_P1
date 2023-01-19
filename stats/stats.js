function createIFrame() {
    var z1 = document.getElementById("z1").value;
    var z2 = document.getElementById("z2").value;
    var iframe = document.createElement("iframe");
    iframe.src = "http://ergast.com/api/f1/" + z1 + "/" + z2;
    iframe.width = "90%";
    iframe.height = "500";
    document.getElementById("iframe-container").appendChild(iframe);
}