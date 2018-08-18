(() => {
    class Point {
        constructor(public x: number, public y: number) {
        }

        add(point: Point) {
            return new Point(this.x + point.x, this.y + point.y);
        }
    }

    class Point3D extends Point {
        constructor(public x: number, public y: number, public z: number) {
            super(x, y);
        }

        add(point: Point3D) {
            return new Point3D(this.x + point.x, this.y + point.y, this.z + point.z);
        }
    }

    const p1: Point3D = new Point3D(1, 1, 1);
    const p2: Point3D = new Point3D(2, 2, 2);
    const p3: Point3D = p1.add(p2);

    console.log(p3);
})();