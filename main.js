
function drawRows(){
    let screenHeight = document.querySelector('.notepad').clientHeight
    let qtdRows = Math.floor(screenHeight / 40)

    for(let i = 0; i <= qtdRows; i++){
        document.querySelector('.notepad-rows').innerHTML += `<div class="rows"> <br>`
    
    }
}
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
setInterval(drawRows, 500)