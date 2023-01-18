function button() {
    let sezon = document.getElementById("sezon").value;
    let runda = document.getElementById("runda").value;
    const iframe = document.createElement("iframe");
    iframe.id = "db"
    iframe.src = "https://ergast.com/api/f1/${sezon}/${runda}"

}

