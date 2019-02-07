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


    constructor(center: Point, protected points?: Array<Point>) {
        super(center);
    }

    public getVertices(): Array<Point> {
        return this.points;
    }

    public getPerimeter(sides: number = 6): number {

        for (let i = 0; i < sides; i++) {
            if (i === sides - 1) {
                this.sides[i] = +((this.points[i].getDistance(this.points[0])).toFixed(2));
            } else {
                this.sides[i] = +((this.points[i].getDistance(this.points[i + 1])).toFixed(2));
            }
            this.perimeter = this.perimeter + this.sides[i];
        }
        return +this.perimeter.toFixed();
    }
}

class Rectangle extends Polygon {
    private area: number = 0;

    constructor(center: Point, private width: number, private height: number) {
        super(center, points);
    }

    public getArea(): number {
        this.area = (this.width * this.height);

        return this.area;
    }

    public getPerimeter(): number {
        return (this.width * 2 + this.height * 2);
    }
}

class Square extends Rectangle {
    constructor(center: Point, width: number) {
        super(center, width, width);
    }
}

class Circle extends Shape {
    private area: number = 0;

    constructor(center: Point, private radius: number) {
        super(center);
    }

    public getArea(): number {
        this.area = (Math.PI * Math.pow(this.radius, 2));

        return this.area;
    }

    public getPerimeter(): number {
        return +((Math.PI * (this.radius * 2)).toFixed());
    }
}

function createPoints(amount: number): void {
    for (let i = 0; i < amount; i++) {
        const rand = (Math.random() * 100 + 2).toFixed();
        points[i] = new Point(+rand + 1, +rand - 1);
    }
}

const points: Array<Point> = [];

createPoints(6);

interface IShapes {
    Shape: Shape;
    Polygon: Polygon;
    Rectangle: Rectangle;
    Square: Square;
    Circle: Circle;
    Point: Point;
}

const Shapes: IShapes = {
    Shape: new Shape(this.Point),
    Polygon: new Polygon(this.Point, points),
    Rectangle: new Rectangle(this.Point, 50, 20),
    Square: new Square(this.Point, 25),
    Circle: new Circle(this.Point, 20),
    Point: new Point(25, 10)
};
