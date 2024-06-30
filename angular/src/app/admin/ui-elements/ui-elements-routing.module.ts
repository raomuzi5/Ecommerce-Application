import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiElementsComponent } from '../ui-elements/ui-elements/ui-elements.component';
import { TypographyComponent } from '../ui-elements/typography/typography.component';
import { UiTabsComponent } from '../ui-elements/ui-tabs/ui-tabs.component';
import { TabsComponent } from '../ui-elements/tabs/tabs.component';
import { UiButtonsComponent } from '../ui-elements/ui-buttons/ui-buttons.component';
import { UiBootstrapComponent } from '../ui-elements/ui-bootstrap/ui-bootstrap.component';
import { UiIconsComponent } from '../ui-elements/ui-icons/ui-icons.component';
import { UiColorsComponent } from './ui-colors/ui-colors.component';
import { UiMediaObjectComponent } from './ui-media-object/ui-media-object.component';
import { UiListGroupComponent } from './ui-list-group/ui-list-group.component';
import { UiProgressbarsComponent } from './ui-progressbars/ui-progressbars.component';
import { UiNotificationsComponent } from './ui-notifications/ui-notifications.component';
import { UiModalsComponent } from './ui-modals/ui-modals.component';
const routes: Routes = [
  {
    path: '',
    component: UiElementsComponent,
    children: [
      { path: '', redirectTo: 'typography', pathMatch: 'full' },
      { path: 'typography', component: TypographyComponent, data: {title: ':: Riverra-Angular ::'} },
      { path: 'tabs', component: UiTabsComponent, data: {title: ':: Riverra-Angular ::'} },
      { path: 'button', component: UiButtonsComponent, data: {title: ':: Riverra-Angular ::'} },
      { path: 'bootstrap', component: UiBootstrapComponent, data: {title: ':: Riverra-Angular ::'} },
      { path: 'icon', component: UiIconsComponent, data: {title: ':: Riverra-Angular ::'} },
      { path: 'colors', component: UiColorsComponent, data: {title: ':: Riverra-Angular ::'} },
      { path: 'mediaObject', component: UiMediaObjectComponent, data: {title: ':: Riverra-Angular ::'} },
      { path: 'listGroup', component: UiListGroupComponent, data: {title: ':: Riverra-Angular ::'} },
      { path: 'progressbars', component: UiProgressbarsComponent, data: {title: ':: Riverra-Angular ::'} },
      { path: 'notifications', component: UiNotificationsComponent, data: {title: ':: Riverra-Angular ::'} },
      { path: 'modals', component: UiModalsComponent, data: {title: ':: Riverra-Angular ::'} },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiElementsRoutingModule { }
