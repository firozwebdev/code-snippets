//Jquery- Ajax code is available below.....

// Get Method

$.get("Url", function(res, status){
    console.log(data);
});


//Post method

$.post("Url", data, function(res, status){  // passing data to the server 
    console.log(res);
});


//Ajax method.....
var request = $.ajax({
    url: "script.php",
    method: "POST",
    data: { id : menuId }, //data, passing to the server
    dataType: "html"
  });
   
  request.done(function( res ) {
    console.log(res);
  });
   
  request.fail(function( jqXHR, textStatus ) {
    alert( "Request failed: " + textStatus );
  });

  
