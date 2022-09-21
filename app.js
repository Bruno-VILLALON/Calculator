// Je récupère les éléments du DOM
const keys = [...document.querySelectorAll('.key')];
const keycodeList = keys.map(key => key.dataset.key);
const screen = document.querySelector('.screen');


//J'écoute les événements à la pression des touches du clavier
document.addEventListener('keydown', (event) =>{
    const value = `${event.key}`;
    //console.log(value, typeof value);
    calc(value);
})

//J'écoute les événements au clic
document.addEventListener('click', (event) =>{
    const value = event.target.dataset.key;
    //console.log(value, typeof value);
    calc(value);
})


//FONCTION pour Calculer
const calc = (value) => {
    //SI "value" est bien inclus dans "keycodeList"
    if (keycodeList.includes(value)) {
        //ALORS
        switch (value) {
            //dans le cas où "value = Backspace"
            case 'Backspace':
                //j'affiche une chaîne de caractère VIDE
                screen.textContent = "";
                break;
            //dans le cas où "value = Enter"
            case 'Enter':
                //je récupère ce qu'il y a dans "screen"
                const calcul = eval(screen.textContent);
                //et j'affiche le résultat dans "screen"
                screen.textContent = calcul;
                break;
            //dans tous les autres cas
            default:
                //je récupère l'index de la touche
                const keycodeIndex = keycodeList.indexOf(value);
                //je défini la valeur de la touche en fonction de l'index
                const key = keys[keycodeIndex];
                //j'affiche dans "screen" la valeur de la touche
                screen.textContent += key.innerHTML;
        }
    }
    //Je modifie la taille de la police en fonction du nombre de caractère
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

//J'affiche les erreurs dans "screen"
window.addEventListener('error', (event) => {
    screen.textContent = event.message
})