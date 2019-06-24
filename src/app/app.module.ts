import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';
import { TableModule } from 'primeng/components/table/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { SettingsComponent } from './components/settings/settings.component';
import { FooterComponent } from './components/footer/footer.component';
import { TablaComponent } from '../app/components/tabla/tabla.component';
import { PresentacionPctosComponent } from './components/presentacion-pctos/presentacion-pctos.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SettingsComponent,
    FooterComponent,
    TablaComponent,
    PresentacionPctosComponent


  ],
  imports: [
    BrowserModule,
    TableModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

@Directive({})
export class AppModule { }
