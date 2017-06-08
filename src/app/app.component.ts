import {Component, Inject, OnInit} from '@angular/core';
import {Point} from './model/Point';
import {DOCUMENT} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  angleDeg = 0;
  iterations = 0;
  strokeWidth = 1;

  angleRad = 0;
  canvasHeight = 0;
  canvasWidth = 0;
  dim = 100;
  llCorner: Point;
  lrCorner: Point;
  offsetX = 0;
  offsetY = 0;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    this.canvasHeight = this.document.body.clientHeight;
    this.canvasWidth = this.document.body.clientWidth;

    // console.log(this.canvasHeight);
    // console.log(this.canvasWidth);
  }

  valueChange() {
    this.angleRad = this.angleDeg * Math.PI / 180;

    this.llCorner = new Point((this.canvasWidth - this.dim) / 2, this.canvasHeight);
    this.lrCorner = new Point((this.llCorner.x + Math.cos(this.angleRad) * this.dim), (this.llCorner.y - Math.sin(this.angleRad) * this.dim));
  }
}
