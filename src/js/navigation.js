const toggleNav = document.querySelector(".toggle-nav");
const nav = document.querySelector(".nav");

toggleNav.addEventListener("change", () => {
	nav.classList.toggle("hidden");
});
