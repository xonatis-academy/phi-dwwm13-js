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
