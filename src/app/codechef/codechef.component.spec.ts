import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodechefComponent } from './codechef.component';

describe('CodechefComponent', () => {
  let component: CodechefComponent;
  let fixture: ComponentFixture<CodechefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodechefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodechefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
