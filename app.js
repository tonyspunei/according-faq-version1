const accordionItemsEl = document.getElementsByClassName("accordion__item");

function main() {
  for (let item of accordionItemsEl) {
    let accHeader = item.firstElementChild;
    accHeader.addEventListener("click", function() {
      this.classList.toggle("active");
      let accDetails = this.nextElementSibling;
      if (accDetails.style.maxHeight) {
        this.lastElementChild.innerHTML = "+";
        accDetails.style.maxHeight = null;
      } else {
        this.lastElementChild.innerHTML = "-";
        accDetails.style.maxHeight = accDetails.scrollHeight + "px";
      }
    })
  }
}

main();