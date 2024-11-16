AOS.init();



const container = document.querySelector('.watch-container');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

// Get the width of a single .watch div (assuming they have consistent width)
const watchItem = container.querySelector('.watch'); // First watch div in the container
const scrollAmount = watchItem.offsetWidth * 3; 

function updateButtonVisibility() {
    const containerWidth = container.scrollWidth; // Total width of the container
    const containerVisibleWidth = container.offsetWidth; // Width of the visible part
    const currentScroll = container.scrollLeft; // Current scroll position

    // Show the right button if the container can be scrolled to the right
    if (currentScroll + containerVisibleWidth >= containerWidth) {
      rightBtn.style.opacity = 0;
      rightBtn.style.pointerEvents = 'none';
    }
    else {
        rightBtn.style.opacity = 1;
        rightBtn.style.pointerEvents = 'all';
    }
}

container.addEventListener('scroll', () => {
    if (container.scrollLeft > 0) {
        leftBtn.classList.add('visible');
        updateButtonVisibility();
    }
    else {
        leftBtn.classList.remove('visible');
    }
});


leftBtn.addEventListener('click', () => {
    container.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth',
    });
});
    
rightBtn.addEventListener('click', () => {
    container.scrollBy({
    left: scrollAmount,
    behavior: 'smooth',
    });
});



const videoElement = document.querySelector('video');
const VideoContainer = document.querySelector('.video-container');
const mainContainer = document.querySelector('main');
const playpauseBtn = document.getElementById('video-btn');
const watchVideo = document.getElementById('watch-video');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;

  // Maximum width and border-radius values
  const maxWidth = 100;  // Maximum width (initially 100%)
  const minWidth = 10;   // Minimum width allowed
  const maxBorderRadius = 70; // Maximum border-radius (in pixels)
  
  // Get the distance from the top of the viewport to the parent container
  const containerOffsetTop = mainContainer.getBoundingClientRect().top + window.scrollY;

  // Calculate the new width based on scroll position
  const scrollDistance = scrollTop - containerOffsetTop;
  const newWidth = Math.max(minWidth, maxWidth - (scrollDistance / 50)); // 100% to less than 100%
  const newBorderRadius = Math.min(scrollDistance / 5, maxBorderRadius); // Increase border-radius
  
  // Apply the calculated width and border-radius
  VideoContainer.style.width = `${newWidth}%`;  // Width is percentage
  videoElement.style.borderRadius = `${newBorderRadius}px`;  // Border-radius increases as scrolls
});


function togglePlayPause() {
    if (watchVideo.paused) {
        watchVideo.play();
        playpauseBtn.innerHTML = "<i class='bx bx-pause' ></i>";
    }
    else {
        watchVideo.pause();
        playpauseBtn.innerHTML = "<i class='bx bx-play'></i>";
    }
}

playpauseBtn.addEventListener('click', (event) => {
    event.stopPropagation();   // Prevents the event from triggering the container's click event
    togglePlayPause();
})

VideoContainer.addEventListener('click', () => {
    togglePlayPause();
})




const scrlimgContainer = document.querySelector('.img-scrl-container');
const imgScrlDiv = scrlimgContainer.querySelector('.img-scrl'); // First watch div in the container
const scrollAmountImg = imgScrlDiv.offsetWidth; 

const leftImgBtn = document.querySelector('.leftImg-btn');
const rightImgBtn = document.querySelector('.rightImg-btn');

function slideButton(rightArrwBtn, itemContainer) {
    const containerWidth = itemContainer.scrollWidth; // Total width of the container
    const containerVisibleWidth = itemContainer.offsetWidth; // Width of the visible part
    const currentScroll = itemContainer.scrollLeft; // Current scroll position

    // Show the right button if the container can be scrolled to the right
    if (currentScroll + containerVisibleWidth >= containerWidth) {
        rightArrwBtn.style.opacity = 0.5;
        rightArrwBtn.style.pointerEvents = 'none';
    }
    else {
        rightArrwBtn.style.opacity = 1;
        rightArrwBtn.style.pointerEvents = 'all';
    }
}

scrlimgContainer.addEventListener('scroll', () => {
    if (scrlimgContainer.scrollLeft > 0) {
        leftImgBtn.style.opacity = 1;
        leftImgBtn.style.pointerEvents = 'all';
        slideButton(rightImgBtn, scrlimgContainer);
    }
    else {
        leftImgBtn.style.opacity = 0.5;
        leftImgBtn.style.pointerEvents = 'none';
    }
});


