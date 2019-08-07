/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditPilote_daComponent } from './EditPilote_da.component';

describe('EditPilote_daComponent', () => {
  let component: EditPilote_daComponent;
  let fixture: ComponentFixture<EditPilote_daComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPilote_daComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPilote_daComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
