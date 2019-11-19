let day = document.getElementById('dayOfWeek');
let bfast = document.getElementById('breakfastItems');
let lunch = document.getElementById('lunchItems');
let dinner = document.getElementById('dinnerItems');

fetchData();

// document.getElementById('addPlan').addEventListener('click', (event) => fetchData());

function fetchData() {
    fetch('http://localhost:8080/recipe/get/Breakfast')
        .then(res => res.json())
        .then(json => addToBreakfastSelector(json))
        .catch(err => console.error(err));

    fetch('http://localhost:8080/recipe/get/Lunch')
        .then(res => res.json())
        .then(json => addToLunchSelector(json))
        .catch(err => console.error(err));

    fetch('http://localhost:8080/recipe/get/Dinner')
        .then(res => res.json())
        .then(json => addToDinnerSelector(json))
        .catch(err => console.error(err));
}

function addToLunchSelector(data) {
    console.log(data);
    data.map(lunch => {
        // console.log(lunch);
        document.getElementById('lunchItems').appendChild(constructElement('option', lunch.id, lunch.name));
    });
}

function addToDinnerSelector(data) {
    console.log(data);
    data.map(dinner => {
        // console.log(dinner);
        document.getElementById('dinnerItems').appendChild(constructElement('option', dinner.id, dinner.name));
    })
}

function addToBreakfastSelector(data){
    console.log(data);
    data.map(breakfast => {
        // console.log(breakfast);
        document.getElementById('breakfastItems').appendChild(constructElement('option', breakfast.id, breakfast.name));
    })
}

function constructElement(element, value, content) {
    let myEl = document.createElement(element);
    myEl.innerText = content;
    myEl.value = value;
    return myEl;
}

document.getElementById('addPlan').addEventListener('click', (event) => postData());

function postData(){
    let bfastSel = bfast.options[bfast.selectedIndex].value;
    let lunchSel = lunch.options[lunch.selectedIndex].value;
    let dinnerSel = dinner.options[dinner.selectedIndex].value;
    // console.log(day.value);
    // console.log(bfastSel);

    // add breakfast
    fetch('http://localhost:8080/plan/add', {
        method: 'POST',
        body: JSON.stringify({
            "day": day.value,
            "userId": sessionStorage.getItem('userId'),
            "recipeId": bfastSel,
            "meal_period": "Breakfast"
        }),
        headers: {"Content-Type": "application/json"}
    });

    // add lunch
    fetch('http://localhost:8080/plan/add', {
        method: 'POST',
        body: JSON.stringify({
            "day": day.value,
            "userId": sessionStorage.getItem('userId'),
            "recipeId": lunchSel,
            "meal_period": "Lunch"
        }),
        headers: {"Content-Type": "application/json"}
    });

    // add dinner
    fetch('http://localhost:8080/plan/add', {
        method: 'POST',
        body: JSON.stringify({
            "day": day.value,
            "userId": sessionStorage.getItem('userId'),
            "recipeId": dinnerSel,
            "meal_period": "Dinner"
        }),
        headers: {"Content-Type": "application/json"}
    });
    
    console.log('added items');
}