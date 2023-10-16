const left1 = document.getElementsByClassName('left1');
const right1 = document.getElementsByClassName('right1');
const center1 = document.getElementsByClassName('center1');

for (let index = 0; index < left1.length; index++) {
    const element = left1[index];
    element.addEventListener('mouseenter', function () {
        element.style.backgroundColor='red';
        
    })
    element.addEventListener('mouseleave', function () {
        element.style.backgroundColor='blue';
        element.innerHTML="Left";
    })
}


for (let index = 0; index < right1.length; index++) {
    const x = right1[index];
    x.addEventListener('mouseenter', function () {
        x.style.backgroundColor='green';

    })
    x.addEventListener('mouseleave', function () {
        x.style.backgroundColor='rgb(0, 110, 255)';
        x.innerHTML="Right";
    })
}


for (let index = 0; index < center1.length; index++) {
    const y = center1[index];
    y.addEventListener('mouseenter', function () {
        y.style.backgroundColor='salmon';
        
    })
    y.addEventListener('mouseleave', function () {
        y.style.backgroundColor=' rgb(81, 81, 184)';
        y.innerHTML="Center"
    })
}
// for (let index = 0; index < li.length; index++) {
//     const element = li[index];
//     element.style.backgroundColor="blue";
//     element.innerHTML="kiri";
// }

// const btn1= document.getElementById("btn1");

// btn1.addEventListener('click', function () {
//     for (let index = 0; index < li.length; index++) {
//         li[0].style.backgroundColor="red";
// }
// })

// li[0].addEventListener('mouseenter', function () {
//     li[0].innerHTML="kanan";
// })

// li[0].addEventListener('mouseleave', function () {
//     li[0].innerHTML="mati";
//     li[0].style.backgroundColor='lightblue';
// })

// const content = getElementsByClassName('content');

// content.addEventListener('mouseenter', function(){

    

// })

