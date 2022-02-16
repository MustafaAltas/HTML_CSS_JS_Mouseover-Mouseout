
let ampul = document.getElementById("ampul");
let bodyM = document.getElementById("body");


window.addEventListener("load", (event) => {
    ampul.addEventListener("mouseover",(event) => {
        ampul.setAttribute("src","./img/açık.png")
        bodyM.style.backgroundImage = "url(../img/pngwing.com.png)";
        bodyM.style.backgroundPosition = "center";
        bodyM.style.backgroundRepeat = "no-repeat";
        bodyM.style.backgroundSize = "cover";
        bodyM.style.backgroundAttachment = "fixed";
    });
    
    ampul.addEventListener("mouseout", (event) => {
        ampul.setAttribute("src","./img/kapalı.png");
        bodyM.style.backgroundImage = "none";
    });
});
