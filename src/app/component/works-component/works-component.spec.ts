import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksComponent } from './works-component';

describe('WorksComponent', () => {
  let component: WorksComponent;
  let fixture: ComponentFixture<WorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorksComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorksComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
