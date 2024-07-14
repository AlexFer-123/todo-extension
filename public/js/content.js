/******/ (() => { // webpackBootstrap
/*!*********************************!*\
  !*** ./resources/js/content.js ***!
  \*********************************/
// resources/js/content.js

// Código para modificar o DOM da página
document.body.style.backgroundColor = 'lightblue';

// Escutar cliques em botões
document.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    alert('Botão clicado!');
  }
});
/******/ })()
;