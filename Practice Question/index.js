//array question
//1
//3min
//by myself


// var array=[1,2,3,4,5]
// var sum1=0
// function sum(){
//     for (i=0;i<array.length;i++){
//         sum1=sum1+array[i]
        
//         }console.log(sum1)
// }
// sum(array)


//array question
//2
//6min
//little help by jenil code

// var array=[1,3,5,9,2]
// var a=[]
// function large(){
//     a=array.sort((a,b)=>b-a)
//     console.log(a[0])
// }

// large()


//array question
//3
//2min
//by myself

// var array=[1,3,5,9,2]
// var a=[]
// function large(){
//     a=array.sort((a,b)=>a-b)
//     console.log(a[0])
// }

// large()


//array question
//4
//1min
//by myself

// var array=[1,3,5,9,2]
// var a=[]
// function sort1(){
//     a=array.sort((a,b)=>a-b)
//     console.log(a)
// }

// sort1()

//array question
//5
//1min
//by myself

// var array=[1,3,5,9,2]
// var a=[]
// function sort1(){
//     a=array.sort((a,b)=>b-a)
//     console.log(a)
// }

// sort1()




//array question
//6
//2:30 min
//by myself


// var array=[1,2,3,4,5]
// var order1=[]
// function order(){
//     for (i=0;i<array.length;i++){
//         order1=order1+array[array.length-i]
//     }console.log(order1)
// }
// order()


//array question
//7
//1:30 min
//by myself

// var array=[1,2,3,4,5]

// function find(){
//     console.log(array.includes(6))
// }

// find()


//array question
//8
//20 min
//by help of dhruvil & neel sir

// let num1=6
// var array=[1,2,3,4,5]
// var a;

// function num(){
//     for (i=0;i<array.length;i++){
//         if (num1==array[i]){
//             a=i    
//         }
//     }
//     if (a>=0){
//         console.log(a)
//     }else {
//         console.log(-1)
//     }
// }

// num()



//array question
//9
//2:30 min
//by myself

// var array=[1,2,2,3,4,4,5]
// let b= new Set()

// function dup(){
//     for (i=0;i<array.length;i++){
//         b=b.add(array[i])
//     }console.log(b)
// }

// dup()


//array question
//10
//1:30 min
//by myself


// var a=[1,2,3]
// var b=[4,5,6]

// function mix(){
//     console.log(a.concat(b))
// }

// mix()


//array question
//11
//10 min
//by myself

// var a=[1,2,3]
// var b=[2,3,4]
// var c=[]

// function same(){
    
//     for (i=0;i<a.length;i++){
//         for (j=0;j<=b.length;j++){
//             if (a[i]==b[j]){
//                 c.push(a[i])
//         }
//     }
        
//     }console.log(c)
    
// }

// same()


//array question
//12
//10 min
//by myself & little help of mohit

// var a=[1,2,3]
// var b=[2,3,4]
// let c= new Set()
// function dup(){
//     array=a.concat(b)
//     for (i=0;i<array.length;i++){
//         c=c.add(array[i])

//     }
//     console.log([...c])
// }

// dup()



//array question
//13
//10 min
//by myself & copilot

// var array=[1,2,3,4,5]

// function sort2(){
//     for (i=0;i<array.length;i++){
//         if(array[i]>array[i+1]){
//             return false
//         }
//     }return true
// }

// console.log(sort2())


//array question
//14
//20 min
//by myself & copilot



// var a=[1,2,3]
// var b=[2,3,4]
// var c=[];

// function same(){
    
//     for (i=0;i<a.length;i++){
//         if (!b.includes(a[i])){
//             c.push(a[i]);
//         }
//     }
//     for (i=0;i<b.length;i++){
//         if (!a.includes(b[i])){
//             c.push(b[i]);
//         }
        
//     }
//     return c;
// }

// console.log(same())




//array question
//15
//5 min
//by myself & copilot


// var a=[1,2,3,4,5]
// var b=[]
// function rot(a,k){
//     for (i=0;i<k;i++){
//         a.unshift(a.pop())
//     }return a
   
// }


// console.log(rot(a,2))



//array question
//16
//5 min
//by myself 


