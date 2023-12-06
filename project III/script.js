const buttonOfClicker = document.querySelector('.showMenu');
const menuOfShow = document.querySelector('.contOfBurger');
const buttonOfClose = document.querySelector('.closeMenu');


buttonOfClicker.addEventListener('click', function() {
  menuOfShow.classList.toggle('ShowMenu');
  buttonOfClose.classList.toggle('showKrestik');
  buttonOfClicker.classList.toggle('krestikAnim');
});

buttonOfClose.addEventListener('click', function() {
  buttonOfClose.classList.toggle('showKrestik');
  menuOfShow.classList.toggle('ShowMenu');
})
