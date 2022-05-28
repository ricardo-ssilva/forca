const button = document.querySelectorAll('button')
const play = button[0]
const addWords = button[1]

//click events
play.onclick = gameInit
addWords.onclick = removeMenuButtons

//Game functions
function gameInit() {
    removeMenuButtons()
    addTable()
    ramdonWords()
   
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

