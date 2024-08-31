$(document).keydown(function(event) {
    // Check if the pressed key is the up arrow key (key code 38)
    if (event.keyCode === 38) {
        $(".unzoomed-screen").toggleClass('transform-active');
        $(".icon").toggleClass('icon-active');
    }
});

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

