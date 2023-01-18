// variables
const biscuitPhrases = [
    'A vida trará coisas boas se tiver paciência',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si',
    'Não compense na ira o que lhe falta na razão',
    'Se alguém está tão cansado que não possa lhe dar um sorriso, deixa-lhe o teu'
]
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const biscuitToOpen = document.querySelector('img.closedBiscuit')
const buttonReset = document.querySelector('button')
let phrasesField = document.querySelector('p.phrasesField')
let randomPhrase = Math.round(Math.random() * biscuitPhrases.length)

// events
biscuitToOpen.addEventListener('click', handleClickBiscuit)
buttonReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        toggleScreen()
    }
})

function handleClickBiscuit(event) {
    toggleScreen()
    phrasesField.innerText = biscuitPhrases[randomPhrase]
}

function handleResetClick() {
    toggleScreen()
    phrasesField.innerText = ''
    randomPhrase = Math.floor(Math.random() * biscuitPhrases.length)
}

function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}