import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPreviewComponent } from './doctor-preview.component';

describe('DoctorPreviewComponent', () => {
  let component: DoctorPreviewComponent;
  let fixture: ComponentFixture<DoctorPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
