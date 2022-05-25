//Math Table
let numberEl= document.querySelector('#req-number');
numberEl.addEventListener('keyup',function(){
    let theNumber = Number(numberEl.value);
    document.querySelector('#number').innerText = theNumber;
    caluculate();
});

let rangeEl = document.querySelector('#multiplier');
rangeEl.addEventListener('input',function(){
    let selectedMultiplier = Number (rangeEl.value);
    document.querySelector('#multi').innerText= selectedMultiplier;
    caluculate();
});

//caluculate
let caluculate =() => {
    let theNumber = Number (document.querySelector('#number').innerText);
    let Multiplier = Number (document.querySelector('#multi').innerText);
    let mathResult = theNumber * Multiplier;
    document.querySelector('#result').innerText = mathResult;
};