

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
function drawHangManHead() {
    var tela = document.querySelector('canvas')
    var pincel = tela.getContext('2d')

    pincel.beginPath();
    pincel.arc(180, 41, 12, 0, 2*3.14);
    pincel.fill();
}
function drawHangManBody() {
    var tela = document.querySelector('canvas')
    var pincel = tela.getContext('2d')
    pincel.fillStyle = 'black'
    pincel.fillRect(180, 16, 2 , 80 )
}
function drawHangManLftArm(){
    var tela = document.querySelector('canvas')
    var pincel = tela.getContext('2d')
    pincel.fillStyle = 'black'
    pincel.beginPath()
    pincel.moveTo(180, 58);
    pincel.lineTo(200, 80);
    pincel.stroke()
}
function drawHangManRgtArm(){
    var tela = document.querySelector('canvas')
    var pincel = tela.getContext('2d')
    pincel.fillStyle = 'black'
    pincel.beginPath()
    pincel.moveTo(180, 58);
    pincel.lineTo(160, 80);
    pincel.stroke()
}
function drawHangManLftLeg(){
    var tela = document.querySelector('canvas')
    var pincel = tela.getContext('2d')
    pincel.fillStyle = 'black'
    pincel.beginPath()
    pincel.moveTo(180, 95);
    pincel.lineTo(200, 115);
    pincel.stroke()
}
function drawHangManRgtLeg(){
    var tela = document.querySelector('canvas')
    var pincel = tela.getContext('2d')
    pincel.fillStyle = 'black'
    pincel.beginPath()
    pincel.moveTo(180, 95);
    pincel.lineTo(160, 115);
    pincel.stroke()
}
// function addKeyboard () {
//     let keyboard = document.querySelectorAll('.keyboard')

//     for(let i = 0; i < gameKeyboard.length; i++) {
//         document.querySelector('.game-keyboard').innerHTML += `<button class="keyboard" onclick="teste()">${gameKeyboard[i].toLocaleUpperCase()}</button>`
//     }

    

// }
function ramdonWords() {
    let ramdonIndex = Math.floor(Math.random() * words.length)
     ramdonWord = words[ramdonIndex].split('')
    // console.log(ramdonWord)
   
    addUnderline(ramdonWord)
    return ramdonWord
    //Funciona quando inicia o game
    //armazena a palavra splitada
    //
}

function teste() {

    let input = document.querySelector('.analog-keyboard input')
   
    let text = input.value
    console.log(text)
    check(text)
    //Vai pegar a letra digitada no teclado, armazenar em uma variavel e enviar a variavel para check(), se a letra for igual a uma letra da palvra a letra aparece na tela como correta, caso contrário, aparecera a letra indicando que estava incorreta e uma parte do corpo do homem na forca.

}
let opaa = 0
function check(letra) {
    let randomWord = ramdonWord
     letra 
    console.log('palavra:',randomWord)
    console.log('letra:', letra)
    let opa = document.querySelectorAll('.underline-letra')
  
    
    let verify = ramdonWord.indexOf(letra)
    console.log(verify)

  
    if(verify == -1) {
       opaa++
       console.log('asdasdsad',opaa)
       switch(opaa){
           case 1:
               drawHangManHead();
               break;
            case 2: 
                drawHangManBody();
                break;
            case 3:
                drawHangManLftArm();
                break;
            case 4: 
                drawHangManRgtArm();
                break;
            case 5: 
                drawHangManLftLeg();
                break;
            case 6: 
                drawHangManRgtLeg();
                break;
            // case 7: 
                //gameOver();
                //break;
       }
        
    } else {
        let i = verify
        opa[i].innerHTML = letra 
    }


    // while( i <= randomWord.length){
      
    //     if(letra == randomWord[i]){
    //         // console.log('certo')
    //         // console.log('lugar:', i)

    //         //Mostra se a letra está correta na tela
    //         console.log(opa[i])
    //         opa[i].innerHTML = letra 
         
    //         verify++ 
           
    //     } else if(verify == 0 ) {
    //         console.log('errado')
    //         // let erros = 0 
    //         drawHangManHead()
    //         // erros++
    //         // switch(erros){
    //         //     case 1:
    //         //         drawHangManHead()
    //         //         break;
    //         // }
           
    //         //Mostra se a letra está correta na tela mostra a letra incorreta e desenha parte do homem na forca
    //     }
    //     i++
    // }
  
}

function addUnderline(a) {
    a
    for(let i = 0; i < a.length;i++) { 
        document.querySelector('.text').innerHTML += `<div class="underline-letra">${' '}</div>`
    }
}