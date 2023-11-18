import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePanelComponent } from './choose-panel.component';

describe('ChoosePanelComponent', () => {
  let component: ChoosePanelComponent;
  let fixture: ComponentFixture<ChoosePanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoosePanelComponent]
    });
    fixture = TestBed.createComponent(ChoosePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
