

$(function () {

  var list = $("#personList");

  $("#downloadButton").click(function () {

    list.empty();

    $.ajax({
      type: "GET",
      url: "http://localhost:3000/data/persons",
      success: function (response) {
        response.forEach(function (item) {
          var listItem = $("<li></li>").text([item.firstname, item.lastname].join(" "));
          list.append(listItem);
        });
      }
    });
  });

  $("#toggleButton").click(function () {
    list.toggleClass("hidden");
  });
  
});

