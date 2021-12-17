import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAjouterPortfolioComponent } from './page-ajouter-portfolio.component';

describe('PageAjouterPortfolioComponent', () => {
  let component: PageAjouterPortfolioComponent;
  let fixture: ComponentFixture<PageAjouterPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAjouterPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAjouterPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
