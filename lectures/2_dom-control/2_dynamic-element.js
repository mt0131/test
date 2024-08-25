let addBtn = document.getElementById('button');
let inputBox = document.querySelector('input');
let addBeforeBtn = document.getElementById('before');
let removeTargetBtn = document.querySelector('#target-remove');

let removebtn = document.querySelector('.remove-btn');

addBtn.addEventListener('click', function () {
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  li.textContent = inputBox.value;

  let button = document.createElement('button');
  button.textContent = 'X';
  button.setAttribute('class', 'remove-button');
  button.addEventListener('click', removeParentNode);
  li.appendChild(button);
  ul.appendChild(li);
  inputBox.value = '';
});

addBeforeBtn.addEventListener('click', function () {
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  let targetLi = document.querySelector('li#target');
  li.textContent = inputBox.value;
  ul.insertBefore(li, targetLi);
});

removeTargetBtn.addEventListener('click', function () {
  let targetLi = document.querySelector('li#target');
  targetLi.remove();
});

removebtn.addEventListener('click', function (event) {
  event.target.parentNode.remove();
});

function removeParentNode(event) {
  event.target.parentNode.remove();
}
