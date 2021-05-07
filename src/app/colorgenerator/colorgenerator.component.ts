import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-colorgenerator',
  templateUrl: './colorgenerator.component.html',
  styleUrls: ['./colorgenerator.component.css']
})
export class ColorgeneratorComponent implements OnInit {

  constructor(private titleService : Title) {
    this.titleService.setTitle('RGB Color Generator');
  }

  ngOnInit(): void {}

}
