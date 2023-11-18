import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkToggleComponent } from './mark-toggle.component';

describe('MarkToggleComponent', () => {
  let component: MarkToggleComponent;
  let fixture: ComponentFixture<MarkToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarkToggleComponent]
    });
    fixture = TestBed.createComponent(MarkToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
