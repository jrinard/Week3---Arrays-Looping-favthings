//
// var result = function(f1, f2, f3) {
//
//   var favArray = [f1, f2, f3]
//
// };
//







//________User Logic



$(document).ready(function(){
  $("form").submit(function(event){
      var fav1Input = $("input#fav1").val();
      var fav2Input = $("input#fav2").val();
      var fav3Input = $("input#fav3").val();

      var results1 = [fav1Input, fav2Input, fav3Input]
      var results2 = [results1[0] , results1[2]]
      var results3 = results1.concat(results2);
      alert(results3.length);


});
});
