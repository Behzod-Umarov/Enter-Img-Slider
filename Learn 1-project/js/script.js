const form = document.querySelector("#form");
const field = document.querySelector("#field");
const wrapper = document.querySelector("#wrapper");
const img = document.getElementById("img");
const right = document.getElementById("right");
const left = document.getElementById("left");


function isValidUrl(string){
    try{
        new URL(string)
        return true;
    } catch(err) {
        return false;
    }
}


form && form.addEventListener("submit",function(event){
    event.preventDefault();

    const isValid = isValidUrl(field.value);
    if(!isValid){
        alert("Is not defined url !")
        return
    }

    let images = [];
    if(localStorage.getItem('images')) {
        images = JSON.parse(localStorage.getItem("images"))
    }
    if(images.includes(field.value)){
        alert("Ushbu rasm mavjud")
        return
    }

    images.push(field.value);
    localStorage.setItem('images' , JSON.stringify(images))
    form.reset();
    window.location.reload();


})

document.addEventListener("DOMContentLoaded",function(){
    let images = [];
    if(localStorage.getItem('images')){
        images = JSON.parse(localStorage.getItem('images'))
    }
    if(images.length == 0){
        wrapper.innerHTML = 'Images not found';
    }
    img.setAttribute('src', images[0])
    img.setAttribute('data-id', 0)
})

right && right.addEventListener("click",function(){
    let images = [];
    if(localStorage.getItem('images')){
        images = JSON.parse(localStorage.getItem('images'))
    }
    let currentId = img.getAttribute('data-id');
    if(currentId == images.length - 1){
        img.setAttribute('src', images[0]);
        img.setAttribute('data-id', 0)        
    } else{
        img.setAttribute('src', images[Number(currentId) + 1]);
        img.setAttribute('data-id', Number(currentId) + 1)
    }
})

left && left.addEventListener("click",function(){
    let images = [];
    if(localStorage.getItem('images')){
        images = JSON.parse(localStorage.getItem('images'))
    }
    let currentId = img.getAttribute('data-id');
    if(currentId == 0){
        img.setAttribute('src', images.length - 1);
        img.setAttribute('data-id', images.length - 1)        
    } else{
        img.setAttribute('src', images[Number(currentId) - 1]);
        img.setAttribute('data-id', Number(currentId) - 1)
    }
})