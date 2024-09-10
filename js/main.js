
// /* ------------------- home ----------------------*/
let dif = document.querySelector("#diffrent");
let arrow1 = document.querySelector(".arrow1");
let arrow2 = document.querySelector(".arrow2");
let homeElement = document.querySelector('.back'); // Correctly define homeElement

const slides = [
    {
        background: 'url("./photos/Гивико(1)_LE_auto_x2.jpg")',
        text: 'where every flavor <br> tells a story'
    },
    {
        background: 'url("./photos/ppiz.jpg")',
        text: 'for the love of <br> delicious food'
    },
    {
        background: 'url("./photos/Easy 15-minute Cheat Ramen - Use Your Noodles_LE_auto_x2.jpg")',
        text: 'flavors inspired by <br> the seasons'
    }
];


let current = 0;
const n = slides.length;

function restartAnimation() {
    // Remove the scale-in class to reset animation
    homeElement.classList.remove('scale-in');
    
    // Force reflow to ensure the animation restarts
    void homeElement.offsetWidth; // Trigger reflow
    //newwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
    
    // Re-add the scale-in class to start the animation
    homeElement.classList.add('scale-in');
}

function updateSlide() {
    // Set new background image
    homeElement.style.backgroundImage = slides[current].background;
    
    // Update the text
    dif.innerHTML = slides[current].text;

    // Add the fade-in class to trigger the fade-in animation
    dif.classList.add('fade-in');

    // Restart the scaling animation
    restartAnimation();
}

function handleArrowClick(increment) {
    // Remove fade-in class to start fade-out
    dif.classList.remove('fade-in');

    // Update current index
    current = (current + increment + n) % n;
    
    // Update slide after a short delay to allow fade-out
    setTimeout(updateSlide, 800);
}

arrow1.addEventListener("click", () => {
    handleArrowClick(1); // Move to the next slide
});

arrow2.addEventListener("click", () => {
    handleArrowClick(-1); // Move to the previous slide
});


window.onload = ()=>{

    // Set new background image
    homeElement.style.backgroundImage = slides[0].background;
        
    // Update the text
    dif.innerHTML = slides[0].text;

    // Add the fade-in class to trigger the fade-in animation
    dif.classList.add('fade-in');

    // Restart the scaling animation
    homeElement.classList.add('scale-in');
}


// ======================== header
let head = document.querySelector(".home .overlay header");
let info = document.querySelector(".home .overlay .info");

let lastScrollY = window.scrollY; // Store the initial scroll position

// Function to handle the scroll behavior
function handleScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY === 0) {
        // At the top of the page
        head.style.top = "0"; // Show the header
        head.style.backgroundColor = ""; // No background color
        info.style.display = "block"; // Show the info section
    } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        head.style.top = "-100px"; // Hide the header by moving it up
        info.style.display = "none"; // Hide the info section
    } else {
        // Scrolling up
        head.style.top = "0"; // Show the header
        head.style.backgroundColor = "rgb(54, 52, 52)"; // Dark background color
    }

    // Update the last scroll position
    lastScrollY = currentScrollY;
}

// Add the scroll event listener
window.addEventListener("scroll", handleScroll);

// Call the function on page load to set the correct initial state
document.addEventListener("DOMContentLoaded", handleScroll);


/* ---------------------------------- list ------------------------------ */

let llist = document.querySelector("#llist");
let list = document.querySelector("#list");

let wrong = document.querySelector("#wrong");

let link = document.querySelector(".link");

list.addEventListener("click" , ()=>{
    llist.classList.toggle("visible-list");
    llist.classList.toggle("hidden-list");
    
});


wrong.addEventListener("click" , ()=>{
    llist.classList.toggle("visible-list");
    llist.classList.toggle("hidden-list");
    
});
let links = document.querySelectorAll(".link"); // Select all elements with the class 'link'

links.forEach(element => {
    element.addEventListener("click", () => {
        llist.classList.toggle("visible-list");
        llist.classList.toggle("hidden-list");
    });
});





/*================================= mobile veiw ====================================== */


// Automatically change background for screens with width <= 767px
function startAutoSlide() {
    if (window.innerWidth <= 767) {
        setInterval(() => {
            handleArrowClick(1); // Automatically move to the next slide
        }, 9000); 
    }
}

// Run the auto-slide function on window resize and load
window.addEventListener('resize', startAutoSlide);
window.addEventListener('load', startAutoSlide);