// var a=[2,3,10,6,4,8,1]

// function array(){
//     a.sort((a,b)=>b-a)
//     console.log(a[0]-a[a.length-1])
// }

// array()


//array question
//17
//3 min
//by myself 

// var a=[1,2,3,4,5]

// function array(){
//     a.sort((a,b)=>b-a)
//     console.log(a[1])
// }

// array()



// array question
// 18
// 7 min
// by myself 

// var a=[1,2,3,4,5]
// var b=[]

// function array(){
//     a.sort((a,b)=>b-a)
//     b.splice(0,0,a[1],a[0])
//     console.log(b)
// }

// array()


// array question
// 19
// 2 min
// by myself


// var a=[1,2,3,4,5]
// var b=[]

// function array(){
//     a.sort((a,b)=>a-b)
//     b.splice(0,0,a[0],a[1])
//     console.log(b)
// }

// array()


// array question
// 20
// 20 min
// by myself



// var a=[0,1,0,3,12]

// function zero(){
//     for (i=0;i<a.length;i++){
//         if (a[i]===0){
//             a.splice(i,1)
//             a.splice(a.length,0,0)
//         }
//     }console.log(a)
// }

// zero()




// 21. **Count the Frequency of Each Element in an Array**  
//     - Task: Write a function that counts the frequency of each element in an array.  
//     - Test: `countFrequency([1, 2, 2, 3, 3, 3])`  
//     - Expected Output: `{1: 1, 2: 2, 3: 3}`



// function countFrequency(arr) {
//     let frequency = {};

//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];
//         if (frequency[element]) {
//             frequency[element] += 1;
//         } else {
//             frequency[element] = 1;
//         }
//     }

//     return frequency;
// }


// console.log(countFrequency([1, 2, 2, 3, 3, 3,5,5])); 




// 22. **Find the Most Frequent Element in an Array**  
//     - Task: Write a function that finds the most frequent element in an array.  
//     - Test: `mostFrequent([1, 2, 2, 3, 3, 3])`  
//     - Expected Output: `3`


// function findMostFrequent(arr) {
//     let frequency = {};
//     let maxCount = 0;
//     let mostFrequentElement = null;

//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];
//         if (frequency[element]) {
//             frequency[element] += 1;
//         } else {
//             frequency[element] = 1;
//         }

//         if (frequency[element] > maxCount) {
//             maxCount = frequency[element];
//             mostFrequentElement = element;
//         }
//     }

//     return mostFrequentElement;
// }


// console.log(findMostFrequent([1, 2, 2, 3, 3, 3, 5, 5])); 




// 23. **Find the Longest Increasing Subsequence in an Array**  
//     - Task: Write a function that finds the longest increasing subsequence in an array.  
//     - Test: `longestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80])`  
//     - Expected Output: `[10, 22, 33, 50, 60, 80]`



// var array=[10, 22, 9, 33, 21, 50, 41, 60, 80]
// var a=[]

// function subs(){
//     a.push(array[0])
//     console.log(a)
//     for (i=1;i<array.length;i++){
//         if (array[i]>a[a.length-1]){
//            a.push(array[i]) 
//         }
//     }return a
// }

// console.log(subs())


// 24. **Find the Longest Consecutive Sequence in an Array**  
//     - Task: Write a function that finds the longest consecutive sequence in an array.  
//     - Test: `longestConsecutive([100, 4, 200, 1, 3, 2])`  
//     - Expected Output: `4` (sequence is `[1, 2, 3, 4]`)






// object question
// 1
// 20 min
// by myself

// var obj={name:"jonh",age:25,city:"New york"}

// console.log(obj)


// object question
// 2
// 1 min
// by myself


// var obj={name:"jonh",age:50}

// function object(){
//     console.log(obj.name)
// } 

// object(obj)

// object question
// 3 
// 2 min
// by myself & w3 school


// var car={brand:"Toyota",model:"Corolla"}

// function object(){
//     car.year=2020
//     console.log(car.year)
// } 

// object(car)



// object question
// 4 
// 2 min
// by myself & w3 school


// var user={username:"jonh_doe",password:"12345"}

// function object(){
//     delete user.password

//     console.log(user)
// } 

