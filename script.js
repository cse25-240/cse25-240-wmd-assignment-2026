/**header scroll effect */
const /**{node element} */ $header = document.querySelector("[data-header]");
window.addEventListener("scroll",e => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active")})