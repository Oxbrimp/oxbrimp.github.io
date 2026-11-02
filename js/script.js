// Local Storage Fetching 
let currentTheme = localStorage.getItem("theme") || "dark"; // default is dark
let currentFontSize = localStorage.getItem("font-size") || "medium"; // default is medium

console.log("JS : Settings : Basic is healthy and running!");

// Application of theme
function applyTheme(theme)
{
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

applyTheme(currentTheme); // Set theme when page opened 1st time.
const themeSelector = document.getElementById("theme");

if (themeSelector)
{
    console.log("Theme Changed");
    themeSelector.value = currentTheme;

    themeSelector.addEventListener("change", function()
    {
        currentTheme = themeSelector.value;
        applyTheme(currentTheme);
    });
}



// Font Size Handling
function applyFontSize(size)
{
    document.documentElement.setAttribute("data-font-size", size);
    localStorage.setItem("font-size", size);
}


applyFontSize(currentFontSize);
const font_resizer = document.getElementById("font-size");


if (font_resizer)
{
    font_resizer.value = currentFontSize;
    
    font_resizer.addEventListener("change", function()
    {
        currentFontSize = font_resizer.value;
        applyFontSize(currentFontSize);
    });
}



// Reset Button
const resetButton = document.getElementById("reset-settings");

if (resetButton)
{
    resetButton.addEventListener("click", function()
    {
        currentTheme = "dark";
        currentFontSize = "medium";

        applyTheme(currentTheme);
        applyFontSize("currentFontSize");

        if (themeSelector) themeSelector.value = currentTheme;
        if (font_resizer) font_resizer.value = currentFontSize;
    });
}