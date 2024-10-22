const bt1 = document.getElementById('btn1');
console.log(btn1);
const bt2 = document.getElementById('btn2');
const bt3 = document.getElementById('btn3');
let counter = document.getElementsByTagName('span')[0];
console.log(counter)
let num = 0;
bt1.addEventListener('click', () => {
    num++;
    counter.innerText = num;
})

bt2.addEventListener('click', () => {
    num = 0;
    counter.innerText = num;
})

bt3.addEventListener('click', () => {
    num--;
    counter.innerText = num;
})