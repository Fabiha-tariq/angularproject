import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturebarComponent } from './featurebar.component';

describe('FeaturebarComponent', () => {
  let component: FeaturebarComponent;
  let fixture: ComponentFixture<FeaturebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturebarComponent]
    });
    fixture = TestBed.createComponent(FeaturebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
