
import {StringManipulationService} from './main-service';
import {NumberManipulationService} from './main-service';


class StringManipulations implements StringManipulationService
{
    print(word:string) : void{
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(4));
        console.log(word.concat("Batman"));
        console.log(word.slice(1,-1));
        console.log(word.length);
    }

    printWithSpace(sentence:string) : void{
        console.log(sentence.split('').join(' '));
    }

    findVowel(str:string) : void{
        console.log((str.match(/[aeiou]/gi) || []).length);
    }
}

let obj = new StringManipulations();
obj.print("Lenin");
obj.printWithSpace("Lenin Frank");
obj.findVowel("Lenin");

class NumnerManipulations implements NumberManipulationService{

    findPrime(num : number) : void{
        if(num%2 == 0)
        console.log(num+"is not a prime number")
        else
        console.log(num+"is a prime number");
        
    }

    findMagic(num : number) : void{

        let sum:number = 0;
        while(num)
        {
            sum+=num%10;
            num = Math.floor(num / 10);
        }
        if(num==1)
        console.log("it is a Magic Number");
        else
        console.log("Not a Magic number");
    }
}

let obj2 = new NumnerManipulations();
obj2.findPrime(7);
obj2.findMagic(153);