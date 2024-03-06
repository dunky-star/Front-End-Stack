$(document).ready(function () {
  const btnSubmit = document.getElementById('btn--submit');
  const btnAll = document.getElementById('button--all');
  const btnUserByLocation = document.getElementById('button--user--loc');

  btnSubmit.onclick = submitValues;
  btnAll.onclick = findAll;
  btnUserByLocation.onclick = findUserByLocation;
});

let users = [];
let inputId = $('#name--1');
let selectBoxes = $("select[name='multiSelect'] option:selected");
let multiValues = [];
selectBoxes.each(function (idx, ele) {
  multiValues.push($(ele).val());
});

function submitValues() {
  users.push(inputId, multiValues);
}

function findAll() {
  for (let user of users) {
  }
  $('#valueDiv').html('');
  $('#valueDiv').append('<div> <b>Name: </b>' + inputId.val() + '</div>');
  $('#valueDiv').append(
    '<div> <b>Random Options: </b>' + multiValues + '</div>'
  );
}

function findUserByLocation() {}
