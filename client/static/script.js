

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

$(function () {

  var genreList = $("#genreList");
  var newGenreTitle = $("#newGenreTitle");

  function getGenres() {
    genreList.empty();
    $.ajax({
      type: "GET",
      url: "http://localhost:3000/data/genres",
      success: function (response) {
        response.forEach(function (item) {
          var listItem = $("<li></li>").text(item.title);
          genreList.append(listItem);
        });
      }
    });
  }

  $("#getGenreList").click(getGenres);
   
   $("#addGenre").click(function () {
     $.ajax({
       type: "POST",
       url: "http://localhost:3000/data/genres",
       data: JSON.stringify({
         title: newGenreTitle.val()
       }),
       contentType: "application/json",
       success: getGenres
     });
   });
});


$(function () {

  var bandList = $("#bandList");
  var newBandTitle = $("#newBandTitle");
  var newBandGenre = $("#newBandGenre");

  $.ajax({
    type: "GET",
    url: "http://localhost:3000/data/genres",
    success: function (response) {
      response.forEach(function (item) {
        var selectOption = $("<option></option>").attr("value", item.id).text(item.title);
        if (item.title === "Blues") {
          selectOption.attr("selected", true);
        }
        newBandGenre.append(selectOption);
      });
    }
  });

  function getBands() {

    bandList.empty();

    $.ajax({
      type: "GET",
      url: "http://localhost:3000/data/bands",
      success: function (response) {
        
        response.forEach(function (item) {
          var listItem = $("<li></li>");
          var bandTitle = $("<span></span>").text(item.title);
          var bandNewTitle = $("<input></input>");
          var updateBandTitle = $("<input></input>").addClass("btn btn-info").val("Update Title");
          listItem.append(bandTitle);
          listItem.append(bandNewTitle);
          listItem.append(updateBandTitle);
          updateBandTitle.click(function () {
             $.ajax({
               type: "PUT",
               url: "http://localhost:3000/data/bands",
               data: JSON.stringify({
                 id: item.id,
                 title: bandNewTitle.val(),
                 genreIds: item.genreIds
               }),
               contentType: "application/json",
               success: getBands
             });
          });
          bandList.append(listItem);
        });
      }
    });
  }

  $("#getBandList").click(getBands);
  
  $("#addBand").click(function() {
     $.ajax({
       type: "POST",
       url: "http://localhost:3000/data/bands",
       data: JSON.stringify({
         title: newBandTitle.val(),
         genreIds: [newBandGenre.val()]
       }),
       contentType: "application/json",
       success: getBands
     });
  });

  
  
});


