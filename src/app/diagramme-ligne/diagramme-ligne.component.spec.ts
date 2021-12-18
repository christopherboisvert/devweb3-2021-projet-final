import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagrammeLigneComponent } from './diagramme-ligne.component';

describe('DiagrammeLigneComponent', () => {
  let component: DiagrammeLigneComponent;
  let fixture: ComponentFixture<DiagrammeLigneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagrammeLigneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagrammeLigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
