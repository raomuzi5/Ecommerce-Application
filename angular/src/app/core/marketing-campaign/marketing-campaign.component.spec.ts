import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingCampaignComponent } from './marketing-campaign.component';

describe('MarketingCampaignComponent', () => {
  let component: MarketingCampaignComponent;
  let fixture: ComponentFixture<MarketingCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
