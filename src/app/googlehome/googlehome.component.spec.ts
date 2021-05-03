import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglehomeComponent } from './googlehome.component';

describe('GooglehomeComponent', () => {
  let component: GooglehomeComponent;
  let fixture: ComponentFixture<GooglehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GooglehomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
