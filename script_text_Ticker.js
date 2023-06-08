$(document).ready(function() {
  var news = [{
    "date": "June 8, 2023",
    "prefix": "CNN: Sport",
    "heading": "Alexis Mac Allister: Liverpool sign Brighton Argentina midfielder for £35m.",
    "url": "https://"
  }, {
    "date": "June 8, 2023",
    "prefix": "CNN: uk Sport",
    "heading": "Alexis Mac Allister: Liverpool sign Brighton Argentina midfielder for £35m.",
    "url": "https://"
  }, {
    "date": "June 8, 2023",
    "prefix": "CNN: Sport",
    "heading": "Alexis Mac Allister: Liverpool sign Brighton Argentina midfielder for £35m.",
    "url": "https://"
  }, {
    "date": "June 8, 2023",
    "prefix": "BBC: Sport",
    "heading": "Alexis Mac Allister: Liverpool sign Brighton Argentina midfielder for £35m.",
    "url": "https://"
  }, {
    "date": "June 8, 2023",
    "prefix": "BBC: Sport",
    "heading": "Alexis Mac Allister: Liverpool sign Brighton Argentina midfielder for £35m.",
    "url": "https://"
  }];

  $("#newsTicker1").easyNewsTicker({
    "animation": {
      "effect": "scroll",
    },
    "data": news
  });
  $("#newsTicker2").easyNewsTicker({
    "animation": {
      "effect": "slide-vertical",
      "easing": "easeInOutExpo",
      "duration": 1000
    },
    "data": news
  });
  $("#newsTicker3").easyNewsTicker({
    "animation": {
      "effect": "slide-horizontal",
      "easing": "easeInOutExpo",
      "duration": 1500
    },
    "data": news
  });
  $("#newsTicker4").easyNewsTicker({
    "animation": {
      "effect": "fade",
    },
    "data": news
  });
  $("#newsTicker5").easyNewsTicker({
    "animation": {
      "effect": "typewriter",
    },
    "data": news
  });

  // THEMES
  for(var i = 1; i <= 10; i++) {
    $("#newsTicker_theme"+i).easyNewsTicker({
      "theme": i,
      "animation": {
        "effect": "slide-vertical",
        "easing": "easeInOutExpo",
        "duration": 1000
      },
      "data": news
    });
  }
});