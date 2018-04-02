// Episode 1
// Output: 'My name is Keith'
// The function 'printName' is called. No arguments are needed in this case as the function does not require any. It requires a variable 'name' which sources globally - defined at the top of the program. The function itself logs the output.

var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();





// Episode 2
// Ouput: 3
// The function 'result' is called to be logged out. The function itself locally reassgins the var 'score' (which had been set to 5 globally at the head of the program) to be 3. It is returned at this point with a value of 3 and logged out. Score remains set as 5 outwith the function.

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());




// Episode 3
// Output:  0: Ducks
//          1: Dogs
//          2: Lions
//
// The function 'listAnimals' is called. It locally overrules the global var array of
// ['Chickens', 'Cats', 'Rabbits'] with the locally scoped ['Ducks', 'Dogs', 'Lions'].
// It then loops through for the length of the array concatenating the index number and array value with a colon inbetween and logging each out from within the function.

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();





// Episode 4
// Output:  'Suspects include: Jay, Val, Harvey, Rick'
//          'Suspect three is:Keith'
//
// The 'allSuspects' function is called and returns the global variables for suspectOne, suspectTwo and suspectFour. Suspect three is locally reassigned for the scope of the function with 'Harvey'. Outside the function, as you can see in the following line 'suspectThree' remains as 'Keith'.

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );





// Episode 5
// Output: Poirot
//
// The function 'detectiveInfo' is called to be logged out. The function reassigns the value corresponding to the 'name' key from 'Ace Ventura' to 'Poroit' in the 'detective' object. It then calls the anonymous function associated to the varaible 'printName' to be returned. 'printName' returns the the value corresponding to the name key in the detective object - which is now 'Poirot'.

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());





// Episode 6
// Output: 'the murderer is rick'
//
// A lot of tomfoolery occurs with outerFunction and innerFunction but it's largely academic as it all happens within a local scope.
// The 'murderer' variable referenced in the console.log of the last line is global and remains as 'rick'


var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);





// Episode 7 - Make up your own episode/s!

var width = ["five buses", "six wizard sticks", "a bear"];
var total = "what";
var buses = [6,5];


function offDownTheShopsForABit(){
  buses = [5,6];
  width = "football pitches";
  iNeed = "zzzzz";
  var guitars = buses[1] + width;
  return guitars;
};

var procrastination = function(){
  busStop = [];
  offDownTheShopsForABit();
  river = (width.length - 10);
  for (var i = 0; i < buses.length; i++) {
    busStop.push(width[river]);
  };
  busStop.push(iNeed);
  busStop.splice(1, 0, 0);
  return busStop.join('');
};

console.log(`${total} ${procrastination()}!!!`);

// Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.
