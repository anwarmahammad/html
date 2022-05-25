//keyup event Example
let textBox = document.querySelector('#username');
textBox.addEventListener('keyup',function(){
let textEntered = textBox.Value;
let messageElement = document.querySelector('#msg');
messageElement.innerText = textEntered; 
});