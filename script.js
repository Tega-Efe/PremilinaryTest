const swiper = new Swiper('.js-testimonials-slider', {
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
      el: '.js-testimonials-pagination',
      clickable: true,
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
      },
    },
    // Enable swipe functionality
    allowTouchMove: true,
    // Enable mouse drag
    mousewheel: true,
  });
  
  
  const hamburger = document.querySelector(".hamburger-icon");
  const closeIcon = document.querySelector(".close-icon");
  const menuLinks = document.getElementById("menu-links");
  
  hamburger.addEventListener("click", toggleMenu);
  closeIcon.addEventListener("click", toggleMenu);
  
  function toggleMenu() {
    if (menuLinks.style.maxHeight === "0px" || menuLinks.style.maxHeight === "") {
      // Menu is closed; open it
      menuLinks.style.maxHeight = "300px"; // Adjust the height as needed
      hamburger.style.display = "none";
      closeIcon.style.display = "block";
    } else {
      // Menu is open; close it
      menuLinks.style.maxHeight = "0";
      hamburger.style.display = "block";
      closeIcon.style.display = "none";
    }
  }
  
  
  
  
  
  
 const year = document.querySelector('#year');
  
  
  const presentDate = new Date();
  const presentYear = presentDate.getFullYear();
  console.log(presentYear)
  year.innerHTML = presentYear;
  
  
  
  
  
  
  