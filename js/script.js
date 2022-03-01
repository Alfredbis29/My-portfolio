const menuButtonOpen = document.querySelector('.menu');
const menuButtonClose = document.querySelector('.close');
const header = document.querySelector('header');
const headline = document.querySelector('.headline');
const links = document.querySelectorAll('.nav-list>li');

let isOpen = false;

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    header.classList.add('shadow');
  } else {
    header.classList.remove('shadow');
  }
});

function toggle() {
  if (!isOpen) {
    header.classList.add('open');
    headline.classList.add('bur-effect');
    isOpen = true;
  } else {
    header.classList.remove('open');
    headline.classList.remove('bur-effect');
    isOpen = false;
  }
}

Array.from(links).forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('open');
    headline.classList.remove('bur-effect');
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 600) {
    header.classList.remove('open');
    headline.classList.remove('bur-effect');
  }
});

menuButtonOpen.addEventListener('click', toggle);
menuButtonClose.addEventListener('click', toggle);

const form = document.getElementById('contact-form');
const email = document.getElementById('email');
const errorMess = document.querySelector('small');
const userMessage = document.getElementById('message');
const userName = document.getElementById('name');
const submitBtn = document.querySelector('#submit');
const message = [];

[userName, email, userName].forEach((item) => {
  item.addEventListener('input', () => {
    const data = {
      name: userName.value,
      email: email.value,
      message: userMessage.value,
    };
    const dataStored = JSON.stringify(data);
    localStorage.setItem('data', dataStored);
  });
});

form.addEventListener('submit', (e) => {
  const emailValue = email.value;
  if (emailValue === '') {
    message.push('The Email must not be empty');
  } if (emailValue !== emailValue.toLowerCase()) {
    message.push('The email must be in lowercase');
  } if (message.length > 0) {
    e.preventDefault();
    errorMess.innerText = message.join(',');
    errorMess.classList.add('show-message');
  }
});
window.addEventListener('load', (e) => {
  const getData = JSON.parse(localStorage.getItem('data'));
  userName.value = getData.name;
  email.value = getData.email;
  userMessage.value = getData.message;
  if (e.target.value !== e.target.value.toLowerCase()) {
    submitBtn.classList.add('disabled');
    submitBtn.classList.remove('hover');
  }
});

email.addEventListener('input', (e) => {
  if (e.target.value !== e.target.value.toLowerCase()) {
    submitBtn.classList.add('disabled');
    submitBtn.classList.remove('hover');
  } else {
    submitBtn.classList.remove('disabled');
    submitBtn.classList.add('hover');
  }
});
