import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemCardComponent } from './poem-card.component';

describe('PoemCardComponent', () => {
  let component: PoemCardComponent;
  let fixture: ComponentFixture<PoemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoemCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
