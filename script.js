let item1 = document.getElementById('item1')
let item2 = document.getElementById('item2')
let item3 = document.getElementById('item3')
let round = document.getElementById('round')
let value = ['😁','🤣','😎','😍','😘','😗','🤔']

function emojiCreator(){
    console.log(Math.random()*7)
    return value[parseInt(Math.random()*7)]
}
let stopAnimation

(function(){
let stop = 0

    stopAnimation = setInterval(()=>{
        stop++
        console.log(stop)
        round.value = stop
        if(stop == 100){
         clearInterval(stopAnimation)
            window.alert('you lose')
        }
        item1.innerText = emojiCreator()
        item2.innerText = emojiCreator()
        item3.innerText = emojiCreator()
        if(item1.innerText == item2.innerText && item2.innerText== item3.innerText){
         clearInterval(stopAnimation)
         window.alert('you win')}
    },300)
   
})()
