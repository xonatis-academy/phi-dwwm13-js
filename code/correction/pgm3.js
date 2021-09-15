function reduction(prix)
{
    /*
    ALGO 1:
    resultat <- prix * 0.8
    @Retourner resultat
    */

    /*
    ALGO 2:
    reduction <- prix * 0.2
    resultat <- prix - reduction
    @Retourner resultat
    */

    let resultat = prix * 0.8;
    return resultat;
}

let test = reduction(100);