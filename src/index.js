// You can also watch the full tutorial on YouTube.
// Here is the link https://youtu.be/76sZWb5Qsco
// Like and Sub to the Channel for more videos

const themeSwitcher = document.querySelector(".switcher");

const body = document.body;

// set theme to theme already in localstorage
const theme = localStorage.getItem("theme");

if (theme) {
  body.classList.add(theme);
} else {
  localStorage.setItem("theme", "light");
}

themeSwitcher.addEventListener("click", () => {
  if (localStorage.getItem("theme") === "dark") {
    body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
  }
});
