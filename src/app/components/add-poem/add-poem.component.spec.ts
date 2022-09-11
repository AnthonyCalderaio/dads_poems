import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPoemComponent } from './add-poem.component';

describe('AddPoemComponent', () => {
  let component: AddPoemComponent;
  let fixture: ComponentFixture<AddPoemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPoemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPoemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
