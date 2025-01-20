import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalNoticeDeComponent } from './legal-notice-de.component';

describe('LegalNoticeDeComponent', () => {
  let component: LegalNoticeDeComponent;
  let fixture: ComponentFixture<LegalNoticeDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalNoticeDeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegalNoticeDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
