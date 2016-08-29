var searchYouTube = (options, callback) => {

  if (Object.keys(options).length) {

    $.ajax({
      url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + options.query + "&key="+YOUTUBE_API_KEY,
      type: "GET",
      success: callback //Ajax takes care of passing the recived data into the callback
    });

  }

};

window.searchYouTube = searchYouTube;
