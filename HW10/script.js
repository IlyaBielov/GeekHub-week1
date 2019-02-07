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
    /**
     * @param {Point} center
     */
    constructor(center) {
        this._center = center;
    }

    /**
     * @return {object}
     */
    get center() {
        return this._center;
    }
}

class Polygon extends Shape {
    /**
     * @param {Point} center
     * @param {Point[]} points
     */
    constructor(center, points) {
        super(center);
        this._points = points;
        // this._vertices = points;
    }

    /**
     * @return {Array}
     */
    get points() {
        return this._points;
    }

    /**
     * @return {number}
     */
    perimeter() {
        this._sides = [];
        this._perimeter = 0;
        for (let i = 0; i < this._points.length; i++) {
            if (i === this._points.length - 1) {
                this._sides[i] = +((this._points[i].getDistance(this._points[0])).toFixed(2));
            } else {
                this._sides[i] = +((this._points[i].getDistance(this._points[i + 1])).toFixed(2));
            }
            this._perimeter = this._perimeter + this._sides[i];
        }
        return this._perimeter;
    }
}

const center = new Point(25, 10);
const points = [];

for (let i = 0; i < 6; i++) {
    const rand = (Math.random() * 100 + 2).toFixed();
    points[i] = new Point(+rand + 1, +rand - 1);
}

const polygon = new Polygon(center, points);
console.log(polygon.perimeter());
