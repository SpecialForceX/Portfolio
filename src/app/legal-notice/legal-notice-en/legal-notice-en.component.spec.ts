import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalNoticeEnComponent } from './legal-notice-en.component';

describe('LegalNoticeEnComponent', () => {
  let component: LegalNoticeEnComponent;
  let fixture: ComponentFixture<LegalNoticeEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalNoticeEnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegalNoticeEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
