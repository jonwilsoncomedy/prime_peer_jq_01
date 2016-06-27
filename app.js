$('#carForm').on('submit', function(event){
     event.preventDefault();
     var make = $("#make").val();
     var model = $("#model").val();
     var year = $("#year").val();
     var color = $("#color").val();
     var rating = $("#rating").val();
     var price = $("#price").val();
     console.log(make, model, year, color, rating, price);
    //  carObject(make, model, year, color, rating, price);
    //  console.log(carObject);

  //  function carObject(make, model, year, color, rating, price){
  //  make = this.make;
  //  model = this.model;
  //  year = this.year;
  //  color = this.color;
  //  rating = this.rating;
  //  cost = this.cost;
  // }
 });
