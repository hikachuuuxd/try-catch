// console.log('running!')

const options = ['GUNTING', 'BATU', 'KERTAS']

let x = Math.floor((Math.random() * 3 ));
let y = Math.floor((Math.random() * 3 ));

const player_one = [options[x]]
const player_two = [options[y]]



function getWinner(x, y){
    let result;
    
    if(x == y){
        result = 'SERI'
    }else if(x == 0 && y == 2 || x == 1 && y == 0 || x == 2 && y == 1){
        result = 'PLAYER 1 MENANG'
    }else{
        result = 'PLAYER 2 MENANG'
    }
    return result
}

console.log([
    {player_one : options[x],
     player_two: options[y],
     result: getWinner(x, y)   
    }
])