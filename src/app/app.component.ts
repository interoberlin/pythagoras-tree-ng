import {Component, OnInit} from '@angular/core';
import {Point} from './model/Point';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  angleDeg = 0;
  iterations = 0;

  angleRad = 0;
  svgHeight = 600;
  svgWidth = 1000;
  dim = 100;
  llCorner: Point;
  lrCorner: Point;

  ngOnInit() {
    this.angleRad = this.angleDeg * Math.PI / 180;

    this.llCorner = new Point((this.svgWidth - this.dim) / 2, this.svgHeight);
    this.lrCorner = new Point((this.llCorner.x + Math.cos(this.angleRad) * this.dim), (this.llCorner.y - Math.sin(this.angleRad) * this.dim));
  }

  valuechange() {
    this.angleRad = this.angleDeg * Math.PI / 180;

    this.llCorner = new Point((this.svgWidth - this.dim) / 2, this.svgHeight);
    this.lrCorner = new Point((this.llCorner.x + Math.cos(this.angleRad) * this.dim), (this.llCorner.y - Math.sin(this.angleRad) * this.dim));
  }
}
