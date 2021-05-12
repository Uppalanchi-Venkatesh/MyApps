import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodowithstorageComponent } from './todowithstorage.component';

describe('TodowithstorageComponent', () => {
  let component: TodowithstorageComponent;
  let fixture: ComponentFixture<TodowithstorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodowithstorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodowithstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
