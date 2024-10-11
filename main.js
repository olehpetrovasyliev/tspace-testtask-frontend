const spinButton = document.querySelector(".button-spin");
const firstBonus = document.querySelector(".bonus_firstSpin");
const secondBonus = document.querySelector(".bonus_secondSpin");
const wheelOptions = document.querySelector(".wheel__image-options");

const spinSound = document.getElementById("spinSound");
const winSound = document.getElementById("winSound");

const formToggleButtons = document.querySelectorAll(
  ".modal__button-formToggle"
);

const backdrop = document.querySelector(".backdrop");
const emailLabel = document.getElementById("emailLabel");
const phoneLabel = document.getElementById("phoneLabel");
const form = document.querySelector(".modal__form");

let count = 0;

spinButton.addEventListener("click", () => {
  count++;
  spinSound.currentTime = 0;
  spinSound.play();
  spinButton.disabled = true;
  if (count === 1) {
    wheelOptions.classList.add("firstSpin");
    setTimeout(() => {
      firstBonus.classList.remove("hidden");
      spinButton.disabled = false;
    }, 5100);
  } else if (count === 2) {
    wheelOptions.classList.add("secondSpin");
    setTimeout(() => {
      secondBonus.classList.remove("hidden");
      winSound.currentTime = 0;
      winSound.play();
    }, 5100);

    setTimeout(() => {
      backdrop.classList.remove("hidden");
    }, 7100);
  }
});

formToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    formToggleButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    emailLabel.classList.toggle("hidden");
    phoneLabel.classList.toggle("hidden");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const formObject = Object.fromEntries(formData.entries());

  console.log(formObject);
});
