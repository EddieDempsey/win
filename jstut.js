var surname = prompt('Greetings friend, may I enquire as to your surname?');
var apples = 5, pears = 10;
var piecesOfFruit = apples + pears;
var piecesForEachPerson = piecesOfFruit/3;
//console.log(piecesForEachPerson);
15.234 === 15.234; //true
15.234 !== 123; //true
'10' === 10; //false
10>5; //true
if (10>5){
    //run code
} else {
    //run different code
}
var i = 1;
while (i <10) {
    //console.log(i);
    i = i +1;
}
// i is now 10
for (var i = 1; i < 10; i++){
    //console.log(i);
}
var add = function(a,b){
    return a + b;
}

var jedi = {
    name: "yoda",
    age: 899,
    talk: function (){
        alert("another... Sky.. walk..");}
    }
jedi.name = "Mace Windu";
jedi.lightsaber = "purple";

// Nested Objects
var person = {
    age: 122
};

person.name = {
    first: "Jeanne",
    last: "Calment"
};

// Empty Object, then adding
var dog = {};

dog.bark = function(){
    alert("Woof!");};

// Arrays

var emptyArray = [];
var shoppingList = ['Milk', 'Bread', 'Beans'];
//alert(shoppingList[0]);
shoppingList[1] = 'Cookies';
//alert(shoppingList);
shoppingList.length;
// Push & Pop, add & remove from end of array
shoppingList.push('A new car');
shoppingList.pop();

var helloFrom = function(personName) {
    return "Hello from " + personName;
}

var people = ['Tom','Yoda','Ron'];

people.push('Bob');
people.push('Dr. Evil');
people.pop();

for(var i = 0; i <people.length; i++) {
    var greeting = helloFrom(people[i]);
    alert(greeting);
}
