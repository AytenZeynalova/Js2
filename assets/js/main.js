// task1
let A=prompt("include number:");
for (let n = 1; n < 1000; n++) {
    if(n%A==0){
        console.log(n)
    }
    
}




// task2
let B=prompt("include number:");


let count = 0
for (let x = 0; x*x < B; x++) {

    if(x>0){
        count ++;
    }
}
console.log(count);





// task3
let C = prompt("include number:")


let num=0;
for (let y = 1; y < C; y++) {
    if(C%y==0){ 
    num=y
    }
}
console.log(num)


// task4
let K= prompt("include Number K:")
let F= prompt("include Number F:")
let sum=0;


if (K>F){
    for (let i = F; i < K; i++) {
        if(i%7==0){
            sum+=i;
        }
    }
}else if(F>K){
    for (let i = K; i < F; i++) {
        if(i%7==0){
            sum+=i;
        }
    }
}else{
    console.log("there is no such number here")
}

console.log(sum)




// task5
let n1=1;
let n2=1;
let nextnum;
do{
    let num1=+prompt("include fibonacci number :")
}while(num1<0)

for (let p = 1; p <= num1; p++) {
    nextnum=n1+n2;
    n1=n2;
    n2=nextnum;
}
console.log(n1);



// task6
let number1=+prompt("include number 1:")
let number2=+prompt("include number 2:")
let gcd
if(number1>number2 && number1!=0 && number2!=0){

    while ((number1 % number2) > 0){
        gcd=number1%number2;
        number1=number2;
        number2=gcd;
        
    }
    console.log(`GCD is: ${number2}`);
}else if(number1<number2 && number1!=0 && number2!=0){
    while ((number2 % number1) > 0){
        gcd=number2%number1;
        number2=number1;
        number1=gcd;
        
    }
    console.log(`GCD is: ${number1}`);
}


// task7
let D = +prompt("Include Number:")
let remainder, sum1 = 0;
while(D > 0)
{
  remainder = D % 10;
  sum1 = sum1 * 10 + remainder;
  D = parseInt(D / 10);
}
console.log(sum1);


//task8
var a = +prompt("Enter the first number: ")
var b = +prompt("Enter the second number: ")
let rem1;
let rem2;

while(a>0){
    
    rem = a % 10;
    a = (a-rem1) / 10;

    while(b>0){
        rem2 = b % 10;
        b = (b-rem2) / 10;

        if(rem2 == rem1){
            console.log("YES");
            break;
        }
    } 
}

if(rem2 != rem1){
    console.log("NO");
}