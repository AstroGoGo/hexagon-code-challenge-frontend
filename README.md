Wow, that was fun! Here's my run down and unit test cases...

The backend was done with Spring Boot in Eclipse. You should be able to do a maven project add and run it as a Spring Boot App.
The frontend was done in React JS in VS Code. You should be able to do a npm install and npm start to get it going.

For Question 1:
My thinking was that you wanted to see how optimized I could make The Sieve of Eratosthenes algorithm, so I tried my best on that. I did also use a StringBuilder for a return to help cut down on the string concatenation time.

For unit tests I focused on validation...
1) Not letting the user input whatever they wanted from the client. 
2) Some validation on the server endpoint for direct hits.
3) Making sure all the prime number show up (a value of 30 should have 29 show up in the list as a prime…that one cost me an hour or two).

For Question 2:
My thinking was that the example really was about relational databases and called for breaking the Employee table down into an Employees and a Positions table, then demonstrate how to do a join between them to find out who is a manager or not. The code was done with an H2 in memory DB so I could do SQL calls against it. I didn't include the rest of the CRUD features, but I figured if I showed the path from React to the REST Server, it would be enough to demonstrate that the other features would be easy.
