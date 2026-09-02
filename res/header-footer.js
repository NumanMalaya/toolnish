document.addEventListener("DOMContentLoaded", () => {
    // Inject header
    fetch('header.html')
      .then(res => res.text())
      .then(data => {
        document.body.insertAdjacentHTML("afterbegin", data);

        // Highlight current page link AFTER header is in DOM
        const currentPage = window.location.pathname.split("/").pop().split("?")[0];
        const menuLinks = document.querySelectorAll('.menu-items a');

        menuLinks.forEach(link => {
          const linkPage = link.getAttribute('href').split("/").pop().split("?")[0];
          if (linkPage === currentPage) {
            link.classList.add('active');
          }
        });
      });

    // Inject footer
    fetch('footer.html')
      .then(res => res.text())
      .then(data => {
        document.body.insertAdjacentHTML("beforeend", data);
      });
});

// Dark mode toggle
function toggleDark() {
    document.body.classList.toggle("dark");
}

// Mobile menu toggle
function toggleMenu() {
  const menu = document.querySelector('.right-menu .menu-items');
  menu.classList.toggle('show');
}