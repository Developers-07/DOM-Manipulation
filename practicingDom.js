const button = document.getElementById('btn');
const card = document.getElementsByClassName('container')[0];

console.log(button);
console.log(card);


button.addEventListener('click', () => {
    console.log("Button is Clicked");

    if(card.style.display == "block"){
        card.style.display = "none";
        button.innerText = "Show Card";
    }
    else{
        card.style.display = "block";
        button.innerText = "Hide Card";
    }
})


