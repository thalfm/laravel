import {Component, OnInit} from '@angular/core';
import pace from 'pace';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Shop';

  ngOnInit(): void {
    pace.start({
      document: false,
      elements: false,
    });
  }
}
