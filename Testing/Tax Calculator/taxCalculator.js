function taxCalculator(income, saving){

    if(saving > income){
        return "Saving can't be greater than income" ;
    }

    if(income < 500000){
        income -= (0.50 * saving);
    }else if(income < 1000000){
        income -= (0.30 * saving);
    }else{
        if( ( 0.10 * saving )  >= 50000){
            income -= 50000 ;
        }else {
            income -= ( 0.10 * saving ) ;
        }
    }

    let tax = 0;
    
    if(income >= 250000 && income <= 500000){
        tax = ( 0.10 * income );
    }else if(income >= 500000 && income <= 1000000){
        tax = ( 0.20 * income );
    }else if( income > 1000000){
        tax = ( 0.30 * income );
    }

    return tax ;
}

module.exports =  { taxCalculator };