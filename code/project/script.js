function addToInput(event)
{
    let button = event.target;
    let element = document.getElementById('typing-input');
    element.value = element.value + button.innerHTML; 
}

let buttons = document.querySelectorAll('.add-btn');
for (const element of buttons)
{
    element.addEventListener('click', addToInput);
}

// ====================================

function showResult()
{
    let input = document.getElementById('typing-input');
    let contenu = input.value;

    let result = eval(contenu);
    let div = document.getElementById('result-div');
    div.innerHTML = result;
}

let buttonEqual = document.getElementById('equal-btn');
buttonEqual.addEventListener('click', showResult);

// ====================================
// 1. Faire la fonction pour effacer l'input
// 2. Binder cette fonction au click du bouton "C"

function deleteInput()
{
    /*
    @Selectionner l'element d'id typing-input
    element.value <- ''
    */

    let element = document.getElementById('typing-input');
    element.value = '';
}

// @Selectionner l'element d'id clear-btn
let buttonClear = document.getElementById('clear-btn');
// On bind deleteInput à l'événement click du bouton
buttonClear.addEventListener('click', deleteInput);


// ====================================
// 1. Faire une fonction qui change le signe du contenu de l'input
// 2. Binder cette fonction au click du bouton "+/-"

function reverseSign()
{
    /*
    element <- @Selectionner l'element d'id typing-input
    texteQueContientLElement <- on récupère la valeur de l'élément
    resultat <- on calcul le résultat de texteQueContientLElement
    resultat <- resultat * -1
    element.value <- resultat
    */

    let element = document.getElementById('typing-input');
    let texteQueContientLElement = element.value;
    let resultat = eval(texteQueContientLElement);
    resultat = resultat * -1;
    element.value = resultat;
}

let buttonSwitch = document.getElementById('swiswi');
buttonSwitch.addEventListener('click', reverseSign);
