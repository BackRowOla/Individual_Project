let params = new URLSearchParams(location.search);
let recipeId = params.get('id');

// get document elements
let mName = document.getElementById('modalName');
let mCookingLength = document.getElementById('modalCookingLength');
let mMealPeriod = document.getElementById('modalMealPeriod');
let mIngredients = document.getElementById('modalIngredients');
let mCookingMethod = document.getElementById('modalCookingMethod');

let recipeData;

getRecipes();

document.getElementById('updateBtn').addEventListener('click', (event) => updateRecipe());
// document.getElementById('deleteBtn').addEventListener('click', (event) => deleteRecipe());

function getRecipes() {
    fetch('http://localhost:8080/recipe/' + recipeId)
        .then(res => res.json())
        .then(json => getRecipeDetails(json))
        .catch(err => console.error(err));
    console.log('show a thing');
}

function getRecipeDetails(data) {
    recipeData = data;
    data.map(recipe => {
        document.getElementById('card-header').appendChild(constructElement('h3', recipe.name));
        let content =
            'Cooking Time: ' + recipe.cooking_length + 'mins' + ' | ' + recipe.meal_period + '\n'
            + '\nIngredients:\n' + recipe.ingredients + '\n'
            + '\nCooking Method:\n' + recipe.cooking_method;
        document.getElementById('card-body').appendChild(constructElement('p', content));
    });
    return data;
}

function constructElement(element, content) {
    let myEl = document.createElement(element);
    myEl.innerText = content;
    return myEl;
}

function updateRecipe(){
    console.log(recipeData);
    recipeData.map(r => {
        mName.value = r.name;
        mCookingLength.value = r.cooking_length;
        mMealPeriod.value = r.meal_period;
        mIngredients.value = r.ingredients;
        mCookingMethod.value = r.cooking_method;
    });
}

function postData(){

}

function deleteRecipe(){

}

function removeData(id){
    fetch('http://localhost:8080/recipe/delete', {
        method: 'DELETE',
        body: JSON.stringify({
            "id": id
        }),
        headers: {"Content-Type": "application/json"}
    });
}