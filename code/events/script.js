function changerCouleur()
{
    // 1. On sélectionne l'élément du DOM
    // let item = document.getElementById('titre1');
    let items = document.querySelectorAll('.titre-rouge');
    // 2.On lui attribut la couleur rouge
    
    /*
    @Si couleur = 'rouge'
        @DebutBloc
        couleur <- 'noir'
        @FinBloc
    @Sinon
        @DebutBloc
        couleur <- 'rouge'
        @FinBloc
    */

    if (items[0].style.color == 'red')
    {
        items[0].style.color = 'black';
    }
    else
    {
        items[0].style.color = 'red';
    }
}

// 1. Selectionner le bouton
let items = document.querySelectorAll('button');
// 2. Binding la fonction changerCouleur au click du bouton
let element = items[0];
element.addEventListener('click', changerCouleur);

