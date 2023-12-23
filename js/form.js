const form = document.querySelector(".form");

const handleSubmit = (e) => {
  console.log("it works");
  e.preventDefault();
  const user = e.target.elements.name.value;
  alert(`${user}, дякуємо за ваше звернення! Будь-ласка очікуйте,скоро з вами зв'яжеться оператор.`);
  e.target.reset();
};

form.addEventListener("submit", handleSubmit);
