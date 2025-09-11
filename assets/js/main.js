console.log("Portfolio ready!");

document.querySelectorAll("nav a[href^='#']").forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(a.getAttribute("href"))?.scrollIntoView({ behavior: "smooth" });
  });
});
