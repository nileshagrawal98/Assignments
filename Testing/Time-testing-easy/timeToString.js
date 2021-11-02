function timeToString(t) {
    let sec = 0;
    let min = 0;
    let hr = 0 ;
    
    sec = Math.floor(t / 1000);

    if (sec >= 60) {
        min = Math.floor(sec / 60);
        sec = sec % 60;
    }

    if(min >= 60){
        hr = Math.floor(min / 60);
        min = min % 60 ;
    }

    if(sec == 1){
        sec += " second"
    }else if(sec > 1){
        sec += " seconds"
    }

    if(min == 1){
        min += " minute"
    }else if(min > 1){
        min += " minutes"
    }

    if(hr == 1){
        hr += " hour"
    }else if(hr > 1){
        hr += " hours"
    }

    if(!hr && !min){
        return(sec);
    }else if(!hr && !sec){
        return(min);
    }else if(!min && !sec){
        return(hr);
    }else if(hr && min && sec){
        return(`${hr} ${min} ${sec}`);
    }else if(!hr && min && sec){
        return(`${min} ${sec}`);
    }else if(!sec && hr && min){
        return(`${hr} ${min}`);
    }else if(hr && sec && !min){
        return(`${hr} ${sec}`);
    }
}

// timeToString(36241000);
module.exports = { timeToString };