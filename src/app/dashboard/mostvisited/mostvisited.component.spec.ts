import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostvisitedComponent } from './mostvisited.component';

describe('MostvisitedComponent', () => {
  let component: MostvisitedComponent;
  let fixture: ComponentFixture<MostvisitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostvisitedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostvisitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
