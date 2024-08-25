let title = document.getElementById('title');
console.log(title);
title.textContent = '헬스 3대 운동';

let items = document.getElementsByClassName('item');
console.log(items);
console.log(items[0]);

let liList = document.getElementsByTagName('li');
console.log(liList);

let h2 = document.querySelector('#title');
console.log(h2);
let itemAll = document.querySelectorAll('.item');
console.log('item', itemAll);

//h2.textContent = '<span>운동!!</span>';
//h2.innerHTML = '<span>운동@@</span>';

//ocument.querySelector('body').innerHTML = '<strong>운동</strong>';

let input = document.querySelector('input');
input.setAttribute('placeholder', '헬스 운동을 입력해주세요');
input.removeAttribute('placeholder');

let helloItem = document.querySelector('.hello');

helloItem.classList.add('dark');