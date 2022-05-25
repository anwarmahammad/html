// find for loop program
let result='';
    for (let i=0; i <= 10;i++){
        if (i<=9){
            result +=`${i},`;
        }
            else{
                result +=`${i}`;
            }
    }
console.log(result);

// find for loop program
result='';
    for (let i=20; i >=0;i-=2){
        if (i>0){
            result +=`${i},`;
        }
            else{
                result +=`${i}`;
            }
    }
console.log(result);       
               

// find for loop program
result='';
    for (let i=1; i <= 5;i++){
        for (let j=1; j <= i; j++)  {
            result +=`*`;
        }
            result += '\n';
    }
console.log(result);
        

// find for loop program
result='';
    for (let i=1; i <= 5;i++){
        for (let j=1; j <= i; j++)  {
            result +=`${j}`;
        }
            result += '\n';
    }
console.log(result);


// find for loop program
result='';
    for (let i=1; i <= 5;i++){
        for (let j=1; j <= i; j++)  {
            result +=`${i}`;
        }
            result += '\n';
    }
console.log(result);

// find for loop program        
result='';
    for (let i=5; i >= 1;i--){
        for (let j=1; j <= i; j++)  {
            result +=`${j}`;
        }
            result += '\n';
    }
console.log(result);


// find for loop program
result='';
    for (let i=5; i >= 1;i--){
        for (let j=1; j <= i; j++)  {
            result +=`${i}`;
        }
            result += '\n';
    }
console.log(result);

 // find while loop program  
result ='';
    let i=0;
        while (i <=10){
            if (i <=9) {
                result +=`${i},`;
            }
                else{
                    result +=`${i}`; 
                }
                    i++;
        } 
console.log(result);


 // find while loop program  
result='';
    i=20;
        while (i >=0){
            if (i >0) {
                result +=`${i},`;
            }
                else{
                    result +=`${i}`; 
                }
                    i -=2;
        } 
                console.log(result);

 // find while loop program  
let number=5;   
    result='';
    i=1;
        while (i <=number){
            let j=1;
                while (j<=i){
                    result +=`*`;
                    j++;
                }
                    result +='\n';
                    i++; 
        }
console.log(result);


 // find while loop program  
result='';
i=1;
    while (i <=5){
        let j=1;
            while (j<=i){
                result +=`${j}`;
                j++;
            }
                result +='\n';
                i++; 
    }
console.log(result);

 // find while loop program  
result='';
i=1;
    while (i <=5){
        let j=1;
            while (j<=i){
                result +=`${i}`;
                j++;
            }
                result +='\n';
                i++; 
    }
console.log(result);

 // find while loop program  
result='';
i=5;
    while (i >=1){
        let j=1;
            while (j<=i){
                result +=`${j}`;
                j++;
            }
                result +='\n';
                i--; 
    }
console.log(result);

        
 // find while loop program       
result='';
i=5;
    while (i >=1){
        let j=1;
            while (j<=i){
                result +=`${i}`;
                j++;
            }
                result +='\n';
                i--; 
    }
console.log(result);

// find do/while loop program
result ='';
i=0;
    do{
        if (i <=9) {
        result +=`${i},`;
    }
        else{
            result +=`${i}`; 
        }
            i++;
} 
        while (i <=10);
console.log(result);

// find do/while loop program
result='';
i=20;
    do{ 
        if (i >0) {
        result +=`${i},`;
    }
        else{
            result +=`${i}`; 
        }
            i -=2;
    }
        while (i >=0);
console.log(result);

// find do/while loop program
number=5;   
result='';
    i=1;
    do{
        let j=1;
        do{
            result +=`*`;
            j++;
        }
        while (j<=i);
            result +='\n';
            i++; 
        }   
        while (i <=number);
console.log(result);

// find do/while loop program
result='';
i=1;
do{     
    let j=1;
    do{
        result +=`${j}`;
        j++;
    }
    while (j<=i);
        result +='\n';
        i++; 
}
while (i <=5);
console.log(result);

// find do/while loop program
result='';
i=1;
do{     
    let j=1;
    do{
        result +=`${i}`;
        j++;
    }
    while (j <=i);
        result +='\n';
        i++; 
}
while (i <=5);
console.log(result);

// find do/while loop program
result='';
i=5;
do{     
    let j=1;
    do{
        result +=`${j}`;
        j++;
    }
    while (j<=i);
        result +='\n';
        i--; 
}
while (i >=1);
console.log(result);

// find do/while  loop program
result='';
i=5;
do{     
    let j=1;
    do{
        result +=`${i}`;
        j++;
    }
    while (j <=i);
        result +='\n';
        i--; 
}
while (i >=1);
console.log(result);

