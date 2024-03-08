let myArray = ['Apple', 'Pear', 'Grapes'];

$(document).ready(function () {
  let div1 = document.getElementById('div1');
  let ul = document.createElement('ul');
  for (i = 0; i < 5; i++) {
    let li = document.createElement('li');
    li.innerHTML = "<a href=''>www.miu.edu</a>" + ' ' + 'Maharishi';
    ul.appendChild(li);
  }
  div1.appendChild(ul);

  timer1(myArray);
});

function timer1(arr) {
  for (let i = 0; i < arr.length; i++) {
    let timeout1 = setTimeout(function () {
      $('#div1').append(arr[i]);
    }, 1000);
  }
}
