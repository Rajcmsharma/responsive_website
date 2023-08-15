let burger=document.querySelector('.burger');
let navlink=document.querySelector('.navlink');
let right_nav=document.querySelector('.right-nav');



burger.addEventListener('click',()=>{
navlink.classList.toggle('hide');
right_nav.classList.toggle('hide');

})