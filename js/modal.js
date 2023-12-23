const modal = document.querySelector(".backdrop");
const modalClose = document.querySelector(".modal-cross");
const modalOpen = document.querySelector(".btn-order");

const CloseModal = () => {
  modal.classList.add("is-hidden");
  document.body.classList.remove(".no-scroll");
};
const OpenModal = () => {
  modal.classList.remove("is-hidden");
  document.body.classList.add(".no-scroll");
};

modalClose.addEventListener("click", CloseModal);
modalOpen.addEventListener("click", OpenModal);
