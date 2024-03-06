$(document).ready(function () {
  const btnSubmit = document.getElementById('btn--submit');

  btnSubmit.onclick = readValues;
});

function readValues() {
  $('#valueDiv').html('');

  let inputId = $('#name');
  $('#valueDiv').append('<div> <b>Name: </b>' + inputId.val() + '</div>');

  let radioGender = $("input[name='gender']:checked");
  $('#valueDiv').append('<div> <b>Gender: </b>' + radioGender.val() + '</div>');

  let checkboxValue = $("input[name='skills']:checked");
  let values = [];
  checkboxValue.each(function (idx, ele) {
    values.push($(ele).val());
  });
  $('#valueDiv').append('<div> <b>Skills: </b>' + values + '</div>');

  let selectBox = $("select[name='singleselect'] option:selected");
  $('#valueDiv').append('<div> <b>Country: </b>' + selectBox.val() + '</div>');

  let selectBoxes = $("select[name='multiSelect'] option:selected");
  let multiValues = [];
  selectBoxes.each(function (idx, ele) {
    multiValues.push($(ele).val());
  });
  $('#valueDiv').append(
    '<div> <b>Random Options: </b>' + multiValues + '</div>'
  );
  let textAreaId = $('#textAreaId');
  $('#valueDiv').append(
    '<div> <b>Description: </b>' + textAreaId.val() + '</div>'
  );
}
