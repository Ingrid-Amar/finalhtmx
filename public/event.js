var events = [
  {'Date': new Date(2024, 6, 7), 'Title': 'Some important event'},
  {'Date': new Date(2024, 6, 18), 'Title': 'Could be date night'},
  {'Date': new Date(2024, 6, 27), 'Title': 'Doctor time'},
];
var country = 'U.S.'
var year = '2024'
$.ajax({
  method: 'GET',
  url: url: 'https://api.api-ninjas.com/v1/holidays?country=' + query + '&year=' + year;
  headers: {'X-Api-Key': 'UvMZzAt7lzS5Qi6xWkc0RQ==RBCsLTzNGuq2o5TA'},
  contentType: 'application/json',
  success: function (result) {
    console.log(result);
  },
  error: function ajaxError(jqXHR) {
    console.error('Error: ', jqXHR.responseText);
  }
});

var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);