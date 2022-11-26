//let recipeTitle = document.getElementById("recTitle").innerHTML;
let recipeTitle = document.querySelector(".recipeTitle");
let ingredientsTitle = document.querySelector(".ingredientsTitle");
let ingredientsList = document.getElementsByTagName('li');
let recDetailsTitle = document.querySelector(".recDetailsTitle");
let recDetails = document.querySelector(".recDetails");

let copyButton = document.querySelector(".copyButton");

let allIngredients = "";

// 👇️ convert to array with Array.from()
Array.from(ingredientsList).forEach(element => { allIngredients += element.innerText + "\n"; });

document.getElementById("copyBtn").addEventListener("click", copyText)

function copyText(e){
    navigator.clipboard.writeText(recipeTitle.innerText + "\n\n" + ingredientsTitle.innerText + ":\n" + allIngredients + "\n" + recDetailsTitle.innerText + ":\n" + recDetails.innerText);
}