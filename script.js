const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')
turnOn.addEventListener('click', lampOn)
function lampOn() {
    lamp.src = './img/ligada.jpg'
}
turnOff.addEventListener('click', lampOff)
function lampOff() {
    lamp.src = './img/desligada.jpg'
}
lamp.addEventListener('dblclick', lampBroken)
const button = document.querySelectorAll('button')
const buttons = document.getElementById('invisible')
console.log(buttons);
function lampBroken () {
    lamp.src = './img/quebrada.jpg'
    button[0].setAttribute('hidden', 'hidden')
    button[1].setAttribute('hidden', 'hidden')
    buttons.removeAttribute('hidden', '')
    console.log(buttons);
    buttons.addEventListener('click', concertar)
    function concertar() {
        lamp.src = './img/desligada.jpg'
        button[0].removeAttribute('hidden')
        button[1].removeAttribute('hidden')
        buttons.setAttribute('hidden', 'hidden')
    }
}





