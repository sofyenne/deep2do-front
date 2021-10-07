import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeeComponent } from './mee.component';

describe('MeeComponent', () => {
  let component: MeeComponent;
  let fixture: ComponentFixture<MeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
