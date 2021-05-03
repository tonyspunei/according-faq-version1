const accordingItemEl = document.getElementsByClassName("accordion__item");

function accordion() {
  for (let elem of accordingItemEl) {
    let accHeader = elem.firstElementChild;
    accHeader.addEventListener("click", function () {
      let accDetails = this.nextElementSibling;
      if (accDetails.style.maxHeight) {
        this.classList.remove("active");
        this.lastElementChild.innerHTML = "+";
        accDetails.style.maxHeight = null;
      } else {
        this.classList.add("active");
        this.lastElementChild.innerHTML = "-";
        accDetails.style.maxHeight = accDetails.scrollHeight + "px";
      }
    });
  }
}

accordion();
