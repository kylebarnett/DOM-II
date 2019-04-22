// Your code goes here

//mouseover
let mouseOver = document.querySelector('.nav')
mouseOver.addEventListener('mouseover', event => {
  event.target.style.color = 'green'
})

//keydown
let keyDown = document.getElementById('.input-test-2')
document.addEventListener('keydown', event => {
  alert(`${event.target.value}`)
})

//wheel
let nav = document.querySelector(".main-navigation");

document.addEventListener("wheel", event => {
  nav.style.background = "green";
});
//click
let click = document.querySelector('.btn')
click.addEventListener('click', event => {
  alert('You clicked Sign Me Up!')
})

//load
window.addEventListener('load', (event) => {
  alert('page is fully loaded');
});

//focus-on input field
let focus = document.getElementById('input-test')
focus.addEventListener('focus', event => {
  console.log('hiiii', event)
  focus.style.background = 'purple';
})
//resize

const body = document.querySelector('body')
// console.log(body)
window.addEventListener('resize', event => {
  console.log('hi', event)
  body.style.background = 'yellow'
})
//scroll
window.addEventListener("scroll", event => {
  document.body.style.opacity = "0.8";
})
//select
let selected = document.getElementById('input-test')
selected.addEventListener('select', event => {
  alert(`You selected ${event.target.value}`)
})

//dblclick
let dblclicked = document.querySelector('.bus')
dblclicked.addEventListener('dblclick', event => {
  alert('You double clicked')
})

//Prevent default
document.querySelector('body').addEventListener('click', event => {
  if (event.target.tagName === 'a') { event.preventDefault() 
  };
});

