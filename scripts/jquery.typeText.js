(function($) {
  // writes the string
  //
  // @param jQuery $target
  // @param String str
  // @param Numeric cursor
  // @param Numeric delay
  // @param Function cb
  // @return void
  function typeString($target, str, cursor, delay, cb) {
    $target.html(function(_, html) {
      return html + str[cursor];
    });

    if (cursor < str.length - 1) {
      setTimeout(function() {
        typeString($target, str, cursor + 1, delay, cb);
      }, delay);
    } else {
      cb();
    }
  }

  // clears the string
  //
  // @param jQuery $target
  // @param Numeric delay
  // @param Function cb
  // @return void
  function deleteString($target, delay, cb) {
    var length;

    $target.html(function(_, html) {
      length = html.length;
      return html.substr(0, length - 1);
    });

    if (length > 1) {
      setTimeout(function() {
        deleteString($target, delay, cb);
      }, delay);
    } else {
      cb();
    }
  }

  // jQuery hook
  $.fn.extend({
    teletype: function(opts) {
      var settings = $.extend({}, $.teletype.defaults, opts);

      return $(this).each(function() {
        (function loop($tar, idx) {
          // type
          typeString($tar, settings.text[idx], 0, settings.delay, function() {
            // delete
            setTimeout(function() {
              deleteString($tar, settings.delay, function() {
                loop($tar, (idx + 1) % settings.text.length);
              });
            }, settings.pause);
          });

        }($(this), 0));
      });
    }
  });

  // plugin defaults  
  $.extend({
    teletype: {
      defaults: {
        delay: 100,
        pause: 5000,
        text: []
      }
    }
  });
}(jQuery));

$('#target').teletype({
  text: [
    'Travel through the stars, discover other worlds.',
    'One small step for man, one giant leap for mankind.',
    'In this single galaxy of ours there are eighty-seven thousand million suns.',
    'I see Earth! It is so beautiful.',
    'Curiosity is the essence of our existence.',
    'We are limited only by our imagination and our will to act.',
    'Say hello to my mother and father...the Earth and Space.',
    'In the field of technology, simplification is always an enormous advance...',
    'Astronauts are inherently insane. And really noble.',
    'Scientific people . . . know very well that Time is only a kind of Space.'
  ]
});

$('#cursor').teletype({
  text: ['_', ' '],
  delay: 0,
  pause: 500
});