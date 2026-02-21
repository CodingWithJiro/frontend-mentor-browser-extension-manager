import "@testing-library/jest-dom";

beforeAll(() => {
  HTMLDialogElement.prototype.showModal = function () {
    this.open = true;
    this.setAttribute("open", "");
  };
  HTMLDialogElement.prototype.close = function () {
    this.open = false;
    this.removeAttribute("open");
  };
});
