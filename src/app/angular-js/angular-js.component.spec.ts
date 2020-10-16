import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularJSComponent } from './angular-js.component';

describe('AngularJSComponent', () => {
  let component: AngularJSComponent;
  let fixture: ComponentFixture<AngularJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularJSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
