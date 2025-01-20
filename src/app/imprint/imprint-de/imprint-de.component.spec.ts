import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprintDeComponent } from './imprint-de.component';

describe('ImprintDeComponent', () => {
  let component: ImprintDeComponent;
  let fixture: ComponentFixture<ImprintDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImprintDeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImprintDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
