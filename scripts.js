"use strict";

const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

const themeToggleBtn = document.getElementById("status-icon");

themeToggleBtn.addEventListener("click", function () {
  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");

    localStorage.setItem("theme", "light-theme");
  } else {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");

    localStorage.setItem("theme", "dark-theme");
  }
});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light-theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
}
