(function ($) {
  "use strict";

  // Preloader
  $(".preloader").delay(800).fadeOut("slow");
  // Preloader End


  // Menu
  jQuery(document).ready(function () {
    jQuery('header .mainmenu').meanmenu({
      meanScreenWidth: "992",
    });
  });

  // Menu End


  // Sticky Menu

  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
      $(".menu-area").addClass("sticky");
    } else {
      $(".menu-area").removeClass("sticky");
    }
  });

  // Sticky Menu End


  // Magnific Popup gallery
  $('.popup-gallery').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    gallery: {
      enabled: true
    },
    type: 'image'
    // other options
  });

  $('.popup-youtube').magnificPopup({
    type: 'iframe'
  });

  // Magnific Popup gallery End


  /*Trending Slide*/

  var testimonialSlider = new Swiper('.testimonial-slide', {
    spaceBetween: 24,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      480: {
        slidesPerView: 1.4
      },
      768: {
        slidesPerView: 2.2
      },
      992: {
        slidesPerView: 2.2
      },
      1200: {
        slidesPerView: 2.5
      },
      1400: {
        slidesPerView: 2.7
      }
    },
    // pagination: {
    //   el: ".testimonial-pagination",
    //   clickable: true,
    // },
  });


  var heroSlide = new Swiper(".hero-img-slide", {
    spaceBetween: 5,
    slidesPerView: 1,
    speed: 500,
    loop: true,
    effect: "fade",
    pagination: {
      el: ".hero-img-pagination",
      clickable: true,
    },
  });

  var heroSlideBox = new Swiper(".hero-box-content-slider", {
    spaceBetween: 5,
    slidesPerView: 1,
    speed: 500,
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: ".hero-box-next",
      prevEl: ".hero-box-prev",
    },
  });


  /* Testimonial */


  /* Host */


// var hostItems = document.querySelectorAll('.host-items div');
// var host = [];
// var imageUrlArray = [];
// var titleArray = [];
// var descriptionArray = [];

// hostItems.forEach(function(item) {
//   var hostData = JSON.parse(item.getAttribute('data-host-item'));
//   host.push(hostData);
//   imageUrlArray.push(hostData.imageUrl);
//   titleArray.push(hostData.title);
//   descriptionArray.push(hostData.description);
// });

var hostImg = new Swiper('.host-img-slide', {
  fadeEffect: { crossFade: true },
  effect: 'fade',
  loop: true,
  allowTouchMove: false,
});

