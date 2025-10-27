const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const html = document.documentElement;

// Check if a theme was previously saved
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  html.setAttribute("data-theme", savedTheme);
  themeIcon.src = savedTheme === "dark" ? "assets/icons/light.png" : "assets/icons/night.png";
}

// Toggle theme on click
themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Update image
  themeIcon.src = newTheme === "dark" ? "assets/icons/light.png" : "assets/icons/night.png";
});
