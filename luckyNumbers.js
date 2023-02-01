const randy = () => Math.floor(Math.random()*10)+1

const luckNumbers = (n) => {
    let x = 0
    arr = []
    while (x < n){
        a = randy()
        if(arr.includes(a) === false){
            arr.push(a)
            x++
        }
    }
    return arr
}

for (let i = 0; i < randy(); i ++){
    console.log(luckNumbers(randy()))
}

