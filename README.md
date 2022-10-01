# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

### Rating State

![](./images/Rating%20State%20Frontend%20Mentor%20Interactive%20rating%20component.png)

### Thank you State

![](./images/Thank%20you%20State%20Frontend%20Mentor%20Interactive%20rating%20component.png)

### Links

- Github: [Github](https://github.com/codinci/interactive-rating-component)
- Github hosted page: [Github hosted page](https://codinci.github.io/interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Responsive web
- Vanilla Js

### What I learned

I learned how to add and remove a class based on an event.
```js
Array.from(ratingInput).forEach(input => {
        input.addEventListener('click', () => {
            Array.from(ratingInput).forEach(unselectedInput => {
                unselectedInput.classList.remove('active');
            });
            input.classList.add('active');
        });
    });
```

### Continued development

Would like to add form validation on clicking submission button.

### Useful resources

- [Stackoverflow](https://stackoverflow.com) - Always a helpful friend.
- [W3Schools](https://www.w3schools.com) - Helped in styling elements.

## Author

- Frontend Mentor - [codinci](https://www.frontendmentor.io/profile/codinci)
- Github - [codinci](https://github.com/codinci)

## Acknowledgments

I'd like to thank frontend mentor for provision of a platform for one to practice on their development skills.

