// $(document).ready(function(){
//   $.ajax({
//     url: "http://daretodiscover.net/wine" ,
//     success: function(wine){
//       $.each(wine, function(key, value){
//       	console.log(key);
//       	$.each(value, function(key, value){
//       		console.log(value);
//       	});
//       });
//     },
//     error: function(err){
//     }
//   });
// });


$.ajax({
  url: "http://daretodiscover.net/wine",
    success: function(wines){
      var ul = $("<ul>").attr("id", "wines");
      console.log(wines);
      $.each(wines, function(key, wineList){
        $.each(wineList, function(key, wine){
        // if (key == "name") {
          console.log(key, wine);
          var wineHTML = key + ": " + wine + "<br>";
          ul.append(wineHTML);
          // };
        });
      });
      console.log(ul);
      $('.wines').append(ul);
    }
});
