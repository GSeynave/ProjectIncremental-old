import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FarmComponent } from './components/farm/farm.component';
import { LifebarComponent } from './components/lifebar/lifebar.component';
import { ZaapComponent } from './components/zaap/zaap.component';
import { ZoneComponent } from './components/zone/zone.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MonstreListeComponent } from './components/monstre-liste/monstre-liste.component';
import { MonstreComponent } from './components/monstre/monstre.component'
import { MatCardModule } from '@angular/material/card';
import { RessourceComponent } from './components/ressource/ressource.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ResistancesComponent } from './component/resistances/resistances.component';

@NgModule({
  declarations: [
    AppComponent,
    FarmComponent,
    LifebarComponent,
    ZaapComponent,
    ZoneComponent,
    MonstreListeComponent,
    MonstreComponent,
    RessourceComponent,
    ResistancesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