// object(user)



// object question
// 5 
// 5 min
// by myself & copilot


// const obj = { name: 'Alice', age: 30 };

// function object(){
//     console.log(obj.hasOwnProperty("age"))
// }

// object(obj)



// object question
// 6
// 5 min
// by myself & copilot

// var obj1={a:1,b:2}
// var obj2={c:3,d:4}
// var a={}
// function mergeobj(){
//     a={...obj1, ...obj2}
//     console.log(a) 
// }
// mergeobj(obj1,obj2)



// object question
// 7
// 5 min
// by myself & copilot



//  original = { name: 'Alice', details: { age: 30, city: 'NYC' } };
// let b=structuredClone(original)
// function clone(){
    
//     b.details.city="LA"
//     console.log(original.details.city)
//     console.log(b.details.city)
// }

// clone()


// object question
// 8
//20 min
// by myself & copilot


// const user = { name: 'John', age: 30, city: 'New York' };

// function details(){
//     for (key in user){
//    console.log(key ,":", user[key])
        
//     }
// }

// details()


// object question
// 9
//1:30 min
// by myself 


// const obj = { name: 'Alice', age: 30, city: 'NYC' }

// function obj_L(){
//     console.log(Object.keys(obj).length)
// }

// obj_L()



// object question
// 10
// 1 min
// by myself 



// const obj = { name: 'Alice', age: 30, city: 'NYC' }

// function arraykey(){
//     console.log(Object.keys(obj))
// }

// arraykey()



// object question
// 11
// 1 min
// by myself 


// const obj = { name: 'Alice', age: 30, city: 'NYC' };

// function arrayobj(){
//     console.log(Object.values(obj))
// }

// arrayobj()



// 12. **Convert an Array of Objects to a Single Object**
//     - Task: Write a function that converts an array of objects into a single object. Assume each object in the array has a unique `key` property.
//     - Test:
//       ```javascript
//       const arr = [{ key: 'a', value: 1 }, { key: 'b', value: 2 }];
//       console.log(arrayToObject(arr));
//       ```
//     - Expected Output: `{ a: 1, b: 2 }`


// function arrayToObject(arr) {
//     let result = {};
//     for (let i = 0; i < arr.length; i++) {
//         let obj = arr[i];
//         result[obj.key] = obj.value;
//     }
//     return result;
// }


// const arr = [{ key: 'a', value: 1 }, { key: 'b', value: 2 }];
// console.log(arrayToObject(arr)); 



// 13. **Group Objects by a Property**
//     - Task: Write a function that groups an array of objects by a specific property.
//     - Test:
//       ```javascript
//       const users = [
//         { name: 'Alice', age: 30 },
//         { name: 'Bob', age: 20 },
//         { name: 'Charlie', age: 30 }
//       ];
//       console.log(groupBy(users, 'age'));
//       ```
//     - Expected Output:
//       ```javascript
//       {
//         20: [{ name: 'Bob', age: 20 }],
//         30: [{ name: 'Alice', age: 30 }, { name: 'Charlie', age: 30 }]
//       }
//       ```


// 14. **Find the Object with the Maximum Value of a Property**
//     - Task: Write a function that finds the object with the maximum value of a given property in an array of objects.
//     - Test:
//       ```javascript
//       const users = [
//         { name: 'Alice', age: 30 },
//         { name: 'Bob', age: 20 },
//         { name: 'Charlie', age: 35 }
//       ];
//       console.log(findMax(users, 'age'));
//       ```
//     - Expected Output: `{ name: 'Charlie', age: 35 }`


// const users = [
//             { name: 'Alice', age: 30 },
//             { name: 'Bob', age: 20 },
//             { name: 'Charlie', age: 35 }
//           ];

// var a=[]

// function maxage(){
//     for (i=0;i<users.length;i++){
//         a.push(users[i].age)
//     }k=a.sort((a,b)=>b-a)
//     console.log(k[0])
// }

// maxage()


