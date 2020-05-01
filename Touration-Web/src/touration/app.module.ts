import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import{
  SharedModule,
  FooterComponent,
  HeaderComponent,
  FilternavComponent,
  FilterPipe
} from './shared';
import {HomeSearchService} from './home/home-search.service';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], {useHash: true});

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FilternavComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    rootRouting,
    FontAwesomeModule
  ],
  providers: [HomeSearchService],
  bootstrap: [AppComponent]
})

export class AppModule {}
