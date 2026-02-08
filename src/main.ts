const resultButtons = Array.from(document.querySelectorAll<HTMLButtonElement>(".result-item"));
const previewAuthor = document.querySelector<HTMLDivElement>("#preview-author");
const previewBody = document.querySelector<HTMLParagraphElement>("#preview-body");

const setActiveResult = (button: HTMLButtonElement) => {
  resultButtons.forEach((item) => item.classList.remove("is-active"));
  button.classList.add("is-active");

  if (previewAuthor && previewBody) {
    previewAuthor.textContent = button.dataset.author ?? "@unknown";
    previewBody.textContent = button.dataset.preview ?? "Select a result to preview.";
  }
};

resultButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveResult(button));
});
