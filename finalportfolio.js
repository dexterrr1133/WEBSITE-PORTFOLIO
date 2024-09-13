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

const button = document.getElementById("toggle-button");
const targetElements = document.getElementsByClassName("unzoomed-screen");

button.addEventListener("click", function() {
  for (let i = 0; i < targetElements.length; i++) {
    // Check the current display property and toggle it
    if (targetElements[i].style.display === "flex") {
      targetElements[i].style.display = "none";
    } else {
      targetElements[i].style.display = "flex";
    }
  }
});



