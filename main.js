
function drawRows(){
    let screenHeight = document.querySelector('.notepad').clientHeight
    let qtdRows = Math.floor(screenHeight / 40)

    for(let i = 0; i <= qtdRows; i++){
        document.querySelector('.notepad-rows').innerHTML += `<div class="rows"> <br>`
    
    }
}

function writeDate () {
    let data = new Date ()
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear()
    let diaSemana = data.getDay()

    switch(diaSemana){
        case 0: 
        document.querySelector('#dom').checked = true;
        break;
        case 1:
            document.querySelector('#seg').checked = true;
            break;
        case 2:
            document.querySelector('#ter').checked = true;
            break;
        case 3:
            document.querySelector('#qua').checked = true;
            break;
        case 4:
            document.querySelector('#qui').checked = true;
            break;
        case 5:
            document.querySelector('#sex').checked = true;
            break;
        case 6:
            document.querySelector('#sab').checked = true;
            break;
    }

    document.querySelector('.dia').innerHTML = dia
    document.querySelector('.mes').innerHTML = mes
    document.querySelector('.ano').innerHTML = ano
}
writeDate()
drawRows()