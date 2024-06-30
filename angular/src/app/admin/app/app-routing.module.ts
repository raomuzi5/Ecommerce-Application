
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { MailInboxComponent } from './components/mail-inbox/mail-inbox.component';
import { MailComposeComponent } from './components/mail-compose/mail-compose.component';
import { AppCalendarComponent } from './components/app-calendar/app-calendar.component';
import { FileManagerComponent } from './components/file-manager/file-manager.component';
import { AppChatComponent } from './components/app-chat/app-chat.component';
import { AppContactComponent } from './components/app-contact/app-contact.component';
import { BlogDashboardComponent } from './components/blog-dashboard/blog-dashboard.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogGridComponent } from './components/blog-grid/blog-grid.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', redirectTo: 'mail-inbox', pathMatch: 'full' },
      { path: 'mail-compose', component: MailComposeComponent, data: {title: ':: Riverra-Angular ::'} },
      { path: 'mail-inbox', component: MailInboxComponent, data: {title: ':: Riverra-Angular ::'} },
      { path: 'app-calendar', component: AppCalendarComponent, data: {title: ':: Riverra-Angular ::'} },
      { path: 'file-manager', component: FileManagerComponent, data: {title: ':: Riverra-Angular ::'} },
      { path: 'app-chat', component: AppChatComponent, data: {title: ':: Riverra-Angular ::'} },
      { path: 'contact', component: AppContactComponent, data: {title: ':: Riverra-Angular ::'} },
      { path: 'blog-dashboard', component: BlogDashboardComponent, data: {title: ':: Riverra-Angular ::'} },
      { path: 'blog-post', component: BlogPostComponent, data: {title: ':: Riverra-Angular ::'} },
      { path: 'blog-list', component: BlogListComponent, data: {title: ':: Riverra-Angular ::'} },
      { path: 'blog-grid', component: BlogGridComponent, data: {title: ':: Riverra-Angular ::'} },
      { path: 'blog-detail', component: BlogDetailComponent, data: {title: ':: Riverra-Angular ::'} },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

