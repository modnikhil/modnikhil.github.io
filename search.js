/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');
  });  
}


