import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprintEnComponent } from './imprint-en.component';

describe('ImprintEnComponent', () => {
  let component: ImprintEnComponent;
  let fixture: ComponentFixture<ImprintEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImprintEnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImprintEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
