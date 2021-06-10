import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-codechef',
  templateUrl: './codechef.component.html',
  styleUrls: ['./codechef.component.css']
})
export class CodechefComponent implements OnInit {

  constructor(private titleService : Title) {
    this.titleService.setTitle('Codechef Crawler');
  }

  ngOnInit(): void { }

}
