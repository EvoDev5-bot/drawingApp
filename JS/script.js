import { addEvents } from "./events.js";

window.addEventListener("load", () => {
  const ctx = canvas.getContext("2d");

  [canvas.width, canvas.height] = [700, 700];
  const drawing = {
    penColor: "#000000",
    modeIsPen: true,
    isMouseDown: false,
    penWidth: 1,
  };
  addEvents(drawing, ctx);
});
