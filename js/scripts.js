var selector = function(place, index){
  if (index = true) {
    var visited = [];
    visited.push(place);
    return visited;
  }else{
    var notVisited = [];
    notVisited.push(place);
    return notVisited;
  }

};

$(document).ready(function() {
  //creates a new Contact object from form data
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var inputtedYear = $("input#new-year").val();
    var inputtedNotes = $("input#new-notes").val();

    var newPlace = { placeName: inputtedName, year: inputtedYear, notes: inputtedNotes, visited: 0};
    $("#places").show();

///////////////////////////////////////////////////////////////////////////////////

//  shows contact name on page

    // $("ul#places").append('<li><span class="place">' +
    //               newPlace.placeName + '</span>' +
    //               '<div class="visit">' +
    //             '<span class="btn btn-primary" id="visited">Visited</span>' +
    //             '<span class="btn btn-primary" id="not-visited">Not Visited</span>' +
    //           '</div></li>');




//  prints contact object on the page with its properties
    $(".place").last().click(function() {
      $("#show-place").show();
//    var visited = parseInt($("input.visited").val());
      $("#visited").submit(function(event){
        var placesVisited = [];
        placesVisited.push(newPlace);
      });
      $("#not-visited").submit(function(event){
        var placesToVisit = [];
        placesToVisit.push(newPlace);
      });

      // $("#show-place h2").text(newPlace.placeName);
      // $(".year").text(newPlace.year);
      // $(".notes").text(newPlace.notes);
      $("#show-place h2").text("");
      placesVisited.forEach(function(place){
        $("ul#places").append("<li>" + place.placeName + ", " + place.year + ", " + place.notes + "</li>");
      });
      placesToVisit.forEach(function(place){
        $("ul#places").append("<li>" + place.placeName + ", " + place.year + ", " + place.notes + "</li>");
      });

    }); // end show place function

      // $("ul#addresses").text("");
      // newContact.addresses.forEach(function(address) {
      //   $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " + address.state + "</li>");
      // });

    // $("input#new-first-name").val("");
    // $("input#new-last-name").val("");
    // $("input.new-street").val("");
    // $("input.new-city").val("");
    // $("input.new-state").val("");
//end function
  });

}); // end document function
