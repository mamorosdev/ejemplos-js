$(document).ready(function () {
  $('#get-data').click(function () {
    var showData = $('#show-data');

    $.getJSON('greenshop.json', function (data) {
      console.log(data);

      var items = data.map(function (item) {
        return item.Nombre + ': ' + item.Departamento;
      });

      showData.empty();

      if (items.length) {
        var content = '<li>' + items.join('</li><li>') + '</li>';
        var list = $('<ul />').html(content);
        showData.append(list);
      }
    });

    showData.text('Loading the JSON file.');
  });
});
