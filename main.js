const board = document.getElementById('board');
const SQUARES_NUMBER = 500

const colors = ['#f7dd88de', '#aef380cc', '#80f39dcc', '7bf7e2cc', '#83e2ffda', '#fa9feeda']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')


    square.addEventListener('mouseover', ()=>{
        setColor(square)
    })

    square.addEventListener('mouseleave', ()=>{
        removeColor(square)
    })

    // добавить в главный html - контейнер
    board.append(square)
}


function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 30px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    const random =  Math.floor(Math.random() * colors.length)
    return colors[random]
}