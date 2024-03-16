import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftHamperComponent } from './gift-hamper.component';

describe('GiftHamperComponent', () => {
  let component: GiftHamperComponent;
  let fixture: ComponentFixture<GiftHamperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GiftHamperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GiftHamperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
