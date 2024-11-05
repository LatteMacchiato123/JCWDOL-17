//1
const arr: number[] = [12, 5, 23, 18, 4, 45, 32];
arr.sort(function(a, b){return a-b});
let lastIndex = arr.length - 1;
function lowest(arr: number[]) {
    console.log(arr[0]);
}
function highest(arr: number[]) {
        console.log(arr[lastIndex]);
}
lowest(arr);
highest(arr);

//2 
const concatenating = (arr2: string[]) => {
    console.log(
        arr2.map((str, i)=> (i ==arr2.length -1 ? " and " + str : str)).toString()
    );
};
concatenating(["apple", "banana", "cherry", "date"]);



   //3
const arr3: number[] = [5, 3, 1, 7, 2, 6];
arr3.sort(function(a, b){return a-b});
console.log(arr3[1]);


//4


//5

