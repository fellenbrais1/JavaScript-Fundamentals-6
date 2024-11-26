// DOM project 2
// Modal windows

// You can toggle the display settings of elements on a page by setting their display between properties like 'block' etc. and 'none'. To make a modal window appear above other elements, first it has to have the CSS styling of having a higher z-index than other elements, then we can set up an eventListener on the class of the button etc. that will toggle the visibility of the modal window.

// However, this gets tricky because eventSelector will only apply the code to the first element of the named class on the page. If we want to apply it to all elements with the same class name, we need to define all of the elements that will be called with 'querySelectorAll('className)' and then apply the eventListener to all of these elements. Please see below for an example of how to do this. I also had to do this to make all of the hidden elements appear or disappear at the same time.

// We could also just do multiple lines of code that change each element individually, so if we make sure the elements have unique classes or IDs we can just write code to change all of them at the same time.

// To get the eventListener to listen for a keypress, we use the 'keydown' property. In the example belwow, we specify an event to run, then check to see if the event.key is equal to the key we want, in this case 'Escape' before running the code.

// Be careful when naming classes, for example, if we called too many elements '.hidden', we will make all of them change their display to block etc. at the same time, and that might not be what we want.

// We can define all of the elements we are going to select commonly in the code at the top, then referencing these in the code later will be easier as we don't need to write these out every time. This includes the collections of elements with the same class names, so we can apply changes to all of them at the same time as necessary later.

'use strict';

// Define all of the elements and groups of elements that you will be commonly using in the rest of the program
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
const hiddenElements = document.querySelectorAll('.hidden');

// Event listener to display the hidden elements on button click (Show modal #)
// btnOpenModal.forEach(button => {
//   button.addEventListener('click', () => {
//     hiddenElements.forEach(element => {
//       element.style.display = 'block';
//     });
//   });
// });

// We can also change visibility by adding or removing the hidden class, I have added this code to the other functions as well as doing it like this is probably more flexible as you can add or remove the hidden class and its styling to any element and not have to watch out for manipulating too many/ not enough elements that have the same class.

// When using 'classList.add' or 'classList.remove', we do not need to add the dot for the class names specified, multiple class names can be added or removed at the same time by adding them in a comma-separated manner.

// Event listener to display the hidden elements on button click (Show modal #)
btnOpenModal.forEach(button => {
  button.addEventListener('click', openModal);
});

// Event listener to hide the hidden elements on button click (X)
btnCloseModal.addEventListener('click', () => {
  hiddenElements.forEach(closeModal);
});

// Event listener to display the hidden elements on overlay click
overlay.addEventListener('click', () => {
  hiddenElements.forEach(closeModal);
});

// Event listener to hide the hidden elements Escape key press
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    hiddenElements.forEach(closeModal);
  }
});

// Experimental eventListener to hide the show-modal buttons on the page
document.addEventListener('keydown', event => {
  if (event.key === 'h') {
    hideButtons;
  }
});

// Experimental eventListener to reveal the show-modal buttons on the page
document.addEventListener('keydown', event => {
  if (event.key === 's') {
    showButtons;
  }
});

// In terms of DRY, we can define common functions as named functions and then just call them when we need to in other places in the code, this is useful for when we want to change something in the future efficiently.
const closeModal = function () {
  hiddenElements.forEach(element => {
    element.classList.add('hidden');
  });
};

const openModal = function () {
  hiddenElements.forEach(element => {
    element.classList.add('hidden');
  });
};

const hideButtons = function () {
  btnOpenModal.forEach(element => {
    element.classList.add('hidden');
  });
};

const showButtons = function () {
  btnOpenModal.forEach(element => {
    element.classList.remove('hidden');
  });
};
