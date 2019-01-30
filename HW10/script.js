class Point {
    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    getPointAtOffset(x1, y1) {
        return new Point(this.x + x1, this.y + y1);
    }

    getDistance(point) {
        return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2));
    }
}

class Shape {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    get point() {
        return new Point(this._x, this._y);
    }
}

class Polygon extends Shape {
    constructor(center, ...points) {
        super(...points);
        this._center = center;
        this._vetrex = [this.point.x, this.point.y];
    }

    get numberOfSides() {
        return this._n.length;
    }

    set x1(x1) {
        return this._x1 = x1;
    }

    set y1(y1) {
        return this._y1 = y1;
    }

    perimeter() {
        this._res = this.point.getPointAtOffset(this._x1, this._y1);
        this._n = [
            this.point.getDistance(this._res),
            this.point.getDistance(this._res),
            this.point.getDistance(this._res),
            this.point.getDistance(this._res),
            this.point.getDistance(this._res),
            this.point.getDistance(this._res),
        ];

        return this._n.length * this._n[0];
    }
}

const polygon = new Polygon(0, 21, 20);

polygon.x1 = 15;
polygon.y1 = 25;

const perimeter = polygon.perimeter().toFixed();

console.log(`Number of Sides: ${polygon.numberOfSides}`)
console.log(`Perimeter: ${perimeter}`);
