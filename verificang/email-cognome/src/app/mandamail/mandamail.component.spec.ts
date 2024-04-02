import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandamailComponent } from './mandamail.component';

describe('MandamailComponent', () => {
  let component: MandamailComponent;
  let fixture: ComponentFixture<MandamailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MandamailComponent]
    });
    fixture = TestBed.createComponent(MandamailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
