const myBtn=document.querySelector('#myBtn');
const txtDiv= document.querySelector('#text')
function loadText(){
    let xhr= new XMLHttpRequest(); 
    xhr.open("GET","https://api.github.com/users");


xhr.onload = function(){
    if(xhr.status==200 && this.readyState==4){
        let users = JSON.parse(this.responseText);
        console.log(users)

    }
}
    xhr.send();
}
myBtn.addEventListener('click',loadText)