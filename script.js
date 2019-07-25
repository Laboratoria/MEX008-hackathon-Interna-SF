const newEntry = document.getElementById('newEntry');
const newExpense = document.getElementById('newExpense');
const closeDiv = document.getElementById('closeBtn1');
const closeDiv2 = document.getElementById('closeBtn2');


const hideArt = id => document.getElementById(id).classList.add('hide');
const showArt = id => document.getElementById(id).classList.remove('hide');

const openBoxEntry = () => {
    showArt ('boxesBudget1');
}

newEntry.addEventListener('click', openBoxEntry);


const closeBoxEntry = () => {
    hideArt ('boxesBudget1');
}

closeDiv.addEventListener('click', closeBoxEntry);