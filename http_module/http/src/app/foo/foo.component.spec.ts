import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooCompononent } from './foo.component';

describe('FooComponent', () => {
  let component: FooCompononent;
  let fixture: ComponentFixture<FooCompononent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooCompononent]
    });
    fixture = TestBed.createComponent(FooCompononent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
