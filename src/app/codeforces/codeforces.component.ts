import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-codeforces',
  templateUrl: './codeforces.component.html',
  styleUrls: ['./codeforces.component.css']
})
export class CodeforcesComponent implements OnInit {

  constructor(private titleService : Title) {
    this.titleService.setTitle('Codeforces Crawler');
  }

  ngOnInit(): void {}

}
