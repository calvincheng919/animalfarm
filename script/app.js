'use strict';

// 1. Targeted the form. - put this aside for later
const form = document.getElementsByTagName('FORM')[0];

// 2. Target the text box - input of "title". get its value

// 3. Target the text area - textarea and get its value

// 4. Add an event listener to the ?? (form or the submit button)

// 5. create a function and pass that function to the event listener

form.addEventListener('submit', makeNewArticle ); // 

// When you invoke a function later... like when the button is clicked, what is the function called? ---> callback function


function makeNewArticle(event) {
 // 6. how to respond to the click
event.preventDefault();
const title = event.target.title.value;
const journal = event.target.content.value;

const article = document.createElement('article');
const h2 = document.createElement('h2');
const p = document.createElement('p');

h2.textContent = title;
p.textContent = journal;

article.appendChild(h2);
article.appendChild(p);

const main = document.querySelector('main')
main.appendChild(article);

}