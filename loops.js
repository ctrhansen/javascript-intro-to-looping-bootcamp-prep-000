for ([initialization];[condition];[iteration])
{
  [loopBody];
}

for (var i = 1; i < 100; i++) {
  console.log("Hello World the " + i + " time");
}

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
<<<<<<< HEAD
  if (i === 1) { array.push ('I am 1 strange loop.');
    } 
    else { array.push (`I am ${i} strange loops.`);
=======
  if (i === 1) { console.log ('I am 1 strange loop.');
    } 
    else { console.log (`I am ${i} strange loops.`);
>>>>>>> cb14af70b8a7b4938995ecbddeae1afda88659e6
    }
  }
  return array
}
function whileLoop(n) {
  let countdown = (n) 
  while (countdown > 0) {
    console.log(--countdown);
  }
  return "done" 
}
<<<<<<< HEAD
function doWhileLoop(array) {
  function incrementVariable() {
    i++}
    do {array.pop();
    } while (array.length > 0 && incrementVariable());
    return array
}
=======
function doWhileLoop(array){
  var i = 0;
function incrementVariable() {
  ++i;
}
    do {array.pop();
    } 
    while(array.length > 0 && incrementVariable());
  return array  
}
    
>>>>>>> cb14af70b8a7b4938995ecbddeae1afda88659e6
