//1
let word1 = [3,7,34,90,12];
let word2 = [true, "green", "where",12,56]
let lastElement = word1[word1.length -1];
console.log(lastElement);
let lastElement2 = word2[word2.length -1];
console.log(lastElement2);
//2
let animal = ["Cow", "Bird", "Snake", "Dog"];
console.log(animal.join());
//3
let num = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ]
 let sorted = num.sort();
 console.log(num);
 //4
 let fruits = ["apple", "mango", "apple","orange", "mango", "mango"];
 let removedDuplicate = [...new Set(fruits)];
 console.log(removedDuplicate);
 console.log(fruits);
   //5
   let arr5 = ["the", "way", "x", 4];
   let x = "we"
   if(arr5.includes(x)){
    console.log(x + ''+"was found");
   }else{
    console.log("the search word was not found");
   }
   //6
   let wordString = "sevink"
   function ReverseString(str){
    return str.split('').reverse().join('')
   }
   console.log(ReverseString(wordString));
 