"use strict";
exports.__esModule = true;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(4));
        console.log(word.concat("Batman"));
        console.log(word.slice(1, -1));
        console.log(word.length);
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        console.log(sentence.split('').join(' '));
    };
    StringManipulations.prototype.findVowel = function (str) {
        console.log((str.match(/[aeiou]/gi) || []).length);
    };
    return StringManipulations;
}());
var obj = new StringManipulations();
obj.print("Lenin");
obj.printWithSpace("Lenin Frank");
obj.findVowel("Lenin");
var NumnerManipulations = /** @class */ (function () {
    function NumnerManipulations() {
    }
    NumnerManipulations.prototype.findPrime = function (num) {
        if (num % 2 == 0)
            console.log(num + "is not a prime number");
        else
            console.log(num + "is a prime number");
    };
    NumnerManipulations.prototype.findMagic = function (num) {
        var sum = 0;
        while (num) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        if (num == 1)
            console.log("it is a Magic Number");
        else
            console.log("Not a Magic number");
    };
    return NumnerManipulations;
}());
var obj2 = new NumnerManipulations();
obj2.findPrime(7);
obj2.findMagic(153);
