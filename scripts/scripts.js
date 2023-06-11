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