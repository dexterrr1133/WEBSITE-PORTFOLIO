document.querySelector(".dynamic-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();

        const input = document.querySelector('.dynamic-input');
        const inputText = this.value.toLowerCase();

        // Map commands to their corresponding elements
        const elements = {
            "about": document.querySelector(".about"),
            "certification": document.querySelector(".certification"),
            "projects": document.querySelector(".projects"),
            "social media": document.querySelector(".social-media"),
        };

        Object.values(elements).forEach(element => {
            element.style.display = "none";
        });

        Object.keys(elements).forEach(command => {
            if (inputText.includes(command)) {
                elements[command].style.display = "flex";
            } else {
                elements[command].style.display = "none";
            }
        });

        this.value = "";
    }
});

const button = document.getElementById("icon");
const close = document.getElementById("close");
const targetElements = document.getElementsByClassName("window");

// Toggle display between 'flex' and 'none' when the toggle-button is clicked
button.addEventListener("click", function() {
  for (let i = 0; i < targetElements.length; i++) {
    const computedStyle = window.getComputedStyle(targetElements[i]);

    // Toggle the display between flex and none
    if (computedStyle.display === "none") {
      targetElements[i].style.display = "flex";
    } else {
      targetElements[i].style.display = "none";
    }
  }
});

// Always hide the elements when the close button is clicked
close.addEventListener("click", function() {
  for (let i = 0; i < targetElements.length; i++) {
    targetElements[i].style.display = "none"; // Always hide
  }
});




