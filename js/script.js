let allElements =  document.querySelectorAll('.menu-item'),
    ul = document.querySelector('.menu'),
    liElement = document.createElement('li'),
    head = document.querySelector('#title'),
    oneWord = 'подлинную ',
    column = document.querySelector('.column'),
    adv = document.querySelector('.adv');

    adv.style.display = 'none';git
    console.log(Object.keys(column));

let exchangeHead = document.createElement('div');
exchangeHead.classList.add('title');
exchangeHead.innerHTML = 'Мы продаем только подлинную технику Apple';

console.log(exchangeHead);

head.innerHTML = 'Мы продаем только подлинную технику Apple';

ul.removeChild(allElements[2]);
liElement.classList.add('menu-item');
liElement.innerHTML = 'Второй пункт';

ul.insertBefore(liElement, allElements[1]);

document.body.style.backgroundImage = 'url(../img/apple_true.jpg)';


let randomOpinion = document.querySelector('#prompt');
let userOpinion = prompt("Что Вы думаете про технику Apple?");
randomOpinion.innerHTML = userOpinion;

