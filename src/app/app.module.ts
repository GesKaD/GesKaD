import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {ROUTES} from "./app.routes";
import { AppComponent } from './app.component';

// App views
import {AccueilModule} from "./views/Accueil/Acceuil.module";
import {materielModule} from "./views/materiel/materiel.module";
import {LoginModule} from "./views/login/login.module";
import {RegisterModule} from "./views/register/register.module";
import {logicielModule} from "./views/logiciel/logiciel.module";
import {peripheriqueModule} from "./views/peripherique/peripherique.module";
import {clientModule} from "./views/client/client.module";
import {contactModule} from "./views/contact/contact.module";


// App modules/components
import {LayoutsModule} from "./components/common/layouts/layouts.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    HttpModule,

    // Views
    AccueilModule,
    materielModule,
    LoginModule,
    RegisterModule,
    logicielModule,
    peripheriqueModule,
    clientModule,
    contactModule,

    // Modules
    LayoutsModule,

    RouterModule.forRoot(ROUTES)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
