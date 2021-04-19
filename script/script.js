'use strict'

console.log("I am here");


//TODO: I want to create a template - constructor function for an animal
// Is that four different constructors?

// Create a single constructor - template
// the constructor takes as parameters - animalName
// property called - animalName
// method to render itself on the screen - render()

// Animal - done
// takes one parameter - animalName - done
// has one method - render() - method is simply a function that is attached to an object. 

function Animal(animalName) {
  this.animalName = animalName;
}

Animal.prototype.render = function() {
  console.log("this function has been called")
  // do the render thing... put yourself on the html screen

  // i need to create this html: <div class="catObject">Cat</div>

  let catDiv = document.createElement('div');
  catDiv.className = 'catObject';
  catDiv.textContent = 'Cat';

  // how to finally render on html
  // this is an animal functin... why are we specifically using cat?

}

//TODO: for Monday
// 1. When the user clicks on the cat button, I want a cat to be created under the cat "button". Need to create an event listener for a click on that button
// - target the cat button
// - attach a listener to listen to the 'click'
// - I want to respond to the click with my own list of things to do (create and render the cat)

//Step by Step
// 1. Target the cat button

let makeCatButton = document.getElementById('makeCat');

// 2. Attach an event listener to listen to the 'click' of cat button

// anonymous function
// on a click, please run/invoke the function - put () around at the end

makeCatButton.addEventListener('click', goMakeCat)

// 3. Respond to the click by console.log('cat was clicked')

function goMakeCat() {
  console.log('cat was clicked')

  // target the item that cat object is to attach to
  // create the cat object 
  // you want to call the cat render(), and render should put the cat on the html screen

}
