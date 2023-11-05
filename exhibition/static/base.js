const navOpenButton = document.querySelector('#navopen-button');
const navbar = document.querySelector('#navbar');

navOpenButton.addEventListener('click', (e) => {
  openNav();
})

/*
const bgm = new Howl({
  src: bgmusicPath,
  loop: true
})
*/

// Getting rid of the preloader once content has loaded
/*
window.addEventListener('load', (_) => {
  document.querySelector('#preloader > .text').innerHTML = 'The Symphony Begins Here'
  document.querySelector('#click-indicator').innerText = 'Click'
  document.querySelector('#preloader').addEventListener('click', (e) => {
    document.querySelector('#sound-icon').style.display = "block";
    document.querySelector('#preloader').style.display = "none";
    bgm.play()
  })

  document.querySelector('#sound-icon').addEventListener('click', (e) => {
    document.querySelector('#sound-icon').classList.toggle('fa-music');
    document.querySelector('#sound-icon').classList.toggle('fa-volume-xmark');
    if (bgm.playing()) {
      bgm.pause()
    } else {
      bgm.play()
    }
  })
})
*/
// Replace home sign in and links with icons when on mobile
// The function will handle resize event for the navbar
function navbarResizeHandler() {
  const homelink = document.querySelector('#home-link');
  const signinlink = document.querySelector('#signin-link');
  const signoutlink = document.querySelector('#signout-link');
  const navopenLink = document.querySelector('#nav-open-button');
  const dashboardLink = document.querySelector('#dashboard-link');
  if (window.innerWidth < 720) {
    // Replace home text with icon
    homelink.innerHTML = '<i class="fa-solid fa-house"></i>'
    // Sign in and sign out links need to be handled one by one
    // Because these links are generated on the HTML by django
    // We have to check whether the element exists before attempting to style i
    if (signinlink) {
      signinlink.innerHTML = '<i class="fa-solid fa-arrow-right-to-bracket"></i>';
    }
    if (signoutlink) {
      signoutlink.innerHTML = '<i class="fa-solid fa-arrow-right-to-bracket"></i>';
    }
    if (dashboardLink) {
      dashboardLink.innerHTML = '<i class="fa-solid fa-house-user"></i>';
    }
    // Replacing the navopen button inside with an icon
    if (navopenLink) {
      navopenLink.innerHTML = '<i class="fa-solid fa-ellipsis"></i>';
    }
  } else {
    homelink.innerHTML = 'Home';
    if (signinlink) {
      signinlink.innerHTML = 'Sign In';
    }
    if (signoutlink) {
      signoutlink.innerHTML = 'Sign Out';
    }
    if (dashboardLink) {
      dashboardLink.innerHTML = 'My Dashboard';
    }
    if (navopenLink) {
      navopenLink.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  }
}

function orientationHandler() {
  // If device is mobile
  if (window.screen.height <= 500) {
    // And in landscape mode
    if (window.screen.width > window.screen.height) {
      document.querySelector('#orientation-message').style.display = 'flex';
      document.querySelector('#orientation-message').style.backgroundColor = 'hsla(0, 0%, 100%, 1.0)';
      document.querySelector('#orientation-message').innerHTML = `<h1> This website is best viewed in portrait mode on mobile </h1>`;
    } else {
      document.querySelector('#orientation-message').style.display = 'none';  
    }
  } else {
    // Otherwise don't show orientation message
    document.querySelector('#orientation-message').style.display = 'none';
  }
}

window.addEventListener('resize', (_) => {
  navbarResizeHandler();
  orientationHandler()
})

window.addEventListener('orientationchange', (_) => {
  orientationHandler();
  location.reload();
})

navbarResizeHandler();
orientationHandler();

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  $(".nav-overlay-link-left").addClass('slide-left');
  $(".nav-overlay-link-right").addClass('slide-right');

}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  $(".nav-overlay-link-left").removeClass('slide-left');
  $(".nav-overlay-link-right").removeClass('slide-right');

}


$(window).on('load', function () { // makes sure the whole site is loaded 
  $('#status').delay(300).fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
})


