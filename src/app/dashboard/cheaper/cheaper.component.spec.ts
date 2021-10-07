import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheaperComponent } from './cheaper.component';

describe('CheaperComponent', () => {
  let component: CheaperComponent;
  let fixture: ComponentFixture<CheaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
