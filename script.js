const textareaEl = document.querySelector(".textarea");
const wordsNumberEl = document.querySelector(".stat__number--words");
const charactersNumberEl = document.querySelector(".stat__number--characters");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebookNumberEl = document.querySelector(".stat__number--facebook");

const inputHandler = () => {
  const numberOfWords =
    textareaEl.value.length === 0 ? 0 : textareaEl.value.split(" ").length;
  const numberOfCharacters = textareaEl.value.length;
  const twitterCharactersLeft = 280 - numberOfCharacters;
  const facebookCharactersLeft = 2200 - numberOfCharacters;

  if (twitterCharactersLeft < 0) {
    twitterNumberEl.classList.add("stat__number--limit");
  } else {
    twitterNumberEl.classList.remove("stat__number--limit");
  }

  if (facebookCharactersLeft < 0) {
    facebookNumberEl.classList.add("stat__number--limit");
  } else {
    facebookNumberEl.classList.remove("stat__number--limit");
  }

  wordsNumberEl.textContent = numberOfWords;
  charactersNumberEl.textContent = numberOfCharacters;
  twitterNumberEl.textContent = twitterCharactersLeft;
  facebookNumberEl.textContent = facebookCharactersLeft;
};

textareaEl.addEventListener("input", inputHandler);
