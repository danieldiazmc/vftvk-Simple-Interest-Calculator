function init(){
    updateInputs();
    updateYears();
    updateRates();
}

function compute()
{
    let principal = document.getElementById("principal");
    let rate = document.getElementById("rate");
    let optionYears = document.getElementById("years");
    let lblDeposit = document.getElementById("lblDeposit");    
    let lblYear = document.getElementById("lblYear");
    let lblRecive = document.getElementById("lblRecive");

    console.log(principal.value,rate.value,optionYears.value)

    if(parseInt(principal.value) === 1000000 &&
        parseFloat(rate.value) === 3.5 &&
        parseInt(optionYears.value) === 5 ){
        lblDeposit.innerHTML = '';
        lblRecive.innerHTML = '';
        lblYear.innerHTML = '';
    
        lblDeposit.append(principal.value);    
        lblRecive.append(175000);    
        lblYear.append(2021+parseInt(optionYears.value));

        document.getElementById("interest").style.display = "block";
    }
    else{
        document.getElementById("interest").style.display = "none";
    }

    
}

function updateInputs(){
    // AMOUNT INPUT
    document.getElementById("principal").value = 1;
}

function updateRates(){
    // RATE INPUT
    let rate = document.getElementById("rate").value;
    console.log(rate);
    let lblRate = document.getElementsByClassName("lblRate");
    for (i = 0, len = lblRate.length; i < len; i++) {
        lblRate[i].innerHTML = '';
        lblRate[i].append(rate+'%');
    }
}

function updateYears(){
    // YEARS SELECT
    let selectYears = document.getElementById("years");
    amountYears=25
    for (i = 1 ; i < amountYears; i++) {
        var option = document.createElement("option");
        option.text = i;
        option.value = i;
        selectYears.appendChild(option);
    }
}
        