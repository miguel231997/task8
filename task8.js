
$(document).ready(function(){
    $('#button').on('click', function(){
    var apiBase = 'https://jsonplaceholder.typicode.com/photos';    
        axios.get(apiBase)
            .then(function(response){
                var albumHTML = response.data.map(function(album){
                    return $('<div>').addClass('album').data('id', album.id).html("<img src=\"" + album.url + "\" alt=\"" + album.title + "\">"
                        + "<p>" + album.title + "</p>");
                        });
                            $('#tasks').html(albumHTML);
                                    });
                            });
    
           
                        });