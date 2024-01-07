import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifcompComponent } from './ngifcomp.component';

describe('NgifcompComponent', () => {
  let component: NgifcompComponent;
  let fixture: ComponentFixture<NgifcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgifcompComponent]
    });
    fixture = TestBed.createComponent(NgifcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
