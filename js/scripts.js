var triangle1Area = getTriangleArea(10, 15),
    triangle2Area = getTriangleArea(10, 0),
    triangle3Area = getTriangleArea(20, 15);

function getTriangleArea(a, h) {
  if (a > 0 && h > 0) {
    return 0.5 * a * h;
  } else {
    return 'Nieprawidłowe dane.';
  }
}

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);