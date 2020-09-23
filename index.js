var btn = document.querySelector(".menu");

var sideBar = document.querySelector(".sidebar");

var close = document.querySelector(".close");

var left = document.querySelector(".left-mob");

var right = document.querySelector(".right-mob");

btn.addEventListener("click", function(){

sideBar.classList.add("show");

btn.style.display = "none";

close.style.display = "block";

right.style.display = "none";

left.style.display = "none";


});

close.addEventListener("click", function(){

    sideBar.classList.remove("show");
    
    btn.style.display = "block";
    
    close.style.display = "none";

    right.style.display = "block";

left.style.display = "block";
    
    });