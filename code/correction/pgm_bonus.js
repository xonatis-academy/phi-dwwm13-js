/*
Problème : Veuillez écrire une fonction qui trie une liste de tailles (S, M, L et XL) du plus petit au plus grand donc qui :
prend 1 tableau en entrée (liste des tailles S, M, L ou XL)
retourne le tableau trié du plus petit au plus grand.

Exemple :
Pour les données suivantes par exemple : ['M', 'M', 'S', 'XL', 'L', 'XL', 'S', 'M', 'XL', 'S']
La fonction doit retourner : ['S', 'S', 'S', 'M', 'M', 'M', 'L', 'XL', 'XL', 'XL']
*/

function trier(tab)
{
    /*
    compteS <- 0
    compteM <- 0
    compteL <- 0
    compteXL <- 0

    @PourChaque element @Dans tab
        @DebutBloc
        @Si element = 'S'
            @DebutBloc
            compteS <- compteS + 1
            @FinBloc
        @Si element = 'M'
            @DebutBloc
            compteM <- compteM + 1
            @FinBloc
        @Si element = 'L'
            @DebutBloc
            compteL <- compteL + 1
            @FinBloc
        @Si element = 'XL'
            @DebutBloc
            compteXL <- compteXL + 1
            @FinBloc
        @FinBloc

    casierEntier <- []

    @Pour compteS @fois
        @DebutBloc
        Ajouter 'S' dans casierEntier
        @FinBloc

    @Pour compteM @fois
        @DebutBloc
        Ajouter 'M' dans casierEntier
        @FinBloc

    @Pour compteL @fois
        @DebutBloc
        Ajouter 'L' dans casierEntier
        @FinBloc

    @Pour compteXL @fois
        @DebutBloc
        Ajouter 'XL' dans casierEntier
        @FinBloc

    @Retourner casierEntier
    */

    let compteS = 0;
    let compteM = 0;
    let compteL = 0;
    let compteXL = 0;
    
    for (const element of tab)
    {
        if (element == 'S')
        {
            compteS = compteS + 1;
        }
        if (element == 'M')
        {
            compteM = compteM + 1;
        }
        if (element == 'L')
        {
            compteL = compteL + 1;
        }
        if (element == 'XL')
        {
            compteXL = compteXL + 1;
        }
    }

    let casierEntier = [];

    for (let i = 0; i < compteS; ++i)
    {
        casierEntier.push('S');
    }

    for (let i = 0; i < compteM; ++i)
    {
        casierEntier.push('M');
    }

    for (let i = 0; i < compteL; ++i)
    {
        casierEntier.push('L');
    }

    for (let i = 0; i < compteXL; ++i)
    {
        casierEntier.push('XL');
    }

    return casierEntier;
}