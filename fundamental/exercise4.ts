const triangle = (height: number)=> {
    let count:number = 1;
    for (let i = 0; i < height; i++) {
        let jumlah:string = "";
        for (let j = 1; j <= i; j++) {
            jumlah += count > 9 ? count: "0" + count + " ";
            count++;
            }
            console.log(jumlah);
        }
    };
triangle(5)

//2
function replace(n: number) {
    let result: string = "";
    for (let i = 1; i <= n; i++){
        if (i %3 ==0 && i % 5 == 0) result += "fizzbuzz ";
        else if (i %5 == 0) result += "buzz ";
        else if (i %3 == 0) result += "fizz ";
        else result += i + " ";
    
      }
        console.log(result);
   }
replace (15);

//3
function BMI(weight: number, height: number){
    let result:number = weight / (height ** 2);
    if (result < 18.5) console.log("less weight");
    else if (18.5 < result && result < 25) console.log("ideal"); 
    else if (25 < result && result < 30) console.log("overweight");
    else if ( 30 < result && result < 40) console.log("very overweight");
    else console.log("obesity");
}
BMI(20, 1.80)

//4
const n:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeOdd(n: number[]) {
    for (let i = 0; i < n.length; i++){
        if (n[i] % 2 != 0) n.splice(i, 1);
    }
    console.log(n);
}
   removeOdd(n) 

   //5
function split (string: string) {
    let result:string[] = string.split(" ");
    console.log(result);
}
split("Hello World Domination")