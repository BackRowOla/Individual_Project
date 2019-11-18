let recipe_name = document.getElementById('recipe_name');
let cooking_length = document.getElementById('cooking_length');
let meal_period = document.getElementById('meal_period');
let ingredients = document.getElementById('ingredients');
let cooking_method = document.getElementById('cooking_method');

document.getElementById('btnAddNewRecipe').addEventListener('click', (event) => postData());

function postData(){
    console.log(meal_period.value);
    fetch('http://localhost:8080/recipe/add', {
        method: 'POST',
        body: JSON.stringify({
            "name": recipe_name.value,
            "cooking_length": cooking_length.value,
            "meal_period": meal_period.value,
            "ingredients":ingredients.value,
            "cooking_method": cooking_method.value,
            "userId": sessionStorage.getItem('userId')
        }),

        headers: {"Content-Type": "application/json"}
    });
    window.alert('Recipe Added!');
    window.location.href = "./home.html";
}