const lha = (numbers: number[]) => 
    console.log(
        Math.min(...numbers), 
        Math.max(...numbers), 
        (numbers. reduce((sum, n)=> sum +n, 0)/ numbers.length).toFixed(4)
    );
lha([12, 5, 23, 18, 4, 45, 32]) 