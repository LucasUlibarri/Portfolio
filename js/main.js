// Pre-loader

window.addEventListener('load', function(){

    let loader = document.querySelector('.preloader');

    loader.className += ' hidden';
})



// Scroll

let header = document.querySelector('header');
let about = document.getElementById('about');
let work = document.getElementById('work');
let contact = document.getElementById('contact');



function headerScroll(elem){

    let bounding = elem.getBoundingClientRect();

    if(
        bounding.top <= 20 &&
        bounding.bottom >= 45
        ){

            header.setAttribute('id','scroll');

        } else{
            header.removeAttribute('id');
        }

}

window.addEventListener('scroll', function(event){
    headerScroll(about);
})




/*
function headerScroll(){
    if(header.hasAttribute('id') == false){
        header.setAttribute('id','scroll');
    } else{
        header.removeAttribute('id');
    };
};


let isInViewport = function (elem){
   
    let bounding = elem.getBoundingClientRect();

    return(
        bounding.top <= 45 &&
        bounding.bottom >= (window.innerHeight || document.documentElement.clientHeight)
        );
}


window.addEventListener('scroll', function (event){

    if(isInViewport(about)){
        headerScroll();  
    }

});

window.addEventListener('scroll', function (event){

    if(isInViewport(work)){
        headerScroll();  
    }

});

*/

// Colapsable de work

let colap = document.getElementsByClassName ("colap-boton");
let i;

for (i = 0; i < colap.length; i++) {
    colap[i].addEventListener("click",function(){
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else{
            content.style.maxHeight= content.scrollHeight + "px";
        }
    }) 
}

        

/* ---Reutilizar para el menu en responsive


let colap = document.querySelector('.colap-boton');

let colapContent = document.querySelector('.colap-content');

let chevron = document.querySelector('.chevron');


function colapToggle(){
    if (colapContent.classList.contains('active')){
        colapContent.classList.remove('active');
        chevron.classList.remove('chevron-active')
    } else {
        colapContent.classList.add('active');
        chevron.classList.add('chevron-active')
    }
}

colap.onclick = colapToggle;
*/
