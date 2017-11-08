/*
  Telephasic by HTML5 UP
  html5up.net | @ajlkn
  Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
  */

  (function($) {

    skel.breakpoints({
      normal: '(max-width: 1280px)',
      narrow: '(max-width: 1080px)',
      narrower: '(max-width: 820px)',
      mobile: '(max-width: 736px)',
      mobilep: '(max-width: 480px)'
    });

    $(function() {

      var $window = $(window),
      $body = $('body');

    // Disable animations/transitions until the page has loaded.
    $body.addClass('is-loading');

    $window.on('load', function() {
      $body.removeClass('is-loading');
    });

    // Fix: Placeholder polyfill.
    $('form').placeholder();

    // Prioritize "important" elements on narrower.
    skel.on('+narrower -narrower', function() {
      $.prioritize(
        '.important\\28 narrower\\29',
        skel.breakpoint('narrower').active
        );
    });

    // CSS polyfills (IE<9).
    if (skel.vars.IEVersion < 9)
      $(':last-child').addClass('last-child');

    // Dropdowns.
    $('#nav > ul').dropotron({
      mode: 'slide',
      speed: 150,
      alignment: 'center',
      noOpenerFade: true
    });

    // Off-Canvas Navigation.

      // Navigation Button.
      $(
        '<div id="navButton">' +
        '<a href="#navPanel" class="toggle"></a>' +
        '</div>'
        )
      .appendTo($body);

      // Navigation Panel.
      $(
        '<div id="navPanel">' +
        '<nav>' +
        '<a href="index.html" class="link depth-0">Home</a>' +
        $('#nav').navList() +
        '</nav>' +
        '</div>'
        )
      .appendTo($body)
      .panel({
        delay: 500,
        hideOnClick: true,
        resetScroll: true,
        resetForms: true,
        side: 'top',
        target: $body,
        visibleClass: 'navPanel-visible'
      });

      // Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
      if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
        $('#navButton, #navPanel, #page-wrapper')
      .css('transition', 'none');

    });

    function createCookie(name, value, days) {
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
      } else var expires = "";
      document.cookie = name + "=" + value + expires + "; path=/";
    }

    function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }

    function eraseCookie(name) {
      createCookie(name, "", -1);
    }

    var $body = $("body"),
    sCookieName = "cookiewarning",
    $cookiewarning = $("div." + sCookieName);

    function setCookieWarning(active) {
      (!!active) ? $body.addClass(sCookieName): $body.removeClass(sCookieName)
    }

    $cookiewarning.on("click", function() {
      createCookie(sCookieName, 1, 365)
      setCookieWarning(false);
    });

  // cookie warning
  if (readCookie(sCookieName) != 1) {
    setCookieWarning(true);
  }

  $(".removecookie").on("click", function() {
    eraseCookie(sCookieName);
    setCookieWarning(false);
  })

})(jQuery);