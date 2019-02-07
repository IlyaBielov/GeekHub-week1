class Point {

    constructor(private x: number, private y: number) {
    }

    public getX() {
        return this.x;
    }

    public getY() {
        return this.y;
    }

    protected getPointAtOffset(x1: number, y1: number) {
        return new Point(this.x + x1, this.y + y1);
    }

    public getDistance(point: Point) {
        return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2));
    }
}

class Shape {

    constructor(private center: Point) {
    }

    getCenter(): object {
        return this.center;
    }
}

class Polygon extends Shape {
    private sides: Array<number> = [];
    private perimeter: number = 0;


    constructor(center: Point, private points: Array<Point>) {
        super(center);
    }

    public getPoints(): Array<Point> {
        return this.points;
    }

    public getPerimeter() : number{

        for (let i = 0; i < this.points.length; i++) {
            if (i === this.points.length - 1) {
                this.sides[i] = +((this.points[i].getDistance(this.points[0])).toFixed(2));
            } else {
                this.sides[i] = +((this.points[i].getDistance(this.points[i + 1])).toFixed(2));
            }
            this.perimeter = this.perimeter + this.sides[i];
        }
        return +this.perimeter.toFixed(2);
    }
}

const center: Point = new Point(25, 10);
const points: Array<Point> = [];

for (let i = 0; i < 6; i++) {
    const rand = (Math.random() * 100 + 2).toFixed();
    points[i] = new Point(+rand + 1, +rand - 1);
}

const polygon: Polygon = new Polygon(center, points);
console.log(polygon.getPerimeter());
