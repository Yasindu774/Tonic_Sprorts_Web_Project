let text=document.getElementById('text');
let level2=document.getElementById('level2');
let level1=document.getElementById('level1');
let golf=document.getElementById('golf');
let carland=document.getElementById('carland');
let car=document.getElementById('car');
let swimmer=document.getElementById('swimmer');

window.addEventListener('scroll',() => {
    let value = window.scrollY;

    if(value<500){
        text.style.marginTop = value * 2.5 + 'px';
    } 
    swimmer.style.top = value * -1.5 + 'px';
    swimmer.style.left = value * 1.5 + 'px';
    carland.style.left = value * 1.5 + 'px';
    car.style.left = value * 1.5 + 'px';
    swimmer.style.left = value * 0.2 + 'px';
    if(value<500){
        level1.style.marginTop = value * 1.0 + 'px';
        level2.style.marginTop = value * 1.5 + 'px';
    }
    
})