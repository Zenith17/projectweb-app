import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolucionesBIComponent } from './soluciones-bi.component';

describe('SolucionesBIComponent', () => {
  let component: SolucionesBIComponent;
  let fixture: ComponentFixture<SolucionesBIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolucionesBIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolucionesBIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
