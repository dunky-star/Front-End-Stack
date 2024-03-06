let form = { name: 'Ram', skills: ['Java', 'JavaScript'] };

$(document).ready(function () {
  let html = '';
  for (let key in form) {
    let value = form[key];
    html += '<label> ' + key + '  <label>: ';
    if (Array.isArray(value)) {
      for (let ele of value) {
        html +=
          '<label>' +
          ele +
          '<label>' +
          '<input type ="checkbox" value="' +
          ele +
          '"' +
          ' name="' +
          key +
          '"/>';
      }
    } else {
      html += '<input type="text" value="' + value + '"/>';
    }
    html += '<br/>';
    html += '<br/>';
  }

  $('body').append(html);
});
