/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DaLibreComponent } from './DaLibre.component';

describe('DaLibreComponent', () => {
  let component: DaLibreComponent;
  let fixture: ComponentFixture<DaLibreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaLibreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaLibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
