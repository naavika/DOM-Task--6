// Task 1: Implement the code as shown in the video
const fruitItems = document.querySelectorAll('.fruit');
fruitItems.forEach((fruit) => {
    fruit.style.border = '1px solid black';
});

// Task 2: Use id as a query to select the basket heading and set its color to brown
const basketHeading = document.querySelector('#basket-heading');
if (basketHeading) {
    basketHeading.style.color = 'brown';
}

// Task 3: Change the background color of even fruit items to red and change their text color to white
const evenFruitItems = document.querySelectorAll('.fruit:nth-child(even)');
evenFruitItems.forEach((evenFruit) => {
    evenFruit.style.backgroundColor = 'red';
    evenFruit.style.color = 'white';
});
