    function menu() {
        var button = document.getElementById("mbtn");
        button.style.display="none";
        var menu = document.getElementById("mobile");
        menu.style.height="15vh"; 
        visible();
    }

    function visible() {
        var container = document.getElementById("container");
        container.style.display="block";
    }


    