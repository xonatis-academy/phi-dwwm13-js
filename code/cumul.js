/*
Ecrire une fonction qui cumul d'un tab
*/

function cumuler(tab)
{
    let resultat = 0;
    for (const element of tab)
    {
        resultat = resultat + element;
    }
    return resultat;
}
