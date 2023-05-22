window.addEventListener("load", function() {

    pic1 = document.createElement("img");
    pic1.src = "notebook_webshop_design_home.png"
    pic1.style.width = "600px";
    pic1.style.height = "1000px";
    pic1.style.cursor = "zoom-out";

    pic2 = document.createElement("img");
    pic2.src = "notebook_webshop_design_popular.png"
    pic2.style.width = "600px";
    pic2.style.height = "1000px";
    pic2.style.cursor = "zoom-out";

    pic3 = document.createElement("img");
    pic3.src = "notebook_webshop_design_account.png"
    pic3.style.width = "600px";
    pic3.style.height = "1000px";
    pic3.style.cursor = "zoom-out";

    $("#pics").fadeIn(1000);
    
    //hide the zoom_in
    document.getElementById("zoom_in").addEventListener("click", function() {
        //document.getElementById("zoom_in").style.display = "none";
        $("#zoom_in").fadeOut(600);
        document.getElementById("zoom_in").innerHTML = "";
    });

    //show the zoom_in
    document.getElementsByTagName("img")[0].addEventListener("click", function () {
        document.getElementById("zoom_in").appendChild(pic1);
        //document.getElementById("zoom_in").style.display = "block";
        $("#zoom_in").fadeIn(1000);
    });
    document.getElementsByTagName("img")[1].addEventListener("click", function () {
        document.getElementById("zoom_in").appendChild(pic2);
        //document.getElementById("zoom_in").style.display = "block";
        $("#zoom_in").fadeIn(1000);
    });
    document.getElementsByTagName("img")[2].addEventListener("click", function () {
        document.getElementById("zoom_in").appendChild(pic3);
        //document.getElementById("zoom_in").style.display = "block";
        $("#zoom_in").fadeIn(1000);
    });

})




