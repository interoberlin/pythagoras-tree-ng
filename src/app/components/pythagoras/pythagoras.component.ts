import {ChangeDetectorRef, Component, Inject, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Point} from '../../model/Point';
import {DOCUMENT} from '@angular/platform-browser';

@Component({
  selector: 'app-pythagoras',
  templateUrl: './pythagoras.component.html',
  styleUrls: ['./pythagoras.component.scss']
})
export class PythagorasComponent implements OnChanges {
  // Parameters passed to next iteration
  @Input() iteration = 0;
  @Input() angleDeg = 45;
  @Input() stroke = 'black';
  @Input() strokeWidth = 1;
  @Input() fill = 'transparent';
  @Input() svgHeight = 600;
  @Input() svgWidth = 800;
  @Input() llCorner;
  @Input() lrCorner;
  @Input() morphX = 0;
  @Input() morphY = 0;

  // Calculated values
  rotation = 0;
  angleRad = 0;
  angleRadOpposite = 180;
  dim = 0;

  ulCorner = new Point();
  urCorner = new Point();
  topCorner = new Point();
  fooCorner = new Point();
  barCorner = new Point();

  constructor(@Inject(DOCUMENT) private document: Document, private ref: ChangeDetectorRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.angleRad = this.angleDeg * Math.PI / 180;
    this.angleRadOpposite = (90 - this.angleDeg) * Math.PI / 180;
    this.dim = Math.sqrt(Math.pow(this.llCorner.x - this.lrCorner.x, 2) + Math.pow(this.llCorner.y - this.lrCorner.y, 2));

    let rotation = Math.atan2((this.lrCorner.y - this.llCorner.y), (this.lrCorner.x - this.llCorner.x));

    if (rotation < 0) {
      rotation += 2 * Math.PI;
    }

    const rotationSin = Math.sin(rotation);
    const rotationCos = Math.cos(rotation);
    const dim = Math.sqrt(Math.pow(this.lrCorner.x - this.llCorner.x, 2) + Math.pow(this.lrCorner.y - this.llCorner.y, 2));

    this.ulCorner = new Point(this.llCorner.x + (rotationSin * dim), this.llCorner.y - (rotationCos * dim));
    this.urCorner = new Point(this.lrCorner.x + (rotationSin * dim), this.lrCorner.y - (rotationCos * dim));

    this.fooCorner = new Point(
      this.ulCorner.x + (Math.sin(Math.PI / 2 - this.angleRad + rotation) * dim),
      this.ulCorner.y - (Math.cos(Math.PI / 2 - this.angleRad + rotation) * dim));

    this.barCorner = new Point(
      this.urCorner.x - (Math.sin(Math.PI / 2 - this.angleRadOpposite - rotation) * dim),
      this.urCorner.y - (Math.cos(Math.PI / 2 - this.angleRadOpposite - rotation) * dim));

    this.topCorner = PythagorasComponent.getIntersection(this.ulCorner, this.fooCorner, this.urCorner, this.barCorner);
    this.topCorner = new Point(this.topCorner.x + this.morphX, this.topCorner.y + this.morphY);
  }

  static getIntersection(a: Point, b: Point, c: Point, d: Point): Point {
    let det = (a.x - b.x) * (c.y - d.y) - (a.y - b.y) * (c.x - d.x);
    let l = a.x * b.y - a.y * b.x;
    let m = c.x * d.y - c.y * d.x;

    let ix = (l * (c.x - d.x) - m * (a.x - b.x)) / det;
    let iy = (l * (c.y - d.y) - m * (a.y - b.y)) / det;

    return new Point(ix, iy);
  }
}
