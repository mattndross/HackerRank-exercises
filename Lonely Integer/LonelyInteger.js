function lonelyinteger(a) {
 let orderedA = a; // save the same value of a in a new variable
 orderedA = orderedA.sort(); // sort the new array without changing the value of the original

 while (orderedA[0] === orderedA[1]) { //while the first and second elements are the same
    orderedA.shift(); //delete the first element
    orderedA.shift(); // delete the second element 
}                   //and so on until the first element doesn't match the second
console.log({orderedA})
return orderedA[0] 

}

lonelyinteger([1, 2, 3, 4, 1, 2, 3, 5, 5, 6, 7, 8, 7, 6, 8])