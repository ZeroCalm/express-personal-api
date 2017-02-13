console.log("Sanity Check: JS is working!");

var games = [];


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
  render();
}
