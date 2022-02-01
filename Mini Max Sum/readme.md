https://www.hackerrank.com/challenges/one-month-preparation-kit-mini-max-sum/problem

###Input Format  
A single line of five space-separated integers. Ex:  
  1 2 3 4 5  

###Constraints  
1<= arr[i] <= 10^9  //each element should be bigger than ones and smaller than 10^9

###Output Format  
Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)


###Approches  
####1- sort and sum  
 - sort the elements  of the array  
 - sum all expect the last one to get the minivalue  
 - sum all except the first one to get the max value  
 
####2- sum all except one
  - iterate the array summing all except the current value
  - save the result in an array
  - find the mini and max values in the new array