// 15. **Sum the Values of a Specific Property in an Array of Objects**
//     - Task: Write a function that sums the values of a specific property in an array of objects.
//     - Test:
//       ```javascript
//       const items = [
//         { name: 'item1', price: 10 },
//         { name: 'item2', price: 15 },
//         { name: 'item3', price: 20 }
//       ];
//       console.log(sumProperty(items, 'price'));
//       ```
//     - Expected Output: `45`


// const items = [
//             { name: 'item1', price: 10 },
//             { name: 'item2', price: 15 },
//             { name: 'item3', price: 20 }
//           ];
// var count=0

// function total(){
//     for (i=0;i<items.length;i++){
//         count=count+items[i].price
//     }console.log(count)
// }

// total()




// string question
// 1
// 3 min
// by myself 


// var str="hello"
// var rstring=""

// function rstr(){
//     for (i=str.length-1;i>=0;i--){
//         rstring=rstring+str[i]
//     }console.log(rstring)
// }

// rstr()


// string question
// 2
// 6:30 min
// by myself


// var userinput="racecar"
// var a=""

// function palin(){
//     for (i=userinput.length-1;i>=0;i--){
//         a=a+userinput[i]
//     }
//     console.log(a)
//     if (a==userinput){
//         return true
//     }else {
//         return false
//     }
// }

// console.log(palin())



// string question
// 3
// 5 min
// by myself


// var str="Hello World"
// var vovels="aeiou"
// var count=0;
// function vovelcount(){
//     for (i=0;i<str.length;i++){
//         for (j=0;j<vovels.length;j++){
//             if (str[i]===vovels[j]){
//                 count++
//             }
//         }
//     }console.log(count)
// }

// vovelcount()



// string question
// 4
// 10 min
// by https://www.geeksforgeeks.org/javascript-program-to-get-a-non-repeating-character-from-the-given-string/


// let str = "swiss";
// let res = null;

// function nonrep(){
//     for (let char of str) {
//         if (
//             str.indexOf(char)
//             ===
//             str.lastIndexOf(char)
//         ) {
//             res = char;
//             break;
//         }
//     }
//     console.log("Input: " + str);
//     console.log("Non-repeating character: " + res);
// }

// nonrep()


// string question
// 5
// 2:30 min
// by myself 


// var str="This is a test string"
// var spce=" "
// var count=1

// function spcstr(){
//     for (i=0;i<str.length;i++){
//         if (str[i]===spce){
//             count=count+1
//         }
//     }console.log(count)
// }

// spcstr()


// string question
// 6
// 4 min
// by myself & copilot 


// var str1="listen"
// var str2="silent"

// function samealpha(){
//     if (str1.length===str2.length){
//         if (str1.split("").sort().join("")===str2.split("").sort().join("")){
//             console.log("is anagram")
//         }else {
//             console.log("is not anagram")
//         }
//     }else{
//         console.log("is not anagram")
//     }
// }

// samealpha()



// string question
// 7
// 6 min
// by myself & copilot


// var str="hello world"
// var a=""
// function joint(){
    
//     a=str.replace(" ","-")
//     console.log(a)
// }

// joint()


// string question
// 8
// 6 min
// by copilot


// function toTitleCase(str) {
//     return str.split(' ').map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     }).join(' ');
// }


// console.log(toTitleCase("this is a test string")); 


// string question
// 9
// 30 min 
// by copilot

// var a = "12345";

// function num() {
//     for (let i = 0; i < a.length; i++) {
//         if (!a[i].match(/[0-9]/)) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(num());


// var a="12345"

// function num(){
//     for (let i=0;i<=10;i++){  
//             if (a[i]===String.fromCharCode(48+i)){
//                 return true
//             }else {
//                 return false
//             }   
//     }
// }

// console.log(num())



// string question
// 10
// 3:30 min
// by myself


// var a="programming"
// var b= new Set()

// function same(){
//     for (i=0;i<a.length;i++){
//         b=b.add(a[i])
//     }console.log(Array.from(b).join(""))
// }

// same()


// string question
// 11
// 14:30 min
// by myself

// var a="The quick brown fox jumped over the lazy dog"
//  b=a.split(" ")
//  var c=[]


// function alpha(){
//     for(i=0;i<b.length;i++){
//         c.push(b[i].length)
//     }
//     c.sort((a,b)=>b-a)
//     d=c[0]
    
