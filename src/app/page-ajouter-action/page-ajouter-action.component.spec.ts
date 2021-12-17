import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAjouterActionComponent } from './page-ajouter-action.component';

describe('PageAjouterActionComponent', () => {
  let component: PageAjouterActionComponent;
  let fixture: ComponentFixture<PageAjouterActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAjouterActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAjouterActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
