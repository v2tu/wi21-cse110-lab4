1. It will reuturn the value of i = 3 beacuse i is part of the block which means that declaring it with var makes it accessible.
2. It will return the value of discountedPrice = 150 beacuse var has no block scoped, hence it can be accessed from the outside. 
3. It will return the value of 150 because var allows for redeclaration. 
4. The function will return the array [50, 100, 150] where the prices are reduced by one half. Since the function creates a Lexical environment within the inside, all the variables gets updated hence the inputed array will have their new adjusted price be inside the Lexical environment at first. Then, it'll look for the vairable starting from the inner and moveing toward global and when it finds it, it'll update the vairable to be the new adjusted price that was inside the Lexical environement.
5. It will print out the message that the variable i does not exist becuase i is inside a block and cannot be accessed from the outside
6. It will return an error beacuse we cannot declare the variable using let more than once
7. It will return 150 because we can update the variable without using the word let
8. The function will return [50, 100, 150] beacause although we cannot access some of the variables, but the function craetes its own Lexical environment and udpates the variables and then transfers it to the input variable which will then return the price array reduced by half.
9. The value 3 will be printed beacuase let declaration is changeable
10. It will return 150 because we redclarare the variable each loop iterations
11. It will return an error because const cannot be reassigned values
12. It will return an error because we are trying to reassign the FinalPrice variable which is declared to be const which implies that it cannot be reassigned to another value, therefore, causing an erro when calling the function. 
13. A: student.name B: student['Grad Years'] C: student.greeting D: student['Favorite Teacher'].name E: student.courseLoad[0]
14. Arithmetic
    1.  A: '32' - Converts the numerical value 2 to String and then concat these two together 
    2.  B: 1 - It converts the string 3 to its numerical value 3 and then performed the mathematical operations of 3 - 2
    3.  C: 3 - null converts to 0 numerically, so it becomes a math operations of 3 + 0
    4.  D: '3null' - null was converted to string and concated with string 3 
    5.  E: 4 - true numerical value is 1 so it becomes a math operation of 3 + 1
    6.  F: 0 - false and null both have numerical value 0 so it becomes a math operation of 0
    7.  G: "3undefined" - undefined converts to its string represenatation and concat with string representation of 3
    8.  H: NaN - undefined gets convert to NaN which means it will always return false for any value
15. Comparisons
    1.  A: true - the string representation of 2 gets convert to its numerical value and then does the comparison in which in this case it is true as 2 is bigger then 1
    2.  B: false - Since both of these values are strings, we compare by the first characters and cleary the character 2 is greater then the character 1 hence the comparison returns False
    3.  C: true - the string 2 gets converted to its numerical value and then the comparison is executed
    4.  D: false - the comparison is checked without conversion so it immediately returns false if the types are different
    5.  E: false - true has numerical value of 1 which is not equal to 2
    6.  F: true - Any values that are not 0 in Boolean() will always return true so the comparison is equal
16. The difference between the operator == and === is that == does type conversion before executing the compariosn, while === does not do type conversion and return false if the type are not the same. 
17. "How are you" gets printed because any numerical value greater than 0 will always be true, the first statement returns false because the comparison comapres the numerical value of true which is 1 and is not equal to 2
18. See part1-question.js file
19. The function will return the array [6, 8, 10] for each index in the array it there are two callbacks called, one is to increment the value by and the other multiply by the value of 2. The order that was called was multiply then add, so when it resolves it goes in reverse such that it adds first then multiply causing it to produce the resulting array 
20. See part1-question20.js file
21. Output: 1 4 3 2