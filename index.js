
var katzDeliLine = [];

function takeANumber(currentLine){
  
  currentLine.push(number);
  
  return "You are number " + number + ".";
}

function nowServing(currentLine){
  var customer = currentLine.shift();
  
  if(currentLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  return customer;
}

function currentLine(currentLine){
  if(currentLine.length === 0){
    return "The line is currently empty."
  }
  let s = "";
  var line = [];
  for(let i = 0; i < currentLine.length; i++){
    let item = (i + 1) + ". " + currentLine[i];
    line.push(item);
    s = line.toString().replace(/,/g, ", ");
  }
  line.join(', ')
  return "The line is currently: " + s;
}
