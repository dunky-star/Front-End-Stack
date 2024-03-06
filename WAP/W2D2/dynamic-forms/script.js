let myObj = {
  name: 'Shyam',
  scores: [10, 20, 30],
  age: 30,
  skills: ['java', 'javascript'],
};

$(document).ready(function () {
  formDynamic();
});

function formDynamic() {
  let div = $('<div></div>');
  let html = '';

  let selectedValue = 'Ram';

  for (let prop in myObj) {
    html += '<label>' + prop + '</label>';
    if (typeof myObj[prop] != 'object') {
      html += "<input type='text' value='" + myObj[prop] + "'/>" + '<br/>';
    }
    if (Array.isArray(myObj[prop])) {
      for (let score of myObj[prop]) {
        let checked = '';
        if (score == 'javascript') checked = 'checked';
        html +=
          "<input type='checkbox' value='10' " +
          checked +
          '/>' +
          ' <label>' +
          score +
          '</label >';
      }
      html += '<br/>';
    }
  }
  div.html(html);

  $('body').append(div);
}
