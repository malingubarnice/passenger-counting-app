let count = 0

//grabbing element with id paragraph2-el
let paragraph2El= document.getElementById("paragraph2-el")

//function to render increment in the count variable when the increment button is clicked
function increment(){
    count += 1
    paragraph2El.textContent= count
}

//grabbing element with id paragraph3-el
let paragraph3El = document.getElementById("paragraph3-el")

//function to render the previously counted passangers on the screen 
function save(){
    let previousCount= count + " " + "-" + " "
    paragraph3El.textContent +=previousCount
    count=0
    paragraph2El.textContent = 0
    
}