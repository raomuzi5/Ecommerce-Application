import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEChartsComponent } from './page-e-charts.component';

describe('PageEChartsComponent', () => {
  let component: PageEChartsComponent;
  let fixture: ComponentFixture<PageEChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
