const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// variables globales

const parentElement = document.querySelector(".dots");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
let index = 0
const bannerImg = document.querySelector(".banner-img");
const bannerImgText = document.querySelector('#banner p');




function carrosel() {
	leftClick()
	rightClick()
	displayDot()
}
carrosel()



function displayDot() {
	for (let i = 0; i < slides.length; i++) {
		
		let nouvelElement = document.createElement("div");// creer un element div
		nouvelElement.classList.add("dot")
		// nouvelElement.classList.add("dot_selected")
	
		
		parentElement.appendChild(nouvelElement); // Ajouter le nouvel élément au parent

		if(i == index){
			nouvelElement.classList.add('dot_selected')
		}
	}	
}



function leftClick() {
	
	arrowLeft.addEventListener("click", function() {       // ajouter un ecoute d'évèvenement pour la flêche gauche
		const arraydot = document.querySelectorAll(".dot") 
		arraydot[index].classList.remove("dot_selected")
		index--;
		if (index < 0) {
			index = slides.length - 1
		}	
		
		arraydot[index].classList.add("dot_selected")
		bannerImg.src = "./assets/images/slideshow/" + slides[index].image;
		bannerImgText.innerHTML = slides[index].tagLine;
		
})
}



function rightClick() {
	
	arrowRight.addEventListener("click", function() {      // ajouter un ecoute d'évèvenement pour la flêche droite
		const arraydot = document.querySelectorAll(".dot")
		arraydot[index].classList.remove("dot_selected")
		index++;
		if (index > slides.length - 1) {
			index = 0
		}	
		
		arraydot[index].classList.add("dot_selected")
		bannerImg.src = "./assets/images/slideshow/" + slides[index].image;
		bannerImgText.innerHTML = slides[index].tagLine;	
		
})
}












