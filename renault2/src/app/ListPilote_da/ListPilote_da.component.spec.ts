/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListPilote_daComponent } from './ListPilote_da.component';

describe('ListPilote_daComponent', () => {
  let component: ListPilote_daComponent;
  let fixture: ComponentFixture<ListPilote_daComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPilote_daComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPilote_daComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
