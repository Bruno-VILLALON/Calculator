const keys = [...document.querySelectorAll('.key')];
const keycodeList = keys.map(key => key.dataset.key);
const screen = document.querySelector('.screen');

document.addEventListener('keydown', (event) =>{
    const value = `${event.key}`;
    //console.log(value, typeof value);
    calc(value);
})

document.addEventListener('click', (event) =>{
    const value = event.target.dataset.key;
    //console.log(value);
    calc(value);
})

const calc = (value) => {
    if (keycodeList.includes(value)) {
        switch (value) {
            case 'Backspace':
                screen.textContent = "";
                break;
            case 'Enter':
                const calcul = eval(screen.textContent);
                screen.textContent = calcul;
                break;
            default:
                const keycodeIndex = keycodeList.indexOf(value);
                const key = keys[keycodeIndex];
                screen.textContent += key.innerHTML;
        }
    }

    if (screen.textContent.length <= 6) {
        screen.style.fontSize = '4rem'
    }
    if (screen.textContent.length > 6) {
        screen.style.fontSize = '3rem'
    }
    if (screen.textContent.length > 8) {
        screen.style.fontSize = '2rem'
    }
    if (screen.textContent.length > 12) {
        screen.style.fontSize = '1.5rem'
    }
}

window.addEventListener('error', (event) => {
    screen.textContent = event.message
})


