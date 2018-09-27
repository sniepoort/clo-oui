function initSmoothScroll(){
  // Select all links with hashes
  $(document).on('click', 'a.is-scroll[href*="#"]', function(event){
    // On-page links
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault()
        scrollTo(target)
      }
    }
  })

  // Select all elements with data-scroll-to
  $('[data-scroll-to]')
    // Remove links that don't actually link to anything
    .on('click', function(event) {
      // On-page links
      // Figure out element to scroll to
      var hash = $(this).attr('data-scroll-to')
      var target = $(hash)
      target = target.length ? target : $('[name=' + hash.slice(1) + ']')
      // Does a scroll target exist?
      if (target.length) {
        scrollTo(target)
      }
    })

  function scrollTo(target) {
    if (target) {
      var scrollToPos = target.offset().top
      $('html, body').animate(
        {
          scrollTop: scrollToPos
        },
        500,
        function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target)
          // $target.focus();
          if ($target.is(':focus')) {
            // Checking if the target was focused
            return false
          } else {
            $target.attr('tabindex', '-1') // Adding tabindex for elements not focusable
            // $target.focus(); // Set focus again
          }
        }
      )
    }
  }

}
