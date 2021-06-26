const btn = document.querySelector("#flexSwitchCheckDefault");
const theme = document.querySelector("#theme-link");

btn.addEventListener("click", () => {
    if (theme.getAttribute("href") == "light-theme.css") {
        theme.href = "dark-theme.css";
    } else {
        theme.href = "light-theme.css";
    }
});
