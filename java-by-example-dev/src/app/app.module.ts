import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PagesComponent } from './pages/pages.component';
import { HelloWorldComponent } from './pages/hello-world/hello-world.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    FooterComponent,
    HeaderComponent,
    PagesComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HighlightModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          java: () => import('highlight.js/lib/languages/java'),
          bash: () => import('highlight.js/lib/languages/bash')
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
