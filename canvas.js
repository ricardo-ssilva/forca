let gameKeyboard = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

let words = ['desafio', 'alura','teste','codigo','logica','foco','programa','jogo','dia','noite']



//draw hang 
function drawHang() {
    var tela = document.querySelector('canvas')
    var pincel = tela.getContext('2d')

    pincel.fillStyle = 'black'
    pincel.fillRect(130, 16, 4, 118)
    pincel.fillRect(130, 16, 50, 3)
    pincel.fillRect(180, 16, 2 ,25 )
    pincel.fillRect(95, 133, 110, 3)
}
function addKeyboard () {
    for(let i = 0; i < gameKeyboard.length; i++) {
        document.querySelector('.game-keyboard').innerHTML += `<button class="keyboard">${gameKeyboard[i].toLocaleUpperCase()}</button>`
    }
    let keyboard = document.querySelectorAll('.keyboard')
    console.log(keyboard[14])
}
