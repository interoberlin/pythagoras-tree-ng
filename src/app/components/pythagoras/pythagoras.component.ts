import {Component, Inject, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Point} from '../../model/Point';
import {DOCUMENT} from '@angular/platform-browser';

@Component({
  selector: 'app-pythagoras',
  templateUrl: './pythagoras.component.html',
  styleUrls: ['./pythagoras.component.scss']
})
export class PythagorasComponent implements OnChanges {
  @Input() iteration = 0;
  @Input() angleRad = 0;
  @Input() dim = 100;

  @Input() svgHeight;
  @Input() svgWidth;

  @Input() fill = 'transparent';
  @Input() stroke = 'black';
  @Input() strokeWidth = 1;

  @Input() llCorner;
  @Input() lrCorner;
  @Input() ulCorner;
  @Input() urCorner;
  @Input() topCorner;

  @Input() morphX = 0;
  @Input() morphY = 0;

  pointsRect = '';
  pointsTriangle = '';

  constructor(@Inject(DOCUMENT) private document: Document) {
    // console.log(`iteration: ${this.iteration}`);
    // console.log(`angle: ${this.angleRad}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('PythagorasComponent onChanges');
    // console.log(`ngOnChanges ${this.iteration}`);

    // console.log(`llCorner: ${JSON.stringify(this.llCorner)}`);
    // console.log(`lrCorner: ${JSON.stringify(this.lrCorner)}`);

    if (this.llCorner == null || this.lrCorner == null) {
      console.log('foo');

      let canvasHeight = this.document.body.clientHeight * 0.9;
      let canvasWidth = this.document.body.clientWidth * 0.9;

      this.llCorner = new Point((canvasWidth - this.dim) / 2, canvasHeight);
      this.lrCorner = new Point((this.llCorner.x + Math.cos(this.angleRad) * this.dim), (this.llCorner.y - Math.sin(this.angleRad) * this.dim));
    }

    let angle = Math.atan2((this.lrCorner.y - this.llCorner.y), (this.lrCorner.x - this.llCorner.x));

    if (angle < 0) {
      angle += 2 * Math.PI;
    }

    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    const dim = Math.sqrt(Math.pow(this.lrCorner.x - this.llCorner.x, 2) + Math.pow(this.lrCorner.y - this.llCorner.y, 2));

    // console.log(`angle: ${angle}`);
    // console.log(`sin(angle): ${Math.sin(angle)}`);
    // console.log(`cos(angle): ${Math.cos(angle)}`);
    // console.log(`dim: ${dim}`);

    this.ulCorner = new Point(this.llCorner.x + (sin * dim), this.llCorner.y - (cos * dim));
    this.urCorner = new Point(this.lrCorner.x + (sin * dim), this.lrCorner.y - (cos * dim));

    const uulCorner = new Point(this.ulCorner.x + (sin * dim), this.ulCorner.y - (cos * dim));
    // const uurCorner = new Point(this.urCorner.x + (sin * dim), this.urCorner.y - (cos * dim));
    this.topCorner = new Point(this.ulCorner.x + (this.urCorner.x - this.ulCorner.x + sin * (dim + this.morphX)) / 2, this.ulCorner.y - (this.ulCorner.y - uulCorner.y - sin * (dim + this.morphY)) / 2);

    // console.log(`ulCorner: ${JSON.stringify(this.ulCorner)}`);
    // console.log(`urCorner: ${JSON.stringify(this.urCorner)}`);
    // console.log(`uulCorner: ${JSON.stringify(uulCorner)}`);
    // console.log(`uurCorner: ${JSON.stringify(uurCorner)}`);
    // console.log(`topCorner: ${JSON.stringify(this.topCorner)}`);

    this.pointsRect = `${this.llCorner.x},${this.llCorner.y} ${this.ulCorner.x},${this.ulCorner.y} ${this.urCorner.x},${this.urCorner.y} ${this.lrCorner.x},${this.lrCorner.y}`;
    this.pointsTriangle = `${this.ulCorner.x},${this.ulCorner.y} ${this.urCorner.x},${this.urCorner.y} ${this.topCorner.x},${this.topCorner.y}`;

    // console.log(`pointsRect: ${this.pointsRect}`);
    // console.log(`pointsTriangle: ${this.pointsTriangle}`);
  }
}
