const ul = document.querySelector('.items');
const btn = document.querySelector('.btn');

btn.addEventListener('click', e=> {
  
  console.log(e.target.className);
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});

btn.addEventListener('mouseover', e => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById('my-form').style.background = '#fff';
  document.querySelector('body').classList.add('bg-dark');
  ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});

btn.addEventListener('mouseout', p=> {
  p.preventDefault();
  console.log(p.target.className);
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});

const myForm = document.querySelector('#my-form');
let nameInput1 = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput1.value === '' || emailInput.value === '') {
    
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    
    setTimeout(() => msg.remove(), 3000);
  } else {
    
    const li = document.createElement('li');

    li.appendChild(document.createTextNode(`${nameInput1.value}: ${emailInput.value}`));

    userList.appendChild(li);

    nameInput1.value = '';
    emailInput.value = '';
  }
}