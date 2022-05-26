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
    let keyboard = document.querySelectorAll('.keyboard')

    for(let i = 0; i < gameKeyboard.length; i++) {
        document.querySelector('.game-keyboard').innerHTML += `<button class="keyboard" onclick="teste()">${gameKeyboard[i].toLocaleUpperCase()}</button>`
    }

    

}
function teste() {
    console.log('opa')
    //Vai pegar a letra digitada no teclado, armazenar em uma variavel e enviar a variavel para check(), se a letra for igual a uma letra da palvra a letra aparece na tela como correta, caso contrário, aparecera a letra indicando que estava incorreta e uma parte do corpo do homem na forca.

}
function ramdonWords() {
    let ramdonIndex = Math.floor(Math.random() * words.length)
    ramdonWord = words[ramdonIndex].split('')
    console.log(ramdonWord)
    return ramdonWord
  

    //Funciona quando inicia o game
    //armazena a palavra splitada
    //
}

function check() {
    let randomWord = ramdonWords()
    let letra = 'a'
    console.log('palavra:',randomWord)
    console.log('letra:', letra)

    let i = 0
    while( i <= randomWord.length){
        if(letra == randomWord[i]){
            console.log('certo')
            console.log('lugar:', i)
            //Mostra se a letra está correta na tela
        } else {
            console.log('errado')
            //Mostra se a letra está correta na tela mostra a letra incorreta e desenha parte do homem na forca
        }
        i++
    }
  
}