leftImgBtn.addEventListener('click', () => {
    scrlimgContainer.scrollBy({
    left: -scrollAmountImg,
    behavior: 'smooth',
    });
});
    
rightImgBtn.addEventListener('click', () => {
    scrlimgContainer.scrollBy({
    left: scrollAmountImg,
    behavior: 'smooth',
    });
});




const exploreContainer = document.querySelector('.explore-container');
window.addEventListener('scroll', () => {
    const scrlBtnContainer = document.querySelector('.scrl-btn-container');
    
    // Get the bounding rectangle of the product container
    if (window.getComputedStyle(scrlBtnContainer).display !== 'none') {
        const containerRect = exploreContainer.getBoundingClientRect();
    
        // Check if the top of the product container has reached the top of the viewport
        if (containerRect.top <= 0 && containerRect.bottom > window.innerHeight) {
        // Fix the last product at the bottom of the viewport
        scrlBtnContainer.classList.add('fixed');
        } else {
        // Remove the fixed positioning when scrolling past the product container
        scrlBtnContainer.classList.remove('fixed');
        }
    }
  });

  
  const watchscrlContainer = exploreContainer.querySelector('.watch-scroll-container'); // First watch div in the container
  const watchScrlAmount = watchscrlContainer.offsetWidth; 
  
  const leftFeatBtn = document.querySelector('.leftfeat-btn');
  const rightFeatBtn = document.querySelector('.rightfeat-btn');
  

  watchscrlContainer.addEventListener('scroll', () => {
    if (watchscrlContainer.scrollLeft > 0) {
        leftFeatBtn.style.opacity = 1;
        leftFeatBtn.style.pointerEvents = 'all';
        slideButton(rightFeatBtn, watchscrlContainer);
    }
    else {
        leftFeatBtn.style.opacity = 0.5;
        leftFeatBtn.style.pointerEvents = 'none';
    }
});


leftFeatBtn.addEventListener('click', () => {
    watchscrlContainer.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth',
    });
});
    
rightFeatBtn.addEventListener('click', () => {
    watchscrlContainer.scrollBy({
    left: scrollAmount,
    behavior: 'smooth',
    });
});




const CardmainContainer = document.querySelector('.card-main-container');
const CardslideContainer = CardmainContainer.querySelector('.card-slide-container'); // First watch div in the container
const EachCard = CardslideContainer.querySelector('.card-container');
const CardscrlAmount = EachCard.offsetWidth; 

const CardleftBtn = document.querySelector('.cardleft-btn');
const CardrightBtn = document.querySelector('.cardright-btn');


CardslideContainer.addEventListener('scroll', () => {
  if (CardslideContainer.scrollLeft > 0) {
    CardleftBtn.style.opacity = 1;
    CardleftBtn.style.pointerEvents = 'all';
      slideButton(CardrightBtn, CardslideContainer);
  }
  else {
    CardleftBtn.style.opacity = 0.5;
    CardleftBtn.style.pointerEvents = 'none';
  }
});


CardleftBtn.addEventListener('click', () => {
    CardslideContainer.scrollBy({
  left: -CardscrlAmount,
  behavior: 'smooth',
  });
});
  
CardrightBtn.addEventListener('click', () => {
    CardslideContainer.scrollBy({
  left: CardscrlAmount,
  behavior: 'smooth',
  });
});




const EssenMainContainer = document.querySelector('.watch-essential-container');
const EssenSlideContainer = EssenMainContainer.querySelector('.essential-img-container'); // First watch div in the container
const ImgScrlAmount = EssenSlideContainer.offsetWidth; 

const ImgLeftBtn = document.querySelector('.Essenleft-btn');
const ImgRightBtn = document.querySelector('.Essenright-btn');


EssenSlideContainer.addEventListener('scroll', () => {
  if (EssenSlideContainer.scrollLeft > 0) {
    ImgLeftBtn.style.opacity = 1;
    ImgLeftBtn.style.pointerEvents = 'all';
      slideButton(ImgRightBtn, EssenSlideContainer);
  }
  else {
    ImgLeftBtn.style.opacity = 0.5;
    ImgLeftBtn.style.pointerEvents = 'none';
  }
});


ImgLeftBtn.addEventListener('click', () => {
    EssenSlideContainer.scrollBy({
  left: -ImgScrlAmount,
  behavior: 'smooth',
  });
});
  
ImgRightBtn.addEventListener('click', () => {
    EssenSlideContainer.scrollBy({
  left: ImgScrlAmount,
  behavior: 'smooth',
  });
});
