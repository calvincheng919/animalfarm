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

  let animalDiv = document.createElement('div');
  animalDiv.className = `${this.animalName}Object`;
  animalDiv.textContent = this.animalName;
  let farm = document.querySelector('#farm')
  farm.appendChild(animalDiv);
}

//make cat
let makeCatButton = document.getElementById('makeCat');
makeCatButton.addEventListener('click', goMakeCat)

function goMakeCat() {
  console.log('cat was clicked')
  let cat = new Animal('cat');
  cat.render();
}

//make dog
let makeDogButton = document.getElementById('makeDog');
makeDogButton.addEventListener('click', goMakeDog)

function goMakeDog() {
  console.log('dog was clicked')
  let dog = new Animal('dog');
  dog.render();
}

// make horse


// make sheep










