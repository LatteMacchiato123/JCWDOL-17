const numCheck:number = 25
const numCheck2:number = 2
const even:string = "Even"
const odd:string = "Odd"
if (numCheck % 2 == 0) console.log(even); //for number 25
else console.log(odd);

if(numCheck2 % 2 == 0) console.log(even); //number 3
else console.log(odd);
//2
const checkPrime:number = 11
let primeNum:string = "Prime";
let notPrime:String = "Not Prime"
let i = 2; i < checkPrime; i++
    if (checkPrime < 2) console.log(notPrime);
    else if (checkPrime % i == 0) console.log(notPrime);
    else console.log(primeNum);
//4
const factorialNum:number = 4;
let resultFactorial = 1;
for (let index = 1; index <= factorialNum; index++){
    resultFactorial = resultFactorial * index;
    console.log(resultFactorial);
}
        
//3 
const nValue:number = 5;
let resultN:number = 1;
for (let dex = 1; dex <= nValue; dex++){
    resultN = resultN + dex
    console.log(resultN);
    
}
//5 fibonacci
const numberFibo:number = 15
const fibonacci:number = numberFibo + 1;
let n1 = 0, n2 = 1, nextCalc;
for (let iFibo = 1; iFibo <=fibonacci; iFibo++){
    nextCalc = n1+n2
    n1 = n2
    n2 = nextCalc
}

//parameter
//numba = brp banyak loop
//reslat = hasil
//temp1 = menyimpan value 2 sebelum angka
//temp2 = menyimpan value 1 sebelum angka

let numba: number = 15
let temp1: number = 0, temp2: number = 1, resalt;
for (let indexing = 1; indexing < numba; ++indexing) {
    resalt = temp1 + temp2
    temp1 = temp2;
    temp2 = resalt;
};
console.log(resalt);
