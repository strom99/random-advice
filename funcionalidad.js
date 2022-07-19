const respDiv = document.querySelector(".message");
const resButton = document.querySelector(".generador");
const span = document.querySelector(".id-advice");

resButton.addEventListener('click', function () {
    responseButton();
})

window.addEventListener('load', function () {
    responseButton();
});


const interruptor = document.querySelector(".interruptor");
const icono = document.querySelector(".icon");
function responseButton() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => {
            interruptor.style.display = "flex";
            icono.style.display = "flex";
            
            return response.json();
        }).then(adviceData => {
            const adviObject = adviceData.slip.advice;
            const number = adviceData.slip.id;
            setTimeout(function () {
                interruptor.style.display = "none";
                icono.style.display = "none";
                respDiv.innerHTML = adviObject;
                span.innerHTML = number;   
            }, 1000);
        }).catch(error => {
            console.log({
                error
            });
        })
}