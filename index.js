let SaveEL = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)


let count = 0

function countingpeople (){
    count = count + 1
    // console.log(count)
    countEl.textContent = count
}

function save(){
    console.log(count)
    SaveEL.textContent += count + " - "
    countEl.textContent = 0
    count = 0
}


