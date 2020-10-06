import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import localEs from '@angular/common/locales/es';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { SecuredomPipe } from './pipes/securedom.pipe';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { KnightService } from './services/knight.service';
import { registerLocaleData } from '@angular/common';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

registerLocaleData(localEs);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    SecuredomPipe,
    NavbarComponent,
    LoadingComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    KnightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
