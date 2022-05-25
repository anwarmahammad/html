
// find the no of 'o' in the given string
let msg= 'Good Morning';
let findZeros = (str) => {
    let count = 0;
    for (let i=0; i<= str.length-1; i++){
           let char = str.charAt(i);
            if(char === 'o' || char === 'O'){
                count ++ ;
            }
    }
    return count;
};
console.log(`The Zeros in Strings is : ${findZeros(msg)}`);

// find the reverse string of the given string
msg= 'Good Morning';
let reverseString = (str) => {
    let tempstring='';
    for (let i= str.length-1; i>= 0; i--){
           let char = str.charAt(i);
            tempstring += char;
    }
    return tempstring;
};
console.log(`${msg} => ${reverseString (msg)}`);

// checking the given string is palindrome or not
msg='ABA';
let isPalindrome= (str) => {
    if (str === reverseString (str)){
        return true;
    }
    else{
        return false;
    }
};
console.log(`${msg} is Palindrome? ${isPalindrome (msg)}`);

// checking the given string is palindrome or not otherway
msg='ABA';
isPalindrome= (str) => {
    return (str === reverseString (str));
};
console.log(`${msg} is Palindrome? ${isPalindrome (msg)}`);

//Triangle String One
msg='MD ANWAR';
let triangleOne = (str) => {
    let tempStr = '';
    for (let i=1; i <= str.length; i++){
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr;
}
console.log(triangleOne(msg));

//Triangle String Two
addSpace = (number) => {
let tempSpace = '';
    for (let i =1; i <= number ; i++){
        tempSpace += ' ';
    }
    return tempSpace;
};
msg = 'MD ANWAR';
let triangleTwo = (str) => {
    let tempStr = '';
    for (let i=0; i <= str.length-1; i++){
        tempStr += `${addSpace(i)}${str.substr(i)} \n`;
    }
    return tempStr;
};
console.log(triangleTwo(msg));

//Triangle String Three

msg = 'MD ANWAR';
let triangleThree = (str) => {
    let tempStr = '';
    for (let i =str.length; i >=1; i--){
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr;
};
console.log(triangleThree(msg));

//Triangle String Four
msg = 'MD ANWAR';
let triangleFour = (str) => {
    let tempStr = '';
    for (let i = str.length -1; i >= 0; i--){
        tempStr += `${addSpace(i)}${str.substr(i)} \n`;
    }
    return tempStr;
};
console.log(triangleFour(msg));