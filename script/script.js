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
}

//TODO: for Monday
// 1. When the user clicks on the cat button, I want a cat to be created under the cat "button". Need to create an event listener for a click on that button
// - target the cat button
// - attach a listener to listen to the 'click'
// - I want to respond to the click with my own list of things to do (create and render the cat)


