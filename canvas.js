

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
