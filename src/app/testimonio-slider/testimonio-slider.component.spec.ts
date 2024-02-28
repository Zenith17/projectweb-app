import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonioSliderComponent } from './testimonio-slider.component';

describe('TestimonioSliderComponent', () => {
  let component: TestimonioSliderComponent;
  let fixture: ComponentFixture<TestimonioSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonioSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestimonioSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
