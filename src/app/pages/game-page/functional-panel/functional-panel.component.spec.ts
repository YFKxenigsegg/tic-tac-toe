import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalPanelComponent } from './functional-panel.component';

describe('FunctionalPanelComponent', () => {
  let component: FunctionalPanelComponent;
  let fixture: ComponentFixture<FunctionalPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunctionalPanelComponent]
    });
    fixture = TestBed.createComponent(FunctionalPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
