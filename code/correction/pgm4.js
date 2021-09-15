function verifier(x)
{
    /*
    @Si x <= 30
        @DebutBloc
        @Retourner Vrai
        @FinBloc
    @Sinon
        @DebutBloc
        @Retourner Faux
        @FinBloc
    */

    if (x <= 30)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let test = verifier(40);