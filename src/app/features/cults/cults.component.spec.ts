import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultsComponent } from './cults.component';

describe('CultsComponent', () => {
  let component: CultsComponent;
  let fixture: ComponentFixture<CultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CultsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CultsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
