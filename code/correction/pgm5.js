/*
Problème : Veuillez écrire une fonction qui compte le nombre de personnes majeurs dans une liste donc qui :
prend 1 tableau d'ages en entrée
retourne le nombre total de personnes majeurs

Exemple :
Pour les données suivantes par exemple : [15, 12, 18, 19, 43, 13, 16, 53]
La fonction doit retourner : 4
car il y a 4 personnes dont l'age dépasse l'age requis pour etre majeur
*/

// TIPS : comment savoir s'il faut une boucle :
// Est-ce qu'on doit parcourir le tableau pour ...

function compterNombreMajeurs(tab)
{
    /*
    ALGO 1 :

    compte <- 0
    @PourChaque element @Dans tab
        @DebutBloc
        
        // TIPS : NE PAS OUBLIER : vous ne voyez que "element" !!!

        @Si element >= 18
            @DebutBloc
            // TIPS : l'accumulation, pour les comptes et les sommes
            compte <- compte + 1
            @FinBloc

        @FinBloc

    @Retourner compte
    */

    let compte = 0;
    for (const element of tab)
    {
        if (element >= 18)
        {
            compte = compte + 1;
        }
    }

    return compte;

    /*
    ALGO 2:
    
    tabMajeur <- []
    @PourChaque element @Dans tab
        @DebutBloc

        @Si element >= 18
            @DebutBloc
            Ajouter element dans tabMajeur
            @FinBloc

        @FinBloc

    compte <- 0
    @PourChaque element @Dans tabMajeur
        @DebutBloc
        compte <- compte + 1
        @FinBloc

    @Retourner compte
    */
}

let test = compterNombreMajeurs([23, 13, 33, 43]);