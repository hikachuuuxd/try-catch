// console.log('running!')

// function getWinner(x, y){
//     let result;
    
//     if(person == y){
//         result = 'SERI'
//     }else if(x == 0 && y == 2 || x == 1 && y == 0 || x == 2 && y == 1){
//         result = 'PLAYER 1 MENANG'
//     }else{
//         result = 'PLAYER 2 MENANG'
//     }
//     return result
// }

const items = document.getElementsByClassName("items");

for(let i = 0; i < items.length; i++){
    items[i].addEventListener("click",  () => resultGame(i))
}
const options = ['GUNTING', 'BATU', 'KERTAS']
const res = document.getElementById('result')
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')

function resultGame(person){
let result;
const computer = Math.floor((Math.random() * 3 ));

    if(person == computer ){
        result = 'SERI'
    }else if(person == 0 && computer == 2 || person == 1 && computer == 0 || person == 2 && computer == 1){
        result = 'KAMU MENANG!'
    }else{
        result = 'KOMPUTER MENANG'
    }

    player1.innerText = '-'
    player2.innerText = '-'
    setTimeout(()=> {
        player1.innerHTML = options[person]
        player2.innerHTML = options[computer]
    }, 500)
    res.innerText = '-'
    setTimeout(() => res.innerHTML = result, 1000);
   
}
