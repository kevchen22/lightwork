const btn = document.querySelector('button')
const image = document.querySelector('img')
let light = true

function changePicture(){
    // if (light) {
    //     image.src = 'images/onbulb.png'
    //     light = false
    //     // btn.addEventListener('click', changePicture)
    // } else {
    //     image.src = 'images/offbulb.png'
    //     light = true
    //     // btn.addEventListener('click', changePicture)
    // }
    
}
btn.addEventListener('click', changePicture)