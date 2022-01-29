/* 'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}
 */
/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    const arrLength = arr.length; //define quantity of elements in the array
    console.log(arrLength); 

    let positives= []; //declare subarrays
    let negatives= [];
    let zeros=[];
    
    for(let i = 0; i < arrLength; i++) {    //itirate through the array to check if an element is positive, negative or zero
        if (arr[i] < 0) {
            negatives = [...negatives, arr[i]] //if the current element is negative then add it to the negatives subarray
        } else if (arr[i]>0){
            positives = [...positives, arr[i]] //if the current element is positive then add it to the positives subarray
        } else {
            zeros = [...zeros, arr[i]] //if the current element is zero then add it to the zeros subarray
        }
    }

    //ratios
    const positivesRatio = positives.length/ arrLength;
    const negativesRatio = negatives.length/ arrLength;
    const zerosRatio = zeros.length/ arrLength;

    //print formated ratios
    console.log(positivesRatio.toFixed(6));
    console.log(negativesRatio.toFixed(6));
    console.log(zerosRatio.toFixed(6));
}

/* function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
} */

plusMinus([-4, 3, -9, 0, 4, 1])