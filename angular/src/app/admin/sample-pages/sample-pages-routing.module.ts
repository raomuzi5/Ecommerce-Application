import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SamplePagesComponent } from './components/sample-pages/sample-pages.component';
import { BlankComponent } from './components/blank/blank.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PageTeamsBoardComponent } from './components/page-teams-board/page-teams-board.component';
import { PageProjectsListComponent } from './components/page-projects-list/page-projects-list.component';
import { PageTimelineComponent } from './components/page-timeline/page-timeline.component';
import { FaqComponent } from './components/faq/faq.component';
const routes: Routes = [
    {
        path: '',
        component: SamplePagesComponent,
        children: [
            { path: '', redirectTo:'blank'},
            { path: 'blank-page', component: BlankComponent, data: { title: ':: Riverra Angular :: Sample Pages :: Blank ::' }},
            { path: 'image-gallery', component: ImageGalleryComponent, data: { title: ':: Riverra Angular :: Sample Pages :: Image Gallery ::' }},
            { path: 'profile', component: ProfileComponent, data: { title: ':: Riverra Angular :: Sample Pages :: Profile ::' }},
            { path: 'pricing', component: PricingComponent, data: { title: ':: Riverra Angular :: Sample Pages :: Pricing ::' }},
            { path: 'invoices', component: InvoicesComponent, data: { title: ':: Riverra Angular :: Sample Pages :: Invoices ::' }},
            { path: 'search-results', component: SearchResultsComponent, data: { title: ':: Riverra Angular :: Sample Pages :: Search Results ::' }},
            { path: 'team-board', component: PageTeamsBoardComponent, data: { title: ':: Riverra Angular :: Sample Pages :: Team Board ::' }},
            { path: 'projects-list', component: PageProjectsListComponent, data: { title: ':: Riverra Angular :: Sample Pages :: Projects List ::' }},
            { path: 'timeline', component: PageTimelineComponent, data: { title: ':: Riverra Angular :: Sample Pages :: Time Line ::' }},
            { path: 'faq', component: FaqComponent, data: { title: ':: Riverra Angular :: Sample Pages :: Faq ::' }},
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplePagesRoutingModule { }
