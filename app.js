
    // const mobile = document.querySelector('.menu-toggle');
    // const mobileLink = document.querySelector('.sidebar');
    //  const main = document.querySelector('.main');
    
    //     mobile.addEventListener('click', function() {
    //         mobileLink.classList.toggle('show');
    //     });

    //     mobileLink.addEventListener('click', function() {
    //         mobileLink.classList.remove('show');
    //     });

    document.addEventListener('DOMContentLoaded', function() {
        const mobile = document.querySelector('.menu-toggle');
        const mobileLink = document.querySelector('.sidebar');
    
        if (mobile && mobileLink) {
            mobile.addEventListener('click', function(event) {
                event.stopPropagation();
                mobileLink.classList.toggle('show');
            });
    
            document.addEventListener('click', function() {
                if (mobileLink.classList.contains('show')) {
                    mobileLink.classList.remove('show');
                }
            });
    
            mobileLink.addEventListener('click', function(event) {
                event.stopPropagation();
            });
        } else {
            console.error('Menu toggle or sidebar element not found');
        }
    });

    const step =100;
    const stepFilter =60;
    const scrolling = true;
    document.addEventListener("DOMContentLoaded", function() {
        const backButton = document.querySelector(".back");
        const nextButton = document.querySelector(".next");
        const highlightWrapper = document.querySelector(".highlight-wrapper");
        
        const step = 100;  // Define the scroll step value as needed
    
        // Handle the "back" button click
        if (backButton) {
            backButton.addEventListener("click", function(e) {
                e.preventDefault();
                highlightWrapper.scrollLeft -= step;  // Scroll left by 'step' pixels
            });
        }
    
        // Handle the "next" button click
        if (nextButton) {
            nextButton.addEventListener("click", function(e) {
                e.preventDefault();
                highlightWrapper.scrollLeft += step;  // Scroll right by 'step' pixels
            });
        }
    });
    document.addEventListener('DOMContentLoaded', function() {
        var backMenus = document.querySelector('.back-menus');
        var nextMenus = document.querySelector('.next-menus');
        var fillterWrapper = document.querySelector('.fillter-wrapper');

        if (backMenus) {
            backMenus.addEventListener('click', function(e) {
                e.preventDefault();
                fillterWrapper.scrollLeft -= stepFilter;  // Scroll left by `stepFilter` pixels
            });
        }
    
        if (nextMenus) {
            nextMenus.addEventListener('click', function(e) {
                e.preventDefault();
                fillterWrapper.scrollLeft += stepFilter;  // Scroll right by `stepFilter` pixels
            });
        }
    });
      function subscribeBtn() {
        const btnElement = document.querySelector(".js-addtocart");

        if (btnElement.innerText === "AddToCart") {
          btnElement.innerText = "Added";
          btnElement.classList.add('is-added');
        } else {
          btnElement.innerText = "AddToCart";
          btnElement.classList.remove('is-added')
        }
      }


      document.querySelector('.btnjs').addEventListener("click" , () =>{
        subscribeBtn();
      })