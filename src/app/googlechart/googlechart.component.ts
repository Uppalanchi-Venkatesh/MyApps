import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-googlechart',
  templateUrl: './googlechart.component.html',
  styleUrls: ['./googlechart.component.css']
})
export class GooglechartComponent implements OnInit {

  constructor(private titleService : Title) {
    this.titleService.setTitle('Google Chart');
  }

  ngOnInit(): void {
  }

}
