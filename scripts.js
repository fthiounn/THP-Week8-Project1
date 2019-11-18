
//fonctionalité 1 +1.bis:
let footerCounter = 0;
document.getElementsByTagName("footer")[0].addEventListener("click", function(){
  footerCounter++;
	console.log(`Click number ${footerCounter}`);
});

//fonctionalité 2 :

let navbarHeaderElement = document.getElementById("navbarHeader");
navbarHeaderElement.addEventListener("click",function(){
  navbarHeaderElement.classList.toggle('collapse');
});

// Fonctionnalité 3 :
let firstCard = document.getElementsByClassName("card-body")[0];
firstCard.getElementsByTagName("button")[1].addEventListener("click", function(){
  firstCard.getElementsByTagName("p")[0].classList.add("text-danger");
});

//Fonctionnalité 4 :
let secondCard = document.getElementsByClassName("card-body")[1];
secondCard.getElementsByTagName("button")[1].addEventListener("click", function(){
  secondCard.getElementsByTagName("p")[0].classList.toggle("text-success");
});

//Fonctionnalité 5 :
document.getElementsByClassName("navbar")[0].addEventListener("click", function(){
  if (document.getElementsByTagName("link")[0].rel == "stylesheet")           //if stylesheet is on, we turn it off
    document.getElementsByTagName("link")[0].rel = "styleDisabled";
  else
    document.getElementsByTagName("link")[0].rel = "stylesheet";

});;

// Fonctionnalité 6 :