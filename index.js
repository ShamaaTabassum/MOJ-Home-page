const menuBtn=document.querySelector(".menu-toggle-btn");
const menu=document.querySelector(".menu");
const toggleMenuBtn=()=>{
    menu.classList.toggle("active")
}
menuBtn.addEventListener("click",()=>toggleMenuBtn()); 

let sliderA=document.querySelector("#slider-a");
let minRange1=document.querySelector("#min-range1");
let sliderB=document.querySelector("#slider-b");
let maxRange1=document.querySelector("#max-range1");
let minGap = 1;
minRange1.innerHTML=sliderA.value;
maxRange1.innerHTML=sliderB.value;
let slider1=()=>{
    if ( parseInt(sliderB.value)- parseInt(sliderA.value)<=minGap) {
        sliderA.value= parseInt(sliderB.value)-minGap;
    };

    minRange1.innerHTML=sliderA.value;
}
const slider2=()=>{
    if ( parseInt(sliderB.value)- parseInt(sliderA.value)<=minGap) {
        sliderB.value= parseInt(sliderA.value)+minGap;
    };
    maxRange1.innerHTML=sliderB.value;
}

let sliderC=document.querySelector("#slider-c");
let minRange2=document.querySelector("#min-range2");

let sliderD=document.querySelector("#slider-d");
let maxRange2=document.querySelector("#max-range2");

minRange2.innerHTML=sliderC.value + " KM";
maxRange2.innerHTML=">"+ sliderD.value+" KM"
let slider3=()=>{
    if ( parseInt(sliderD.value)- parseInt(sliderC.value)<=minGap) {
        sliderC.value= parseInt(sliderD.value)-minGap;
    };

    minRange2.innerHTML=sliderC.value + " KM";
}
const slider4=()=>{
    if ( parseInt(sliderD.value)- parseInt(sliderC.value)<=minGap) {
        sliderD.value= parseInt(sliderC.value)+minGap;
    };
    maxRange2.innerHTML=">"+ sliderD.value+" KM";
}

let sold=document.querySelector(".sold");
let stock=document.querySelector(".stock");
console.log(stock);