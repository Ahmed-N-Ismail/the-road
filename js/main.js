// navbar
const openBtn=document.querySelector('.open-icon');
const closeBtn=document.querySelector('.close-icon');
const container=document.querySelector('.container');
openBtn.onclick=function(){
    container.classList.add('ch');
}
closeBtn.onclick=function(){
    container.classList.remove('ch');
}
// section touries
var btn=document.querySelectorAll('.navgtion');
btn.forEach((el)=>{
    el.onclick=()=>{
        el.parentElement.parentElement.classList.toggle('change')
    }
})
