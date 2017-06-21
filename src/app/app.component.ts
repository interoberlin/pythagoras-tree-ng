import {Component, Inject, OnInit} from '@angular/core';
import {Point} from './model/Point';
import {DOCUMENT} from '@angular/platform-browser';
import {Observable} from 'rx';

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
  stroke = '#212121';
  strokeWidth = this.getRandomInt(1, 3);
  fill = 'transparent';
  svgHeight = 0;
  svgWidth = 0;
  dim = 100;
  llCorner: Point;
  lrCorner: Point;
  morphX = 0;
  morphY = 0;
  timer = 25;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    this.svgHeight = this.document.body.clientHeight * 0.75;
    this.svgWidth = this.document.body.clientWidth * 0.95;
    this.dim = Math.floor(this.svgHeight / 7);
    this.llCorner = new Point((this.svgWidth - this.dim) / 2, this.svgHeight);
    this.lrCorner = new Point((this.llCorner.x + Math.cos(this.rotationRad) * this.dim), (this.llCorner.y - Math.sin(this.rotationRad) * this.dim));

    Observable.timer(this.timer * 1000, this.timer * 1000)
      .subscribe(
        () => {
          this.reset();
        });

    Observable.timer((this.timer + 2) * 1000, this.timer * 1000)
      .subscribe(
        () => {
          this.setRandomValues();
        });
  }

  reset() {
    this.angleDeg = this.getRandomInt(10, 80);
    this.iterations = 1;
    this.strokeWidth = this.getRandomInt(1, 3);
    this.valueChange();
  }

  setRandomValues() {
    this.iterations = this.getRandomInt(3, 10);
    this.valueChange();
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

  mouseWheelUp(event: any) {
    if (this.angleDeg < 80) {
      this.angleDeg = this.angleDeg + 4;
      this.valueChange();
    }
  }

  mouseWheelDown(event: any) {
    if (this.angleDeg > 10) {
      this.angleDeg = this.angleDeg - 4;
      this.valueChange();
    }
  }
}
