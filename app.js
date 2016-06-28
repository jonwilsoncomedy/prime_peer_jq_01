
$('document').ready(function() {


  $('#carForm').on('submit', function(event){
     event.preventDefault();
     var make = $("#make").val();
     var model = $("#model").val();
     var year = $("#year").val();
     var color = $("#color").val();
     var rating = $("#rating").val();
     var price = $("#price").val();
     // console.log('data', $('#carForm').serializeArray());
     // console.log(make, model, year, color, rating, price);
     carObject(make, model, year, color, rating, price);
     // console.log(carObject);
     $('#holdCars').append('<p>' + make + '</p>');
     $('#holdCars').append('<p>' + model + '</p>');
     $('#holdCars').append('<p>' + year + '</p>');
     $('#holdCars').append('<p>' + color + '</p>');
     $('#holdCars').append('<p>' + rating + '</p>');
     $('#holdCars').append('<p>' + price + '</p>');

   });

  function carObject(make, model, year, color, rating, price){
     make = this.make;
     model = this.model;
     year = this.year;
     color = this.color;
     rating = this.rating;
     cost = this.cost;
   };

});