var heroInfo = new Swiper('.host-info-slide', {
  spaceBetween: 24,
  slidesPerView: 1,
  fadeEffect: { crossFade: true },
  effect: 'fade',
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  // pagination: {
  //   el: ".host-pagination",
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return '<div class="' + className + '">' +
  //               '<img src="' + imageUrlArray[index] + '" alt="' + host[index].altText + '">' +
  //               '<div class="host-details">' +
  //                 '<p>' + descriptionArray[index] + '</p>' +
  //                 '<h3>' + titleArray[index] + '</h3>' +
  //               '</div>' +
  //            '</div>';
  //   },
  // },
  thumbs: {
    swiper: hostImg
  }
});


  /* Host End */



  // Bottom to top start
  $(document).ready(function () {
    $(window).on('scroll', (function () {
      if ($(this).scrollTop() > 100) {
        $('#scroll-top').fadeIn();
      } else {
        $('#scroll-top').fadeOut();
      }
    }));
    $('#scroll-top').on('click', function () {
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });
  });
  // Bottom to top End



  // Odometer Counter
  $(".counter-item").each(function () {
    $(this).isInViewport(function (status) {
      if (status === "entered") {
        for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
          var el = document.querySelectorAll('.odometer')[i];
          el.innerHTML = el.getAttribute("data-odometer-final");
        }
      }
    });
  });
  // Odometer Counter End

  window.onload = function () {

    // Custom Cursor
    const cursor = document.querySelector('.cursor');

    if (cursor) {
      const editCursor = e => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
      };
      window.addEventListener('mousemove', editCursor);

      document.querySelectorAll("a, .cursor-pointer").forEach(item => {
        item.addEventListener('mouseover', () => {
          cursor.classList.add('cursor-active');
        });

        item.addEventListener('mouseout', () => {
          cursor.classList.remove('cursor-active');
        });
      });
    }
    // Custom Cursor End
  };


  /*dark mood custom JS*/
  var toggleSlider = document.getElementById('slider');

  toggleSlider && toggleSlider.addEventListener('change', e => {
    if (e.target.checked === true) {
      if (document.body.classList.contains('theme-dark-active')) {
        document.body.classList.add('theme-light-active')
        document.body.classList.remove('theme-dark-active')
        localStorage.setItem('activeTheme', 'theme-light-active');
      }
      else if (document.body.classList.contains('theme-light-active')) {
        document.body.classList.add('theme-dark-active')
        document.body.classList.remove('theme-light-active')
        localStorage.setItem('activeTheme', 'theme-dark-active');
      }
    }

    if (e.target.checked === false) {
      if (document.body.classList.contains('theme-dark-active')) {
        document.body.classList.add('theme-light-active')
        document.body.classList.remove('theme-dark-active')
        localStorage.setItem('activeTheme', 'theme-light-active');
      }
      else if (document.body.classList.contains('theme-light-active')) {
        document.body.classList.add('theme-dark-active')
        document.body.classList.remove('theme-light-active')
        localStorage.setItem('activeTheme', 'theme-dark-active');
      }
    }
  });

  var activeTheme = localStorage.getItem('activeTheme');
  if (activeTheme == 'theme-light-active') {
    document.body.classList.add('theme-light-active');
    document.body.classList.remove('theme-dark-active');
    $("input.check-status").prop("checked", false);
  } else {
    document.body.classList.add('theme-dark-active');
    document.body.classList.remove('theme-light-active');
    $("input.check-status").prop("checked", true);
  }

  /*dark mood custom JS End*/


  // Search

  var toggleIcon = document.querySelectorAll('.search-toggle')
  var closeIcon = document.querySelectorAll('.cross-icon')
  var searchWrap = document.querySelectorAll('.search-full-shape')

  toggleIcon.forEach((element) => {
    element.addEventListener('click', () => {
      document.querySelectorAll('.search-full-shape').forEach((el) => {
        el.classList.add('show-sidebar')
      })
    })
  })

  closeIcon.forEach((element) => {
    element.addEventListener('click', () => {
      document.querySelectorAll('.search-full-shape').forEach((el) => {
        el.classList.remove('show-sidebar')
      })
    })
  })

  window.onclick = function (event) {
    // Menu Toggle button sidebar
    searchWrap.forEach((el) => {
      if (event.target == el) {
        el.classList.remove('show-sidebar')
      }
    })
  }

  // Search End


  // Category List
  const listItems = document.querySelectorAll('.category-list-active li');

  listItems.forEach(item => {
    item.addEventListener('click', function () {
      // Remove 'active' class from all list items
      listItems.forEach(li => {
        li.classList.remove('active');
      });

      // Add 'active' class to the clicked list item
      this.classList.add('active');
    });
  });

  // Category List end

  if (document.getElementById('scrollContainer')) {
    const container = document.getElementById('scrollContainer');
    let isMouseDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', function (event) {
      isMouseDown = true;
      startX = event.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseup', function () {
      isMouseDown = false;
    });

    container.addEventListener('mouseleave', function () {
      isMouseDown = false;
    });

    container.addEventListener('mousemove', function (event) {
      if (!isMouseDown) return;
      event.preventDefault();
      const x = event.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; // You can adjust the multiplier to control the scrolling speed
      container.scrollLeft = scrollLeft - walk;
    });
  }




  var elements = $('.initial-child-container .child').length;
for(var i=0;i < elements; i++){
 $(".initial-child-container").clone().prependTo( ".marquee" );
};
var liEle = [];
var liEle = $(".initial-child-container .child");



}(jQuery));

