
function drawRows(){
    let screenHeight = document.querySelector('.notepad').clientHeight
    let qtdRows = Math.floor(screenHeight / 40)

    for(let i = 0; i <= qtdRows; i++){
        document.querySelector('.notepad-rows').innerHTML += `<div class="rows"> <br>`
    
    }
}

function date () {
    
}
drawRows()