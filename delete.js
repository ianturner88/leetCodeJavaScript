/*
Challenge
Make password.js take in a single string as a command line argument and print out an obfuscated version of that password, using the rules defined below.

Our program should define a function named obfuscate. This function should take a string as an argument and obfuscate it by applying the following rules:

Every "a" in the string should be replaced with a "4".
Every "e" in the string should be replaced with a "3".
Every "o" (oh) in the string should be replaced with a "0" (zero).
Every "l" (el) in the string should be replaced with a "1" (one).
Are these obfuscated passwords any good?

Not really! To truly minimize the risk of our accounts being hacked, we should use long passwords and use unique ones for every account. Password management software such as 1Password, Lastpass or KeePass can be a big help!

Expected Output
The program should log to the console the final obfuscated password returned by our obfuscate function. As examples, consider the following few runs of the program and their results.

node password.js password
p4ssw0rd
node password.js abracadabra
4br4c4d4br4
node password.js audaciously
4ud4ci0us1y
*/

let stringInput = "password";
let replacement = "";
let stringOutput = "";

for (let i = 0; i < stringInput.length; i++) {
    if (stringInput === "a") {
        replacement = 4;
        stringOutput += replacement;
    } else if (stringInput === "e") {
        replacement = 3;
        stringOutput += replacement;
    } else if (stringInput === "o") {
        replacement = 0;
        stringOutput += replacement;
    } else if (stringInput === "e") {
        replacement = 3;
        stringOutput += replacement;
    } else if (stringInput === "l") {
        replacement = 1;
        stringOutput += replacement;
    } else {
        stringOutput += stringInput[i];
    }
}