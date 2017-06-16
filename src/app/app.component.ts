import {Component, Inject, OnInit} from '@angular/core';
import {Point} from './model/Point';
import {DOCUMENT} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  angleDeg = 45;
  angleRad = 0;
  rotationDeg = 0;
  rotationRad = 0;

  iterations = 1;
  stroke = 'black';
  strokeWidth = 1;
  fill = 'transparent';
  svgHeight = 0;
  svgWidth = 0;
  dim = 100;
  llCorner: Point;
  lrCorner: Point;
  morphX = 0;
  morphY = 0;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    this.svgHeight = this.document.body.clientHeight * 0.75;
    this.svgWidth = this.document.body.clientWidth * 0.75;
    this.llCorner = new Point((this.svgWidth - this.dim) / 2, this.svgHeight);
    this.lrCorner = new Point((this.llCorner.x + Math.cos(this.rotationRad) * this.dim), (this.llCorner.y - Math.sin(this.rotationRad) * this.dim));
  }

  valueChange() {
    this.angleRad = this.angleDeg * Math.PI / 180;
    this.rotationRad = this.rotationDeg * Math.PI / 180;

    this.llCorner = new Point((this.svgWidth - this.dim) / 2, this.svgHeight);
    this.lrCorner = new Point((this.llCorner.x + Math.cos(this.rotationRad) * this.dim), (this.llCorner.y - Math.sin(this.rotationRad) * this.dim));
  }
}
