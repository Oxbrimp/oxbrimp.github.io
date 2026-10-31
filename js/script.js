let currentTheme = localStorage.getItem("theme") || "dark"; // default is dark

function applyTheme(theme)
{
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

applyTheme(currentTheme); // Set theme when page opened 1st time.
const themeSelector = document.getElementById("theme");

if (themeSelector)
{
    themeSelector.value = currentTheme;

    themeSelector.addEventListener("change", function()
    {
        currentTheme = themeSelector.value;
        applyTheme(currentTheme);
    });
}