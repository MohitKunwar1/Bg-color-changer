let buttons = document.querySelectorAll("button");

buttons.forEach(function(elem){
    elem.addEventListener("click", function(dets){
        if(dets.target.id === "color1"){
            document.body.style.backgroundColor = "black";
        }
        if(dets.target.id === "color2"){
            document.body.style.backgroundColor = "white";
        }
        if(dets.target.id === "color3"){
            document.body.style.backgroundColor = "orchid";
        }
        if(dets.target.id === "color4"){
            document.body.style.backgroundColor = "crimson";
        }
        if(dets.target.id === "color5"){
            document.body.style.backgroundColor = "teal";
        }
    });
});