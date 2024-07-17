let hd = document.getElementById("container")
console.log(hd);

let a = document.getElementsByClassName("heading1");
console.log(a);

let b = document.getElementById("heading2");
console.log(b)

b.style.color = "green"

function changeColor(){
    b.style.color = "red"
}

defaultColor=()=>{
    b.style.color = "green";
}

let bt = document.getElementById("btn")
function popUp(){
        alert("Form Submitted Successully")
        bt.style.backgroundColor = "red"
        bt.style.fontFamily = "georgia"
        bt.style.fontSize = "100px"
        bt.style.color = "white"
}