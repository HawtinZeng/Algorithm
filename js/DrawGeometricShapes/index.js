class Rectangle {
  constructor(point1, point2) {
    this.pt1 = point1
    this.pt2 = point2
  }
}
class Canvas {
  constructor() {
    this.container = []
  }
}
class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}
// With top-left cordinations   pt1                pt2
const rectangle = new Rectangle(new Point(10, 20), new Point(30, 40))
const po = new Point(20, 30)
console.log(isInRectangle(rectangle.pt1, rectangle.pt2, po))
// C: (A.x, B.y); D: (B.x, A.y)
function isInRectangle(A, B, P) {
  if (Math.abs(P.y - A.y) > Math.abs(B.y - A.y))
    return false
  if (Math.abs(P.x - B.x) > Math.abs(A.x - B.x))
    return false
  if (Math.abs(P.y - B.y) > Math.abs(A.y - B.y))
    return false
  if (Math.abs(P.x - A.x) > Math.abs(B.x - A.x))
    return false
  return true
}