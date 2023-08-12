const textElement = document.getElementById('text');
const text = "/* Hello! I'm Derek Parker */";

let index = 0;
function typeText() {
    if(index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 50);
    }
}

typeText(); //Adjust the typing speed (in milliseconds)

// Function to check if an element is in the viewport
function isInViewport(element, offset = 0) {
    const bounding = element.getBoundingClientRect();
    const topOffset = bounding.top - offset;
    const bottomOffset = bounding.bottom + offset;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return topOffset <= windowHeight / 2 && bottomOffset >= windowHeight / 2;
  }  
  
  // Function to handle the scroll event
  function handleScroll() {
    const elements = document.querySelectorAll('.popUp');
    elements.forEach((element) => {
      if (isInViewport(element, 230)) {
        element.classList.add('visible');
      }
    });
  }
  
  // Add event listener for scroll event
  window.addEventListener('scroll', handleScroll);
  
  // Trigger the function once on page load in case the element is already in the viewport
  handleScroll();



  const header = document.querySelector('.navbar');

    window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

