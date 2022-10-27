// // task1
// let A=prompt("include number:");
// for (let n = 1; n < 1000; n++) {
//     if(n%A==0){
//         console.log(n)
//     }
    
// }




// // task2
// let B=prompt("include number:");


// let count = 0
// for (let x = 0; x*x < B; x++) {

//     if(x>0){
//         count ++;
//     }
// }
// console.log(count);





// // task3
// let C = prompt("include number:")


// let num=0;
// for (let y = 1; y < C; y++) {
//     if(C%y==0){ 
//     num=y
//     }
// }
// console.log(num)


// // task4
// let K= prompt("include Number K:")
// let F= prompt("include Number F:")
// let sum=0;


// if (K>F){
//     for (let i = F; i < K; i++) {
//         if(i%7==0){
//             sum+=i;
//         }
//     }
// }else if(F>K){
//     for (let i = K; i < F; i++) {
//         if(i%7==0){
//             sum+=i;
//         }
//     }
// }else{
//     console.log("there is no such number here")
// }

// console.log(sum)


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
// let number1=+prompt("include number 1:")
// let number2=+prompt("include number 2:")


// task7

