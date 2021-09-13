function changerCouleur()
{
    // 1. On sélectionne l'élément du DOM
    // let item = document.getElementById('titre1');
    let items = document.querySelectorAll('.titre-rouge');
    // 2.On lui attribut la couleur rouge
    items[0].style.color = 'red';
}

setTimeout(changerCouleur, 5000);

