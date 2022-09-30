console.log("Success");
// declaring variables from dom
const ratingSection = document.getElementById('rating');
const responseSection = document.getElementById('response');
const ratingForm = document.getElementById('rating_form');
const ratingInput = document.getElementsByClassName("rating--input");
const response = document.getElementById('result');

document.addEventListener('DOMContentLoaded', () => {
    // remove display of thank you state
    responseSection.style.display = 'none';

    // add 'active' class to clicked input and remove from other input elements
    Array.from(ratingInput).forEach(input => {
        input.addEventListener('click', () => {
            Array.from(ratingInput).forEach(unselectedInput => {
                unselectedInput.classList.remove('active');
            });
            input.classList.add('active');
        });
    });

    // function on submitting form
    ratingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('Hello');
    })
})