//      for(j=0;j<b.length;j++){
//          if (b[j].length==d){
//              m=b[j]
//          }
//      }
//      console.log(m)
// }

// alpha()



// string question
// 12
// 4:15 min
// by myself & copilot



// var str="javascript is fun"

// function capi(){
//     return str.split(" ").map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     }).join(" ")
// }

// console.log(capi())




// string question
// 13
// 3 min
// by myself 


// var ntimes=3
// var str="abc"
// var str2=""

// function repeatt(){
//     for (i=0;i<ntimes;i++){
//         str2=str2+str
//     }console.log(str2)
// }

// repeatt()



// string question
// 14
// 2 min
// by myself 


// var a="hello world"
// var str="hello"
// b=a.split(" ")

// function strr(){
//     for (i=0;i<b.length;i++){
//         if (b[i]==str){
//             return true
//         }
//     }return false
// }

// console.log(strr())


// string question
// 15
// 2 min
// by myself 


// var str="This is a test"

// function strr(){
//     b=str.split(" ")
//     console.log(b)
// }

// strr()



// string question
// 16
// 3 min
// by myself 


// var a="This is a long string"
// var b=[]
// var c=9
// var d=["..."]

// function strr(){
//     b.push(a.slice(0,c))
//     console.log(b+d)
// }

// strr()


// string question
// 17
// 1 min
// by myself 



// var a="hello world"
// var str="world"
// b=a.split(" ")

// function strr(){
    
//     if (b[0]==str){
//         return true
//     }
// return false
// }

// console.log(strr())



// string question
// 18
// 1 min
// by myself 


// var a="hello world"
// var str="world"
// b=a.split(" ")

// function strr(){
    
//     if (b[b.length-1]==str){
//         return true
//     }
// return false
// }

// console.log(strr())


// string question
// 19
// 3 min
// by myself 


// var a="Hello World"
// var b="beautiful"
// var k=6

// function strr(){
//    c=a.split("")
//   d=c.splice(k,0,b+" ")
//    e=c.join("")
//    console.log(e)
// }

// strr()


// string question
// 20
// 3 min
// by myself 

// var str="This is a test. This is only a test."

// function strr(){
//     c=str.replace("test","")
//     console.log(c)
// }

// strr()










// Beginner Friendly Questions question
// 1
// 1 min
// by myself 


// function print(a){
//     console.log(a)
// }

// var a="hello world"
// print(a)


// Beginner Friendly Questions question
// 2
// 1 min
// by myself


// function sum(){
//     c=a+b 
//     console.log(c)
// }

// var a=5
// var b=5
// sum()


// Beginner Friendly Questions question
// 3
// 2:30 min
// by myself


// var a=2
// var b=8
// var c=5
// var maxnumber;

// function large(){
//     if (a>b & a>c){
//         maxnumber=a
//     }else if(b>c){
//         maxnumber=b
//     }else {
//         maxnumber=c
//     }
//     console.log(maxnumber)
// }

// large()



// Beginner Friendly Questions question
// 4
// 1 min
// by myself


// var a=5

// function oddeven(){
//     if (a%2==0){
//         return true
//     }
//     return false
// }

// console.log(oddeven())




// Beginner Friendly Questions question
// 5
// 2 min
// by myself


// var number=5
// var count=1

// function fact(){
//     for (i=1;i<=number;i++){
//         count=count*i
//     }console.log(count)
// }

// fact()




// Beginner Friendly Questions question
// 6
// 2 min
// by myself


// var str="hello"
// var rstring=""

// function rstr(){
//     for (i=str.length-1;i>=0;i--){
//         rstring=rstring+str[i]
//     }console.log(rstring)
// }

// rstr()



// Beginner Friendly Questions question
// 7
// 2 min
// by myself


// var userinput="madam"
// var a=""

// function palin(){
//     for (i=userinput.length-1;i>=0;i--){
//         a=a+userinput[i]
//     }
//     if (a==userinput){
//         return true
//     }else {
//         return false
//     }
// }

// console.log(palin())



// Beginner Friendly Questions question
// 8
// 1 min
// by myself



