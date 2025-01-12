const rools =[3,4,5,6,8,9];


// for(let n of rools){
//     console.log(n);
// }

const roolsIter = rools[Symbol.iterator]();


console.log(roolsIter.next());
console.log(roolsIter.next());
console.log(roolsIter.next());
console.log(roolsIter.next());
console.log(roolsIter.next());
console.log(roolsIter.next());
console.log(roolsIter.next());


/*
 roolsIter.next(
    for (let i=0;i<3;i++){
        console.log(i)
    }
)*/

// Incorrect usage removed: roolsIter.next(
// You cannot pass a function to .next() or iterate like that.