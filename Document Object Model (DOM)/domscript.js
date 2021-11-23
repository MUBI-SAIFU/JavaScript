//In client side console.log work because of object'window'
//In server side console.log work because of object 'global'

//window.console.log("in client side");
global.console.log("in server side")
//this.console.log()   //by default


//while parsing html file by browser it will be converted to "document(object)"

//getElementsByTagName() method used to grab html contents using tag name.but all elements of that tag gets selected and modified.
//for that we can use getElementById() or getElementsByClassName()

//*******Do below codes at console side of browser*******
var item=document.getElementsByTagName("h2");//(here 'HTML collection' get. So convertion to array needed.But if 'NodeList' obtained,we can directly use arraymethod
Array.from(item).forEach(item=>item.style.color="red")

var hto=document.getElementById("new");
hto.style.color="cyan"

var litem=document.getElementsByClassName("item")
Array.from(litem).forEach(ite=>ite.style.color="blue")

//for above all we can use single method querySelectorAll()
document.querySelectorAll("li").forEach(ite=>ite.style.color="green")
document.querySelectorAll("h2").forEach(ite=>ite.style.color="burlywood")
document.querySelector("#new").style.color="green"//since one element need to select querySelector()
document.querySelectorAll(".item").forEach(ite=>ite.style.color="cyan")


document.querySelector("h1").textContent="Document Object Model"  //textContent property to change the text
document.querySelector("h2").textContent="Document Object Model Properties"//only first element with h2 tag got selected,since only used querySelector()

document.querySelector("h1").innerHTML="<em>Document Object Model</em>"//changed into italic,but parses tag
document.querySelector("h1").innerHTML="<p>Document Object Model</p> <p>Object</p>"

