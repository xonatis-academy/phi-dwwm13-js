'''
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
'''

def compter(tab):
    compte = 0
    for element in tab:
        if element >= 18:
            compte = compte + 1
    return compte