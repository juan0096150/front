document.addEventListener('DOMContentLoaded', function () {
  console.log('login cargado correctamente');
});

document.getElementById('show-register').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('login').classList.remove('active');
  document.getElementById('register').classList.add('active');
});

document.getElementById('show-login').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('register').classList.remove('active');
  document.getElementById('login').classList.add('active');
});

