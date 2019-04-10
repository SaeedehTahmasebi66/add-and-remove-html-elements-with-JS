
    function appendEmoji(){
        /*var x = document.createElement("i")
        x.setAttribute("class", "fas fa-grin-stars fa-3x")
        x.setAttribute("style", "color: red")
        var element = document.getElementById("div1");
        element.appendChild(x); */
        $("#div1").append(" <i class='fas fa-grin-stars fa-3x' style='color:red'></i>.");
        }
    
    function appendImg(){
        /*var y = document.createElement("img")
        y.setAttribute("src", "https://en.wikipedia.org/wiki/Flower#/media/File:White_and_yellow_flower.JPG")
        y.setAttribute("alt", "A flower")
        var element = document.getElementById("div2");
        element.appendChild(y);*/
        $("#div2").append("<img src='https://en.wikipedia.org/wiki/Flower#/media/File:White_and_yellow_flower.JPG' alt='A flower'>");
        }
    
    function appendText(){
        /*var z = document.createElement("strong");
        var node = document.createTextNode("This is appended!");
        z.appendChild(node);
        var element = document.getElementById("div3");
        element.appendChild(z);
        */
        $("#div3").append(" <b>This is appended!</b>.");
        }

    function removeEmoji(){
        /*var parent = document.getElementById("div4");
        var child = document.getElementById("emoji");
        parent.removeChild(child);*/
        $("#emoji").remove();
        }