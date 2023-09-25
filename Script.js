//---------------variable and objects --------------


// let age = 18; //number
// let firstname = "John Doe" //string

// let object = {
//     age:age,
//     firstname:firstname
// }

// objects
// object.age = 54
// object["lastname"]="Changed Name"
// object.fatherName = "Father Name" //create if key is not available
// console.log(object.notAvailable)
// console.log(typeof(age),typeof(firstname))
//---------------variable and objects --------------


//----------copy by value and copy by reference -------------

// copy by value
//age = 24
//let newAge = age;
// age = 24


//copy by reference
//let newObject = object
//object.age=24


//we have assigned the value
// let newObject = {
//     firstname:object.firstname,
//     age:object.age
// }
// object.age=42

// console.log("New Object",newObject)
// console.log("object",object)

//----------copy by value and copy by reference -------------

//----------hoisting----------------

// how can a variable will have a datatype if the variable has not been initialized
//it is called as hoisting
// console.log(x);
// let x = 10

//----------hoisting----------------


//-----------scope of variable -------------------------

//global variable and local variable
//let y = 10;

//some code which starts here
//  let t = 5
//some code which ends here

//some code should be a function

//function is a set of code or set of block which is only executed when it is called, if it is not called then it will not executed

// function f1(){ //function declaration
//     let t = 10 // t is local variable
//     console.log("inside function t",t,y)
// }
// f1() //this is a function call
// console.log("output of y",y) //y is a global variable

//-----------scope of variable -------------------------





//----------- Example of copy by value and copy of reference -------------------------

// example of twins

// let object1 ={
//     age:24,
//     name:"abc"
// }
// let object2 = object1 //we assign the whole object instead of value, so its an copy by reference
// console.log("first step",object1,object2)
// object2.age=42;
// console.log("second step",object1,object2)

//example of xerox

// let object1 ={
//     age:24,
//     name:"abc"
// }
// let object2 = {
//     age:object1.age, //we are taking value of object 1 instead of the whole object
//     name:object1.name
// }
// console.log("first step",object1,object2)
// object2.age=42;
// console.log("second step",object1,object2)

//----------- Example of copy by value and copy of reference -------------------------


//----------- Array (collection of things, basically can be of same datatype of different) -------------------------

let integerarray = [1,2,3,4,5];
let stringArray= ["Hello","What"];
let mixArray = [1,"Hello",234,null,undefined,1.4]

//console.log(integerarray[4])
//console.log(mixArray.length) //it gives how many elements are there inside an array, doesn't count in the index manner

//----------- Array (collection of things, basically can be of same datatype of different) -------------------------


//--------------------loops--------------------------

//------------while loop
    // let i = 0;
    // while(i<integerarray.length-1){ //until this condtion becomes false run the following code
    //     //run the following code;
    //     console.log(integerarray[i]) //access the ith index of integerarray
    //     i=i+1;
    // }
//------------while loop

//------------for loop - 
//    console.log(integerarray[0]+integerarray[1])
// let sum = 0;
//     for(
//         let i=0; //initial value of the i variable
//         i<integerarray.length; //exit the loop on this condition
//         i++ //increment the variable at the end (execute the increment at the end)
//         )
//     {  
//         sum = sum + integerarray[i]
//         //console.log(integerarray[i])
//     }
// console.log(sum)
//------------for loop


//------------foreach
    // integerarray.forEach(function(item){ //item is an individual element of the array
    //     console.log(item)
    // })

//-------------foreach

//--------------------loops--------------------------

//-------------json---------------------- javascript object notation

// json is an open standard file format and data interchange format
// that uses human-readable text to store and transmit data objects consisting of attribute-value pairs and arrays

// json is a collection of data of key, value pairs where value can be of any datatype

let jsonObject = {
    firstName:"JohnDoe",
    lastName:"Harvard",
    age:20,
    firstLanguage:"English",
    secondLanguage:"Spansih",
    marks:{
        english:89,
        maths:21,
        science:15
    },
    hobbies:["Playing","Drawing","Eating"],
    x:{
        key1:[
            12,5,5
        ]
    }
}

console.log(jsonObject)

//-------------json----------------------







