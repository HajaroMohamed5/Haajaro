//traversing through elements
 let div = document.querySelector(".text");
 console.log(div.lastElementChild);
 //accessing children to the parent  Node
 let tx = document.getElementById("tx");
 console.log(tx.parentNode);
 //prevoius sibling
 console.log(tx.previousElementSibling);
 //next sibling
 console.log(tx.nextElementSibling);

  //to access HTML element content
let txt = document.getElementById("tx").innerHTML;
console.log(txt);
//option two
// let tx = document.getElementById("tx");
console.log(tx.textContent);
//or
console.log(tx.innerText);
//text content displays all contents in the HTML tag
let par = document.querySelector(".text");
console.log(par.textContent);
//while inner text displays only visible text in the web page
console.log(par.innerText);

//changing HTML content
let change = document.getElementById("ca");
change.innerHTML = "<h1> welcome to our class CA242</h1>";
//or you can use if you want to change the text only
change.textContent = "new text"

 //selecting an element
let inputbox = document.getElementById("input");
//get attribute => display or access attribute value
console.log(inputbox.getAttribute("placeholder"));
//set attribute => add new attribute
  inputbox.setAttribute("class","ca242")
  console.log(inputbox);
  //checking if attribute exists or not
  console.log(inputbox.hasAttribute("text"));
  //Remove an attribute using remove method
  inputbox.removeAttribute("placeholder")
  console.log(inputbox);
//Create an element method
let newel = document.createElement("div");
//add paragraph inside the element
newel.innerHTML = "<p> this the new element content</p>"
//make visible to the web page
document.body.appendChild(newel)
//modify the property of the element using style
newel.style.color = "green"
//display in the console
console.log(newel);
  //select the element
let menu = document.querySelector(".menue");
//create new element
let list = document.createElement("li");
//new element value
list.innerHTML= "<li>Calculas</li>"
//add the new element in the previous list
menu.appendChild(list)

//another option you can use InsertAdjacenElement method with four different position
menu.insertAdjacentElement("afterbegin",list)
  //how to remove an element
let re = document.getElementById("txt").remove();
//another option
re.remove();

//selecting an element
let oldpara = document.getElementById("txt");
//create the new element
let newpara = document.createElement("p");
//create a content to the new paragraph
newpara.innerHTML= "THis is the new text";
//repalacing the element using replace method
//document.body.replaceChild(newpara,oldpara)
    //another option if child element has parent do this
oldpara.parentNode.replaceChild(newpara,oldpara)
