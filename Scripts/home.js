$(document).ready(function() {
    $('#daysCarousel').carousel({
        interval: 10000
    });

    $('#daysCarousel2').carousel({
        interval: 10000
    });

    $('.carousel .carousel-item').each(function() {
        var minPerSlide = 3;
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i = 0; i < minPerSlide; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
        }
    });
});

getRecipes();

document.getElementById('btnAddRecipe').addEventListener('click', (event) => window.location.href = "./add-recipe.html");
document.getElementById('btnSignOut').addEventListener('click', (event) => signUserOut());
document.getElementById('btnAddPlan').addEventListener('click', (event) => window.location.href = "./week-plan.html")

function getRecipes() {
    fetch('http://localhost:8080/recipe/user/' + sessionStorage.getItem('userId'))
        .then(res => res.json())
        .then(json => listUserRecipes(json))
        .catch(err => console.error(err));
    console.log('show a thing');
}

function listUserRecipes(data) {
    console.log(data);
    data.map(recipe => {
        console.log(recipe.id);
        console.log(recipe.name);
        constructElement('a', recipe.name, recipe.id);
    });
}

function constructElement(element, content, id) {
    let myEl = document.createElement(element);
    myEl.className = 'list-group-item list-group-item-action'
    myEl.innerText = content;
    myEl.addEventListener( 'click', () => window.location.href = './recipe.html?id='+ id);
    document.getElementById('food-list').appendChild(myEl);
}

function signUserOut() {
    sessionStorage.clear();
    window.location.href = "./index.html"
}


// User can then update and delete recipes.