export function addEvents(drawing, ctx) {
  toggle.addEventListener("click", (e) => {
    const opposites = {
      "Pen Mode": "Eraser Mode",
      "Eraser Mode": "Pen Mode",
    };
    drawing.modeIsPen = !drawing.modeIsPen;
    e.target.innerText = opposites[e.target.innerText];
  });

  input.addEventListener("input", (e) => {
    drawing.penColor = e.target.value;
  });

  input2.addEventListener("input", (e) => {
    drawing.penWidth = e.target.value;
  });

  canvas.addEventListener("mousedown", () => {
    drawing.isMouseDown = true;
  });

  canvas.addEventListener("mouseup", () => {
    drawing.isMouseDown = false;
  });

  canvas.addEventListener("mousemove", (e) => {
    const clickX = e.x - canvas.getBoundingClientRect().left;
    const clickY = e.y - canvas.getBoundingClientRect().top;

    console.log(clickX, clickY);

    if (drawing.modeIsPen && drawing.isMouseDown) {
      ctx.fillStyle = drawing.penColor;

      ctx.fillRect(
        clickX - drawing.penWidth / 2,
        clickY - drawing.penWidth / 2,
        drawing.penWidth,
        drawing.penWidth
      );
    }
  });

  canvas.addEventListener("mousemove", (e) => {
    const clickX = e.x - canvas.getBoundingClientRect().left;
    const clickY = e.y - canvas.getBoundingClientRect().top;

    console.log(clickX, clickY);

    if (!drawing.modeIsPen && drawing.isMouseDown) {
      ctx.fillStyle = drawing.penColor;

      ctx.clearRect(
        clickX - drawing.penWidth / 2,
        clickY - drawing.penWidth / 2,
        drawing.penWidth,
        drawing.penWidth
      );
    }
  });
}
