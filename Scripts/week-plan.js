let day = document.getElementById('dayOfWeek');
fetchData();

// document.getElementById('addPlan').addEventListener('click', (event) => fetchData());

function fetchData() {
    fetch('http://localhost:8080/recipe/get/Lunch')
        .then(res => res.json())
        .then(json => addToLunchSelector(json))
        .catch(err => console.error(err));
}

function addToLunchSelector(data) {
    data.map(lunch => {
        console.log(lunch);
        document.getElementById('lunchItems').appendChild(constructElement('option', lunch.name, lunch.name));
    });
}

function constructElement(element, value, content) {
    let myEl = document.createElement(element);
    myEl.innerText = content;
    myEl.value = value;
    return myEl;
}