/* MICHAL FITNESS STUDIO — interactions */
(function () {
  "use strict";

  /* sticky header state */
  var hdr = document.querySelector(".hdr");
  function onScroll() {
    if (!hdr) return;
    hdr.classList.toggle("scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* mobile nav */
  var burger = document.querySelector(".burger");
  var scrim = document.querySelector(".nav-scrim");
  function closeNav() { document.body.classList.remove("nav-open"); }
  if (burger) {
    burger.addEventListener("click", function () {
      document.body.classList.toggle("nav-open");
    });
  }
  if (scrim) scrim.addEventListener("click", closeNav);
  document.querySelectorAll(".nav a").forEach(function (a) {
    a.addEventListener("click", closeNav);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeNav(); closeLightbox(); }
  });

  /* FAQ accordion */
  document.querySelectorAll(".qa-q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var qa = btn.closest(".qa");
      var ans = qa.querySelector(".qa-a");
      var open = qa.classList.toggle("open");
      ans.style.maxHeight = open ? ans.scrollHeight + "px" : null;
    });
  });

  /* gallery lightbox */
  var lb = document.querySelector(".lb");
  var lbImg = lb ? lb.querySelector("img") : null;
  function closeLightbox() { if (lb) lb.classList.remove("open"); }
  document.querySelectorAll("[data-lb]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      if (!lb) return;
      lbImg.src = el.getAttribute("href") || el.getAttribute("data-lb");
      lb.classList.add("open");
    });
  });
  if (lb) {
    lb.addEventListener("click", function (e) {
      if (e.target === lb || e.target.classList.contains("lb-close")) closeLightbox();
    });
  }

  /* scroll reveal */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  /* footer year */
  var y = document.getElementById("yr");
  if (y) y.textContent = new Date().getFullYear();
})();
