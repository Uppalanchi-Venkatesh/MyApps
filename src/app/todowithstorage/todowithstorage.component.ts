import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-todowithstorage',
  templateUrl: './todowithstorage.component.html',
  styleUrls: ['./todowithstorage.component.css']
})
export class TodowithstorageComponent implements OnInit {

  constructor(private titleService : Title) {
    this.titleService.setTitle('Todo List With Storage');
  }

  ngOnInit(): void {}

}
