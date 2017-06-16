import {Component, Inject, OnInit} from '@angular/core';
import {Point} from './model/Point';
import {DOCUMENT} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  angleDeg = this.getRandomInt(10, 80);
  angleRad = 0;
  rotationDeg = 0;
  rotationRad = 0;

  iterations = this.getRandomInt(3, 10);
  stroke = 'black';
  strokeWidth = this.getRandomInt(1, 3);
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
    this.svgWidth = this.document.body.clientWidth * 0.90;
    this.llCorner = new Point((this.svgWidth - this.dim) / 2, this.svgHeight);
    this.lrCorner = new Point((this.llCorner.x + Math.cos(this.rotationRad) * this.dim), (this.llCorner.y - Math.sin(this.rotationRad) * this.dim));
  }

  valueChange() {
    this.angleRad = this.angleDeg * Math.PI / 180;
    this.rotationRad = this.rotationDeg * Math.PI / 180;

    this.llCorner = new Point((this.svgWidth - this.dim) / 2, this.svgHeight);
    this.lrCorner = new Point((this.llCorner.x + Math.cos(this.rotationRad) * this.dim), (this.llCorner.y - Math.sin(this.rotationRad) * this.dim));
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
