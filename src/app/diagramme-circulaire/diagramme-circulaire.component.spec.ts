import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagrammeCirculaireComponent } from './diagramme-circulaire.component';

describe('DiagrammeCirculaireComponent', () => {
  let component: DiagrammeCirculaireComponent;
  let fixture: ComponentFixture<DiagrammeCirculaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagrammeCirculaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagrammeCirculaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