// var array=[3,1,4,1,5]
// var a=[]
// function min(){
//     a=array.sort((a,b)=>a-b)
//     console.log(a[0])
// }

// min()



// Beginner Friendly Questions question
// 9
// 1 min
// by myself


// var array=[3,1,4,1,5]
// var a=[]
// function sortt(){
//     a=array.sort((a,b)=>a-b)
//     console.log(a)
// }

// sortt()



// Beginner Friendly Questions question
// 10
// 1 min
// by myself


// var a="hello world"
// var str="world"
// b=a.split(" ")

// function strr(){
//     for (i=0;i<b.length;i++){
//         if (b[i]==str){
//             return true
//         }
//     }return false
// }

// console.log(strr())



// Beginner Friendly Questions question
// 11
// 1 min
// by myself



// var array=[1,2,3,4,5]
// var sum1=0
// function sum(){
//     for (i=0;i<array.length;i++){
//         sum1=sum1+array[i]
        
//         }console.log(sum1)
// }
// sum(array)



// Beginner Friendly Questions question
// 12
// 4 min
// by myself & seeing before code

// var n=5
// var n1=0,n2=1,nexterm;

// function faiba(){
//     var i=1
// while(i<=n){
//     console.log(n1)
//     nexterm=n1+n2
//     n1=n2
//     n2=nexterm
//     i++
// }
// }
// faiba()


// Beginner Friendly Questions question
// 13
// 4:30 min
// by myself & seeing before code


// var n=6
// var count=0

// function prime(){
//     for (i=2;i<n;i++){
//         if (n%i==0){
//             count=count+1
//         }
//     }
//     if (count>0){
//         return false
//     }
//     return true
// }

// console.log(prime())


// Beginner Friendly Questions question
// 14
// 3:30 min
// by myself



// var str="hello"
// var vovels="aeiou"
// var count=0

// function vovel(){
//     for (i=0;i<str.length;i++){
//         for (j=0;j<vovels.length;j++){
//             if (str[i]==vovels[j]){
//                 count=count+1
//             }
//         }
//     }console.log(count)
// }

// vovel()


// Beginner Friendly Questions question
// 15
// 3 min
// by myself


// var array=[1,2,3,4,5]
// var indexof=3

// function index(){
//     for (i=0;i<array.length;i++){
//         if (array[i]===indexof){
//             return i
//         }
//     }return -1
// }

// console.log(index())


// Beginner Friendly Questions question
// 16
// 2 min
// by myself


// var array=[1,2,2,3,4,5]
// var a=new Set()

// function arydup(){
//     for (i=0;i<array.length;i++){
//         a.add(array[i])
//     }console.log([...a])
// }
// arydup()


// Beginner Friendly Questions question
// 17
// 3 min
// by myself


// var a=[1,2,3]
// var b=[2,3,4]
// var c=[]

// function same(){
    
//     for (i=0;i<a.length;i++){
//         for (j=0;j<=b.length;j++){
//             if (a[i]==b[j]){
//                 c.push(a[i])
//         }
//     }
        
//     }console.log(c)
    
// }

// same()



// Beginner Friendly Questions question
// 18
// 3 min
// by myself


// var str1="listen"
// var str2="silent"

// function samealpha(){
//     if (str1.length===str2.length){
//         if (str1.split("").sort().join("")===str2.split("").sort().join("")){
//             console.log("is anagram")
//         }else {
//             console.log("is not anagram")
//         }
//     }else{
//         console.log("is not anagram")
//     }
// }

// samealpha()



// Beginner Friendly Questions question
// 19
// 7:30 min
// by myself


// var str="hello world"

// function capi(){
//     return str.split(" ").map(word =>{
//         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     }).join(" ")
// }

// console.log(capi())


// Beginner Friendly Questions question
// 20
// 1:30 min
// by myself


// var a=[1, [2, 3], [4, [5, 6]]]

// function flatt(){
//     b=a.flat()
//     c=b.flat()
//     console.log(c)
// }

// flatt()


// Beginner Friendly Questions question
// 21
// 2 min
// by myself & copilot


// function random(a,b){
//     c=Math.floor(Math.random()*(b-a+1))+a
//     console.log(c)
// }

// random(1,7)


