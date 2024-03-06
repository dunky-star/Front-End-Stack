$(document).ready(function () {
  const okButton = document.getElementById('btn--1');
  const changeTextButton = document.getElementById('btn--change');
  const swapBtn = document.getElementById('btn--swap');

  // $('#square').click(function () {
  //   alert('Boink.');
  // });

  $(function () {
    $('#target').on('mouseover', showCoords);
  });

  //   $(function () {
  //     $('#btn--1').on('click', okayClick);
  //   });
  okButton.onclick = okayClick;
  changeTextButton.onclick = changeText;
  swapBtn.onclick = swapText;
});

function showCoords(evt) {
  $('#target').html(
    'page : (' +
      evt.pageX +
      ', ' +
      evt.pageY +
      ')\n' +
      'screen : (' +
      evt.screenX +
      ', ' +
      evt.screenY +
      ')\n' +
      'client : (' +
      evt.clientX +
      ', ' +
      evt.clientY +
      ')'
  );
}

function okayClick() {
  alert('Booyah!');
  this.className = 'highlighted';
}

function changeText() {
  const textbox = document.getElementById('output');
  textbox.value = 'Hello, I have been changed by [Change me] button.';
}

function swapText() {
  let span = document.getElementById('output2');
  let textBox = document.getElementById('textbox2');
  let temp = span.innerHTML;
  span.innerHTML = textBox.value;
  textBox.value = temp;
  // styling element
  span.style.color = 'red';
  //span.className = 'highlighted';
  span.style.fontSize = '14pt';
  span.style.padding = '0.5em';
  span.style.width = '200px';
}
