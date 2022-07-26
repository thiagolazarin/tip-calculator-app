function results(tip){

    let cont = +document.querySelector('#billCount').value;
    let peopleNumbers = +document.getElementById('peopleNumbers').value;
    let tipValue = document.getElementById('tip-value');
    let totalValue = document.getElementById('total-value');

    checkPeople(peopleNumbers); 
    
    let contTip = ((tip * cont) / 100) / peopleNumbers;    
    tipValue.innerHTML = `$ ${contTip.toFixed(2)}`

    let total = ((cont + (tip/100 * cont)) / peopleNumbers);
    totalValue.innerHTML = `$ ${total.toFixed(2)}`

}

function checkPeople(p){
    if(p === 0){
        alert(`You didn't put the number of people!!`);
        location.reload(); 
    } 
}

function getTip(){
    let tipValues = document.querySelectorAll('.btn-tip');
    changeColor();
    for(let i=0; i<tipValues.length; i++){
        tipValues[i].addEventListener('click', () => {
            results(tipValues[i].value);
        })
    }
}

function changeColor(){
    let tipValues = document.querySelectorAll('.btn-tip');
    for(let i=0; i<tipValues.length; i++){
        tipValues[i].addEventListener('click', () => {
            tipValues[i].style.background = 'hsl(172, 67%, 45%)';
        })
    }
}

function showResults(){
    getTip();
}

let btn = document.getElementById('btn-reset');
function reloadTip(){
    location.reload();
}
btn.addEventListener('click', () => reloadTip());

showResults();

