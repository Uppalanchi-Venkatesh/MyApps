import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorgeneratorComponent } from './colorgenerator.component';

describe('ColorgeneratorComponent', () => {
  let component: ColorgeneratorComponent;
  let fixture: ComponentFixture<ColorgeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorgeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorgeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
