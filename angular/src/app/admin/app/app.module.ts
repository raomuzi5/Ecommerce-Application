import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { MailInboxComponent } from './components/mail-inbox/mail-inbox.component';
import { AppComponent } from './components/app/app.component';
import { MailComposeComponent } from './components/mail-compose/mail-compose.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { AppCalendarComponent } from './components/app-calendar/app-calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FileManagerComponent } from './components/file-manager/file-manager.component';
import { AppChatComponent } from './components/app-chat/app-chat.component';
import { AppContactComponent } from './components/app-contact/app-contact.component';
import { CoreModule } from 'src/app/core/core.module';
import { BlogDashboardComponent } from './components/blog-dashboard/blog-dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogGridComponent } from './components/blog-grid/blog-grid.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { CKEditorModule } from 'ckeditor4-angular';
@NgModule({
  declarations: [MailInboxComponent, AppComponent, MailComposeComponent, AppCalendarComponent, FileManagerComponent, AppChatComponent, AppContactComponent, BlogDashboardComponent, BlogPostComponent, BlogListComponent, BlogGridComponent, BlogDetailComponent],
  imports: [
    CommonModule,
    NgbModule,
    AppRoutingModule,
    RichTextEditorAllModule,
    FullCalendarModule,
    CoreModule,
    ChartsModule,
    NgxEchartsModule,
    CKEditorModule,
  ]
})
export class AppModule { }
