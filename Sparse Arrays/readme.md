https://www.hackerrank.com/challenges/one-month-preparation-kit-sparse-arrays/problem

###Challenge
There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results. 
###Function Description  
The function must return an array of integers representing the frequency of occurrence of each query string in strings.  

matchingStrings has the following parameters:  
 - string strings[n] - an array of strings to search  
 - string queries[q] - an array of query strings  

###Approach  
 - select one query and iterate the array ofe strings cheking if there is a match
 - declare a variable and asign it the value of an empty array
 - if there is a match then sum 1 to a count variable that keeps record of how many match there are and save in the new array variable

 