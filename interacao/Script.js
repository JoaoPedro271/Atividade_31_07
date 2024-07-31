var menuBtn = document.getElementById("menuBnt");
var menuNav = document.getElementById("menuNav");

menuNav.style.right = "-250px";
menuBtn.onclick = function(){
    if(menuNav.style.right == "-250px"){
        menuNav.style.right == "0";
    }else{
        menuNav.style.right = "-250px"
    }
}
window.sr = ScrollReveal({reset: true});
sr.reveal('.header-texto', {duration: 3000});
sr.reveal('.sobre-left-col' , {duration: 2000});
sr.reveal('.sobre-right-col', {duration: 2000});
sr.reveal('.equipe-col', {duration: 2000});