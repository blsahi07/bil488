function start() {

    var url = 'http://search.twitter.com/search.json';
    var query = document.getElementById('q').value;
    
    var Path = url + '?callback=?&rpp=' + '5' + '&q=' + query;

    $('#Results').empty();

    $.getJSON(Path, function (data) {
        var objects, tweet, i, tweet_html;

        objects = data.results;

        for (i = 0; i < objects.length; i++) {
            tweet = objects[i];

            
           
            var Name = ' <strong>' + tweet.from_user_name + ' </strong>';
            var userName = '<em>' + tweet.from_user + '</em>';
            var profilImage = '<img src="' + tweet.profile_image_url + '"/>';
            var Text = '<div class="twitter">' + tweet.text + '<\/div>';
            var TDate = '<em>' + tweet.created_at + '</em>';

            var userLink = ' https://twitter.com/intent/user?user_id=' + tweet.from_user_id;
            var fullLink = ' <a href="' + userLink + '" target="_blank">' + Name + '</a>';  // link to user's page on twitter
      

            tweet_html = '<div class="twitter2">' +
            '<table><tr>' +
            '<td>' + profilImage + '</td>' +
            '<td>' + fullLink + '&nbsp;&nbsp@' + userName + '&nbsp;&nbsp(' + TDate + ')' + Text + '</td>' +
            '</tr></table>' +
             '<br></br>'
            '</div>';

          

            $('#Results').append(tweet_html);
        }
    });
    
    setTimeout(start, 12000);
}
