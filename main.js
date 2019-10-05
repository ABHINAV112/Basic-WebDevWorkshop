// Adding an event lister to myUL, so that when a list element is clicked the class checked gets toggled
var list = document.getElementById("myUL");
list.addEventListener(
  "click",
  function(ev) {
    // toggling the class checked
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
function newElement() {
 
  // getting the value entered by the user
  var inputNode =  document.getElementById("myInput")
  var inputValue = inputNode.value;
  if(inputValue===""){
    alert("You must write something!");
    return;
  }

   // creating a new list element which will be appended into the list
   var li = document.createElement("li");
  
  // creating a text node
  var t = document.createTextNode(inputValue);
  
  // appending the newly made text node into the list element created
  li.appendChild(t);

  // appending the newly made list element into the list
  list.appendChild(li);

  // resetting the value of the input field
  document.getElementById("myInput").value = "";

  // adding a button to close the task
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // adding an event listener to hide the task
  span.onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
  
}
