/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function displayMessage(message){
  document.getElementById("greeting").innerText = message;
}

function greet(timeNow){
  const time = parseInt(timeNow, 10);

  if (time < 12) return "Good Morning"
  if (time >17) return "good Evening"
  return "Good Afternoon"

}