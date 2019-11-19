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

function getRecipes() {
    fetch('http://localhost:8080/recipe/' + sessionStorage.getItem('userId'))
        .then(res => res.json())
        .then(json => listUserRecipes(json))
        .catch(err => console.error(err));
    console.log('show a thing');
}

function listUserRecipes(data) {
    console.log(data);
    data.map(recipe => {
        console.log(recipe.name);
        constructElement('p', recipe.name);
    });
}

function constructElement(element, content) {
    let myEl = document.createElement(element);
    myEl.innerText = content;
    document.getElementById('food-list').appendChild(myEl);
}

function signUserOut() {
    sessionStorage.clear();
    window.location.href = "./index.html"
}