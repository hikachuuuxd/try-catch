function generate(random_satu, random_dua){
const ff = ['a', 'b', 'c', 'd', 'e', 'f']
const angkaX = [random_dua, parseInt(random_satu[0]) ? parseInt(random_satu[0]) : 1, parseInt(random_satu[1]) ? parseInt(random_satu[1]) : 0]
const hurufX = [random_dua > 5 ? ff[1] : ff[random_dua], ff[parseInt(random_satu[0]) > 5 ? 0 : parseInt(random_satu[0])], ff[parseInt(random_satu[1]) > 5 || !parseInt(random_satu[1]) ? 1 : parseInt(random_satu[1])]]
const angkaY = [...angkaX].map(e => e % 2 + e < 10 ? e % 2 + e : e);
const hurufY = []

for(let i = 0; i < 3; i ++){

    if(angkaY[i] > 5){
        hurufY.push(ff[0])
    }else{
        hurufY.push(ff[angkaY[i]])
    }
}

let red;
let green;
let blue;

const genap = parseInt(random_satu) % random_dua % 2 == 0

if(parseInt(random_satu) > random_dua){
    if(genap){
        red = `${angkaX[0]}${angkaY[0]}`
        green = `${angkaX[1]}${angkaY[1]}`
        blue = `${angkaX[2]}${angkaY[2]}`
    }else{
        red = `${hurufX[0]}${hurufY[0]}`
        green = `${hurufX[1]}${hurufY[1]}`
        blue = `${hurufX[2]}${hurufY[2]}`
    }

}else if(parseInt(random_satu) < random_dua){

    if(genap){
        red = `${angkaX[0]}${angkaY[0]}`
        green = `${angkaX[1]}${angkaY[1]}`
        blue = `${angkaX[2]}${hurufY[2]}`
    }else{
        red = `${hurufX[0]}${hurufY[0]}`
        green = `${hurufX[1]}${hurufY[1]}`
        blue = `${hurufX[2]}${angkaY[2]}`
    }
}else{

    if(genap){
        red = `${angkaX[0]}${angkaY[0]}`
        green = `${angkaX[1]}${hurufY[1]}`
        blue = `${angkaX[2]}${hurufY[2]}`
    }else{
        red = `${hurufX[0]}${hurufY[0]}`
        green = `${hurufX[1]}${angkaY[1]}`
        blue = `${hurufX[2]}${angkaY[2]}`
    }
}

const hexacode = '#' + red + green + blue
return hexacode
}

// console.log(generate(random_satu, random_dua))

const body = document.getElementsByTagName('BODY')[0]
const button = document.getElementById('button-satu')
const reset = document.getElementById('button-dua')

button.addEventListener('click', () => {
    const date = new Date()
    let seconds = date.getMilliseconds()
    const random_satu = seconds.toString().split('')
    const random_dua = Math.round(Math.random() * 9)

    const hexacode = generate(random_satu, random_dua)
    body.style.backgroundColor = hexacode
    button.style.color = hexacode
})

reset.addEventListener('click', () => {
    body.style.backgroundColor = 'white'
    button.style.color = 'black'
})