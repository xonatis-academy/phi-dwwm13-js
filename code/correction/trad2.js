/*
resultat <- 0
@PourChaque element @Dans tab
    @DebutBloc
    @Si element > 90
        @DebutBloc
        @Stop
        @FinBloc
    @Sinon
        @DebutBloc
        resultat <- resultat + 1
        @FinBloc
@FinBloc
*/

function compterJusqua90(tab)
{
    let resultat = 0;
    for (const element of tab)
    {
        if (element > 90)
        {
            break;
        }
        else
        {
            resultat = resultat + 1;
        }
    }
    return resultat;
}

let test = compterJusqua90([4, 3, 2, 91, 2, 3, 100]);


