// Filter portfolio items
const filterButtons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".portfolio-gallery .item, .portfolio-gallery2 .items");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.getAttribute("data-category");

    items.forEach(item => {
      if (category === "all" || item.classList.contains(category)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Contact Form -> Google Sheets
document.querySelector("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(() => {
    alert("Thank you! Your message has been sent.");
    e.target.reset();
  })
  .catch(err => console.error("Error!", err.message));
});

// Email Collector -> Google Sheets
document.querySelector("#email-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(() => {
    alert("Subscribed successfully!");
    e.target.reset();
  })
  .catch(err => console.error("Error!", err.message));
});
