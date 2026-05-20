/**header scroll effect */
const /**{node element} */ $header = document.querySelector("[data-header]");
window.addEventListener("scroll",e => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active")})


    /* Mobile navigation toggle */
    const navToggle = document.querySelector(".nav-toggle");
    const mobileNav = document.querySelector(".mobile-nav");
     
    if (navToggle && mobileNav) {
      navToggle.addEventListener("click", () => {
        const isOpen = mobileNav.classList.toggle("open");
        navToggle.classList.toggle("open", isOpen);
        navToggle.setAttribute("aria-expanded", isOpen);
      });
     
      /* Close mobile nav when a link is clicked */
      mobileNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
          mobileNav.classList.remove("open");
          navToggle.classList.remove("open");
          navToggle.setAttribute("aria-expanded", false);
        });
      });
    }
     
    /* Highlight active nav link based on current page */
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".navbar-list a, .mobile-nav a").forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });

    /* Favourite button toggle */
    document.querySelectorAll(".fav-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const icon = btn.querySelector(".material-symbols-rounded");
        if (icon) {
          const filled = btn.classList.toggle("favorited");
          icon.style.fontVariationSettings = filled ? "'FILL' 1" : "'FILL' 0";
          icon.style.color = filled ? "var(--secondary-100)" : "";
        }
      });
    });