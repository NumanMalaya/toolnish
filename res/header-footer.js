// Inject header and footer into every page
document.addEventListener("DOMContentLoaded", () => {
    fetch('header.html').then(res => res.text()).then(data => {
        document.body.insertAdjacentHTML("afterbegin", data);
    });
    fetch('footer.html').then(res => res.text()).then(data => {
        document.body.insertAdjacentHTML("beforeend", data);
    });
});

function toggleDark() {
    document.body.classList.toggle("dark");
}