// Beginner Friendly Questions question
// 22
// 2 min
// by myself 


// var email="text@example.com"

// function verify(){
//         if (email===email.toLowerCase()){
//             if(email.includes("@")){
//                 if (email.includes(".com")){
//                     if (!email.includes(" ")){
//                         return true
//                     }
//                 }
//             }
//         }return false
// }

// console.log(verify())


// Beginner Friendly Questions question
// 23
// 3 min
// by myself 


// var celcius=101

// function tofer(){
//     a=(celcius*9/5)+32
//     console.log("in fernheit is ",a)
// }

// tofer()


// Beginner Friendly Questions question
// 24
// 5 min
// by myself



// var array=[1,2,3,4,5]
// var rmv=3

// function remov(){
//     for (i=0;i<=array.length;i++){
//         if (array[i]===rmv){
//             c=array.splice(i,1)
//             return array
//         }
//     }
// }

// console.log(remov())




// Beginner Friendly Questions question
// 25
// 2 min
// by myself 


// var array=[3,1,4,1,5]
// var a=[]
// function secmax(){
//     a=array.sort((a,b)=>b-a)
//     console.log(a[1])
// }

// secmax()


// Beginner Friendly Questions question
// 26
// 2 min
// by myself


// var a="The quick brown fox jumped over the lazy dog"
//  b=a.split(" ")
//  var c=[]


// function alpha(){
//     for(i=0;i<b.length;i++){
//         c.push(b[i].length)
//     }
//     c.sort((a,b)=>b-a)
//     d=c[0]
    
//      for(j=0;j<b.length;j++){
//          if (b[j].length==d){
//              m=b[j]
//          }
//      }
//      console.log(m)
// }

// alpha()


// Beginner Friendly Questions question
// 27
// 5 min
// by myself


// var array=[1,2,4,5,6]
// var total1=0
// var total2=0

// function miss(){
//     for (i=0;i<array.length;i++){
//         total1=total1+ array[i]
//     }
//     for (i=1;i<=array.length+1;i++){
//         total2=total2+i
//     }
//     return total2-total1
// }

// console.log(miss())


// Beginner Friendly Questions question
// 28
// 15 min
// by myself


// var n1=4
// var n2=6
// var a=[]
// var b=[]
// var c=[]

// function gdc(){
//     for (i=1;i<=n1;i++){
//         if (n1%i==0){
//             a.push(i)
//         }   
//     }
//     for (i=1;i<=n1;i++){
//         if (n2%i==0){
//             b.push(i)
//         }   
//     }
//     for (i=0;i<a.length;i++){
//     for (j=0;j<a.length;j++){
//         if (a[i]==b[j]){
//             c.push(a[i])
//         }
//     }
//     }
//     console.log(c[c.length-1])
// }

// gdc()


// Beginner Friendly Questions question
// 29
// 15 min
// by myself & show logic from web


// var n1=4
// var n2=6
// var a=[]
// var b=[]
// var c=[]

// function lcm(){
//     for (i=1;i<=n1;i++){
//         if (n1%i==0){
//             a.push(i)
//         }   
//     }
//     for (i=1;i<=n1;i++){
//         if (n2%i==0){
//             b.push(i)
//         }   
//     }
//     for (i=0;i<a.length;i++){
//     for (j=0;j<a.length;j++){
//         if (a[i]==b[j]){
//             c.push(a[i])
//         }
//     }
//     }k=c[c.length-1]
//     console.log((n1*n2)/k)
// }

// lcm()


// Beginner Friendly Questions question
// 30
// 10 min
// by myself & copilot 



// function isBalanced(str) {
//     let balance = 0;

//     for (let char of str) {
//         if (char === '(') {
//             balance++;
//         } else if (char === ')') {
//             balance--;
//             if (balance < 0) {
//                 return false;
//             }
//         }
//     }

//     return balance === 0;
// }

// console.log(isBalanced('(())'));




// Beginner Friendly Questions question
// 30
// 3 min
// by myself 


// var array=[1,2,3,4,5];
// var k=2

// function rot(){
//     for (i=0;i<k;i++){
//         array.unshift(array.pop())
//     }return array
// }

// console.log(rot())