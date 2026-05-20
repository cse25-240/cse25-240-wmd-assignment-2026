/**header scroll effect 
Header hide-on-scroll-down / show-on-scroll-up */
const $header = document.querySelector("[data-header]");
if ($header) {
  let lastScrollY = window.scrollY;
 
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
 
    // Add "active" dark background once user scrolls past 50px
    $header.classList.toggle("active", currentScrollY > 50);
 
    // Hide header when scrolling DOWN, show when scrolling UP
    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      // Scrolling down — slide header out of view
      $header.classList.add("hidden");
    } else {
      // Scrolling up — slide header back in
      $header.classList.remove("hidden");
    }
 
    lastScrollY = currentScrollY;
  }, { passive: true });
}

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