function compterNombreMajeurs(tab)
{
    let compte = 0;
    
    
    for (const element of tab)
    {
        if (element >= 18)
        {
            compte = compte + 1;
        }
    }

    return compte;
}

let test = compterNombreMajeurs([23, 13, 33, 43]);