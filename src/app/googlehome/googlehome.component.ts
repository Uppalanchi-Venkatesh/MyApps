import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-googlehome',
  templateUrl: './googlehome.component.html',
  styleUrls: ['./googlehome.component.css']
})
export class GooglehomeComponent implements OnInit {

  constructor(private titleService : Title) {
    this.titleService.setTitle('Google');
  }

  ngOnInit(): void {
  }

}
