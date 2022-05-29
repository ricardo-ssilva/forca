const button = document.querySelectorAll('button')
const play = button[0]
const addWords = button[1]
let loseCount = 0

let gameKeyboard = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// function addKeyboard () {
//     let keyboard = document.querySelectorAll('.keyboard')

//     for(let i = 0; i < gameKeyboard.length; i++) {
//         document.querySelector('.game-keyboard').innerHTML += `<button class="keyboard" onclick="teste()">${gameKeyboard[i].toLocaleUpperCase()}</button>`
//     }

    

// }


//Words list

let words = ['desafio', 'alura','teste','codigo','logica','foco','programa','jogo','dia','noite']
let ramdonWord = ' '


//click events
play.onclick = gameInit
addWords.onclick = addWord

//Game functions
function gameInit() {
    removeMenuButtons()
    addTable()
    ramdonWords()
    teste()
}
function addWord(){
    removeMenuButtons()
    document.querySelector('.add-word').style.display = 'block'
 

}
function opa(){ 
     
    let input = document.querySelector('.add-word input')
 
  let text = input.value
  words.push(text)
  console.log(text)
  console.log(words)
}

function removeMenuButtons() {
    document.querySelector('.btn-play').style.opacity = 0  
    document.querySelector('.btn-addword').style.opacity = 0  

    setTimeout(() => {
        document.querySelector('.btn-play').style.display = 'none'
        document.querySelector('.btn-addword').style.display = 'none'
    }, 300)
}
function addTable() {
    document.querySelector('canvas').style.display = 'block'
    document.querySelector('.game-keyboard').style.display = 'flex'
    setTimeout(()=> {
         document.querySelector('canvas').style.opacity = 1
         document.querySelector('.game-keyboard').style.opacity = 1
        drawHang()
        // addKeyboard()
    }, 500)
}
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

    // let input = document.querySelector('.analog-keyboard input')
   
    // let text = input.value
    // console.log(text)
    // check(text)
    //Vai pegar a letra digitada no teclado, armazenar em uma variavel e enviar a variavel para check(), se a letra for igual a uma letra da palvra a letra aparece na tela como correta, caso contrário, aparecera a letra indicando que estava incorreta e uma parte do corpo do homem na forca.

  
    let text = ' '
    document.addEventListener("keyup", (event)=>{
        let input = event.key
        let verifyInput = gameKeyboard.indexOf(input)
    
        console.log('yaaaaaaa:',verifyInput)
        
        if(verifyInput != -1) {
             text = input
        
        }
        check(text)
       
    })



}

function check(letra) {
    let opa = document.querySelectorAll('.underline-letra')


    var indices = [];
    var array = ramdonWord;
    var elemento = letra;
    var idx = array.indexOf(elemento);
    while (idx != -1) {
      indices.push(idx);
      idx = array.indexOf(elemento, idx + 1);
    }
    console.log(indices);

    
     idx = ramdonWord.indexOf(letra)
    console.log(idx)

  
    if(idx == -1) {
        loseCount++
       console.log('asdasdsad',loseCount)
       switch(loseCount){
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
            case 7: 
                gameOver();
                break;
       }
        
    } else {
           
        let i = 0
        while(i < indices.length) {
            opa[indices[i]].innerHTML = letra
            i++
        }

   
    }
  
}

function addUnderline(a) {
    a
    for(let i = 0; i < a.length;i++) { 
        document.querySelector('.text').innerHTML += `<div class="underline-letra">${' '}</div>`
    }
}

function gameOver(){
    alert('Game Over')
    document.location.reload(true)


}


//Notepad functions
function writeDate () {

    //day - month - year
    let date = new Date ()
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear()
  

    document.querySelector('.dia').innerHTML = day
    document.querySelector('.mes').innerHTML = month
    document.querySelector('.ano').innerHTML = year

    //day of week
    let dayweek = date.getDay()
    switch(dayweek){
        case 1: 
        document.querySelector('.mon').style.backgroundColor = "black" ;
        break;
        case 2:
            document.querySelector('.tue').style.backgroundColor = "black"
            break;
        case 3:
            document.querySelector('.wed').style.backgroundColor = "black"
            break;
        case 4:
            document.querySelector('.thu').style.backgroundColor = "black"
            break;
        case 5:
            document.querySelector('.fry').style.backgroundColor = "black"
            break;
        case 6:
            document.querySelector('.sat').style.backgroundColor = "black"
            break;
        case 0:
            document.querySelector('.sun').style.backgroundColor = "black"
            break;
    }
}
writeDate()

