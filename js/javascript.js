function clickCounterMinus(event) { 
    let meal = event.target.className;
    if (typeof(Storage) !== "undefined") {

       
        if ( localStorage.getItem(meal)) {
            let current = localStorage.getItem(meal);
            localStorage.setItem(meal, Number(current) - 1);
        } else {
            
        }
        document.getElementById(meal).innerHTML = localStorage.getItem(meal);
    }
     else {
        document.getElementById(meal).innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function clickCounterPlus(event) {
   let meal = event.target.className;
    if (typeof(Storage) !== "undefined") {

       if(localStorage.getItem(meal)) {
            let current = localStorage.getItem(meal);
            localStorage.setItem(meal, Number(current) + 1);
       } else {
        localStorage.setItem(meal, 1);
       }
       
        document.getElementById(meal).innerHTML = localStorage.getItem(meal);
    } else {
        document.getElementById(meal).innerHTML = "Sorry, your browser does not support web storage...";
    }
}