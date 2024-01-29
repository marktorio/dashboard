const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

//function for sidebar toggle, trigger the sidebar to close
    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
    });


//function for dark mode toggle, trigger the css code in dark color
    modeSwitch.addEventListener("click", () => {
        body.classList.toggle("dark");
//Condition that switch the text to Light or Dark 
        if(body.classList.contains("dark")) {
            modeText.innerText = "Light Mode"
        } else {
            modeText.innerText = "Dark Mode"
        }
    });

   