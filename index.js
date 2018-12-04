// add solution here

function theBeatlesPlay(musicians,instruments) {
  var a =[];
  
  for (var i = 0; i < musicians.length; i++) {
    a.push(musicians[i]+" plays "+ instruments[i]);
  
  }
  
  return a
}
  
   
function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian" ];
  
  var i = 0
  
   while (i > facts.length) {
     newFacts.push(facts[i] +"!!!" )i++;
   }
  
  return newFacts;
}