//declare variables 
var x = 5,
    y = 6, 
    z = x + y;
//print to the web page the sum of x and y
document.write(`The sum of 5 and 6 is ${z}`);

//display the sum of the result as an alert on the webpage 
alert(`The sum of 5 and 6 is ${z} `);

//take in 2 integers and prints alerts their sum
 var firstInteger = prompt('What is your first integer?', 0);
 var secondInteger= prompt('and your second integer?', 0)
 
 //alerts the sum of both integers 
 alert(`The sum of your integers ${firstInteger} and ${secondInteger} is ${Number(firstInteger) + Number(secondInteger)}`);
