document.addEventListener('keydown', function (event) {
    // let key = event.key;
    // let arr = [];
    // arr.push(key);

    let pressedKey = event.key;

    let virtualKey = document.querySelector('.key[data-key="' + pressedKey + '"]');


    if (virtualKey) {
        virtualKey.classList.add('matched');
    }
})

const testElement = document.getElementById('test-data');
const inputElement = document.getElementById('keyboard');

inputElement.addEventListener('input', () => {
    const arrayText = testElement.querySelectorAll('span')
    const arrayValue = inputElement.value.split('')

    let correct = true
    arrayText.forEach((characterSpan, index) => {
        const character = arrayValue[index]
        if (character == null) {
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
            correct = false
        } else if (character === characterSpan.innerText) {
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        } else {
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
            correct = false
        }
    })

})




testElement.split('').forEach(character => {
    const characterSpan = document.createElement('span')
    characterSpan.innerText = character
    testElement.appendChild(characterSpan)
})
inputElement.value = null
startTimer()
