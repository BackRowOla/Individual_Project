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

function getRecipes() {
    fetch('http://localhost:8080/recipe/id=' + sessionStorage.getItem('userId'))
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error(err));
    console.log('show something');
}

document.getElementById('btnAddRecipe').addEventListener('click', (event) => window.location.href = "./add-recipe.html");

// alert("The currently logged in users ID:" + sessionStorage.getItem('userId'));