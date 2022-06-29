let dateControl = document.querySelector('input[type="date"]');
dateControl.value = '2017-06-01';
console.log(dateControl.value); // affiche "2017-06-01"
console.log(dateControl.valueAsNumber); // affiche 1496275200000, un timestamp JavaScript (exprimé en ms)