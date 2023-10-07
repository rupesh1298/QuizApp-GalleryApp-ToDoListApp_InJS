const inputb=document.getElementById("input-box");
const listc=document.getElementById("list-container");

function addTask(){
if(inputb.value=='')
{
    alert("Please write something");
}
else{
    let li=document.createElement("li");
    li.innerHTML=inputb.value;
    listc.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
    
}
document.getElementById("input-box").value="";
saveData();

}
listc.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
showData();

//innerHTMl--set & get function
function saveData(){
    localStorage.setItem("data",listc.innerHTML);

}
function showData(){
    listc.innerHTML=localStorage.getItem("data");
}
