import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { RouterModule } from '@angular/router';
import { routes } from './dashboard.routing';
import { MarkdownModule } from 'ngx-markdown';

//material
import { MaterialModule } from 'src/app/material/material.module';

import { NewPostComponent } from './components/new-post/new-post.component';
import { ReactiveFormsModule } from '@angular/forms';


export const loader = ['en', 'es'].reduce((acc, lang) => {
  acc[lang] = () => import(`./i18n/dashboard.${lang}.json`);
  return acc;
}, {});

@NgModule({
  declarations: [
    DashboardPageComponent,
    NewPostComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslocoModule,
    MaterialModule,
    ReactiveFormsModule,
    MarkdownModule
  ],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'dashboard',
        loader
      }
    }
  ],
})
export class ForexModule { }
