import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankComponent } from './components/blank/blank.component';
import { SamplePagesComponent } from './components/sample-pages/sample-pages.component';
import { SamplePagesRoutingModule } from './sample-pages-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { LightboxModule } from 'ngx-lightbox';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { PricingComponent } from './components/pricing/pricing.component';

import { ProfileComponent } from './components/profile/profile.component';
import { PageTeamsBoardComponent } from './components/page-teams-board/page-teams-board.component';
import { PageProjectsListComponent } from './components/page-projects-list/page-projects-list.component';
import { PageTimelineComponent } from './components/page-timeline/page-timeline.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FaqComponent } from './components/faq/faq.component';
import { CoreModule } from 'src/app/core/core.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  declarations: [
    BlankComponent,
    SamplePagesComponent,
    ImageGalleryComponent,
    SearchResultsComponent,
    InvoicesComponent,
    PricingComponent,
    ProfileComponent,
    PageTeamsBoardComponent,
    PageProjectsListComponent,
    PageTimelineComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
    SamplePagesRoutingModule,
    NgbModule,
    LightboxModule,
    FullCalendarModule,
    CoreModule,
    NgCircleProgressModule.forRoot({
    }),
  ]
})
export class SamplePagesModule { }
