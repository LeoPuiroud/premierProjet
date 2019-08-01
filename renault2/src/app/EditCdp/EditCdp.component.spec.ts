/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditCdpComponent } from './EditCdp.component';

describe('EditCdpComponent', () => {
  let component: EditCdpComponent;
  let fixture: ComponentFixture<EditCdpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCdpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
