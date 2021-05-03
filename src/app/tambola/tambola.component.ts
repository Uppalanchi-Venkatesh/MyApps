import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tambola',
  templateUrl: './tambola.component.html',
  styleUrls: ['./tambola.component.css']
})
export class TambolaComponent implements OnInit {

  constructor(private titleService : Title) {
    this.titleService.setTitle('Tambola');
  }

  ngOnInit(): void {
  }

}
