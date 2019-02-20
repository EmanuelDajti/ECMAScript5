var str = "      Hello Developer";

//alert(str.trim());

var array = [10,23,45,67,89];

var isarr = Array.isArray(array);

// document.getElementById('demo').innerHTML = isarr;


function myfunction(value) {
    return value * 2;
}

//Map function

var doubleValue = array.map(myfunction);

// document.getElementById('demo').innerHTML = doubleValue;

var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = [12,34,56,78];

//Reduce Function
var sum = numbers1.reduce(myFunction);

function myFunction(total=0, value) {
  return total + value;
}

function myFunction2(value) {
    return value > 20;
}


//Filter Function
var filterArray = numbers2.filter(myFunction2);

//document.getElementById('demo').innerHTML = sum;
//document.getElementById('demo2').innerHTML = filterArray;

var fruits = ['Banana', 'Orange', 'Strawberries', 'Apple'];

var findApple = fruits.indexOf('Apple');

//document.getElementById('demo').innerHTML = findApple;

//JSON.parse() - takes a string and converts it into an object

var txt = '{"name":"John", "age":30, "city":"New York"}';
var parseTxt = JSON.parse(txt);

//document.getElementById('demo').innerHTML = parseTxt.name;

//Convert JavaScript object to a string using JSON.stringify()

var obj = {
    name:'Emanuel',
    lastName:'Dajti',
    age:21
};

var stringHolder = JSON.stringify(obj);

document.getElementById('demo').innerHTML = stringHolder;

//Getters And Setters

//Here we use a getter function to return a job name
var obj2 = {
    name:'John',
    lastName:'Doe',
    age:26,
    job:'Web Developer',
    town:'Lor',
    get jobName() {
        return this.job;
    },
    set townName(value) {
     
        this.town = value;
    },
    get townName() {
        return this.town;
    }
};

//Display data from the object using a getter

document.getElementById('demo').innerHTML = obj2.jobName;

//Set an object property using a setter

obj2.townName = 'Boston';

//Display data from the object using a getter
document.getElementById('demo3').innerHTML = obj2.townName;

//Object.defineProperty() - lets you define an object property and change a property's value

// Create an Object:
var person = {
    firstName: "John",
    lastName : "Doe",
      language : "NO", 
  };
  // Change a Property:
  Object.defineProperty(person, "language", {
    value: "EN",
    writable : true,
    enumerable : true, // if enumerable is false it hides it from enumarition
    configurable : true
  });
  // Enumerate Properties
  txt = "";
  for (var x in person) {
    txt += person[x] + "<br>";
  }
  document.getElementById("demo").innerHTML = txt;


  //Object.defineProperty with Setters and getters

  Object.defineProperty(person, "language", {
    get : function() { return language },
    set : function(value) { language = value.toUpperCase()}
  });
  
  
person.language = "en";

// Display Language
document.getElementById("demo").innerHTML = person.language;




