(() => {
    class Point {
        constructor(public x: number, public y: number) {
        }

        add(point: Point) {
            return new Point(this.x + point.x, this.y + point.y);
        }
    }

    const p1: Point = new Point(2, 4);
    const p2: Point = new Point(3, 5);
    const p3: Point = p1.add(p2);
    console.log(p3);
})();
