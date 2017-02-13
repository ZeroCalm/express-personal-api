// console.log("Sanity Check: JS is working!");




$(document).ready(function(){

  $.ajax({
      method: 'GET',
    //  url: '/api/games',
      success: handleSuccess,
      error: handleError
    });
});



function handleSuccess(json) {
  games = json;
console.log(json)
}


function handleError(){
  console.log("Error: ");
}
