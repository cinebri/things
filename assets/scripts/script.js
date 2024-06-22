document.addEventListener("DOMContentLoaded", (e) => {
  const collapseBtns = d.querySelectorAll(".btn-collapse");
  collapseBtns.forEach((collapseBtn) => {
    collapseBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const giversElement = e.target.parentElement.parentElement;
      giversElement.classList.toggle("givers-collapsed");
    });
  });
});
