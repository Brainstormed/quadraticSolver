let output = document.getElementById("root");

function solveQuad() {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let c = document.getElementById("c").value;

  //The coefficients of the quadratic equation "ax^2 + bx + c = 0"
  const coefficient = {
    a: a,
    b: b,
    c: c,
  };

  if ((coefficient.a, coefficient.b, coefficient.c != "")) {
    const D = coefficient.b ** 2 - coefficient.a * coefficient.c * 4; // The discriminant of the quadratic b^2 -4*a*c

    let root1 = (-1 * coefficient.b + D ** 0.5) / (coefficient.a * 2); // the quadratic formula x = (-b +/- sqrt(D)) / 2a
    let root2 = (-1 * coefficient.b - D ** 0.5) / (coefficient.a * 2); // the quadratic formula x = (-b +/- sqrt(D)) / 2a

    output.style.color = "hsl(0, 0%, 0%)";
    output.style.userSelect = "all";

    output.textContent =
      D > 0
        ? "The roots are " + root1 + ", " + root2
        : D === 0
        ? "The root is " + root1
        : "There are no roots of this quadratic equation!";
  } else window.alert("Please enter a proper number");
}
