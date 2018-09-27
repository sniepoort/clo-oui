
$(document).ready(function(){

  initSmoothScroll()

  $('.topic span').click(function(){
    var $this = $(this)
    var $parent = $this.parents('.topic')
    $parent.toggleClass('topic--active')
  })

  $('.description-expand').click(function(){
    var $this = $(this)
    $this.prev('.description').toggleClass('description--expanded')
    if ($this.hasClass('more')) {
      $this.html('Read less <i class="fal fa-chevron-up ml-1"></i>')
    } else {
      $this.html('Read more <i class="fal fa-chevron-down ml-1"></i>')
    }
    $this.toggleClass('more')
  })

  var typed = new Typed("#typed", {
    strings: [
      'Hello^500\nMy name is chloé trieu.^500\nBut people call me clo-oui.^1000\nI am a <a href="#storyteller" class="is-scroll">digital storyteller.</a>'
    ],
    typeSpeed: 20,
    contentType: 'html',
    onComplete: function(){
      initSmoothScroll()
    }
  });

  $(window).on('scroll', function(){
		window.requestAnimationFrame(activateNavBanner);
	})

  function activateNavBanner() {
    console.log(window.innerHeight)
    console.log($(window).scrollTop())
    if ($(window).scrollTop() > window.innerHeight) {
      $('.nav-banner').addClass('nav-banner--active')
    } else {
      $('.nav-banner').removeClass('nav-banner--active')
    }
  }
})
