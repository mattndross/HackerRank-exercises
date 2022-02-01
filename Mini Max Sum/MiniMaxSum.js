

function miniMaxSum(arr) {
    const sortedArr = arr.sort(); //sort the array
    const reducer = (previousVal, currentVal) => previousVal+currentVal; //declare sum function
    const mini = sortedArr.slice(0, 4).reduce(reducer); //sum all elements except the last one
    const max = sortedArr.slice(1).reduce(reducer);//sum all elements except the first one

    console.log(`${mini} ${max}`)

}

miniMaxSum([1, 2, 3, 4, 5])