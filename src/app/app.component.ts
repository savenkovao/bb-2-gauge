import { AfterViewInit, Component } from '@angular/core';
import bb, { gauge } from 'billboard.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'bb-angular';

  ngAfterViewInit(): void {
    const chart = bb.generate({
      "bindto": '#chart',
      "padding": { "top": 0, "right": 0, "bottom": 0, "left": 0 },
      "legend": { "show": false },
      "clipPath": false,
      "axis": {
        "y": { "tick": { "values": [] }, "padding": { "top": 0, "bottom": 0 }, "show": true },
        "x": {
          "height": 5,
          "padding": { "left": 0, "right": 0 },
          "tick": { "show": false, "outer": false, "text": { "show": false } },
          "show": true
        }
      },
      "transition": { "duration": 1 },
      "gauge": { "max": 100, "width": 15, "label": {} },
      "color": {
        "pattern": ["#29BB9D", "#29BB9D", "#E7C248", "#FF9A0C", "#F56075"],
        "threshold": { "values": [20, 40, 60, 80, 100] }
      },
      "data": { "columns": [["col-0", 2.05]], "colors": {}, "groups": [], "type": gauge() },
      "tooltip": { "show": true }
    });
  }
}
