import {Routes} from "@angular/router";
import {AccueilComponent} from "./views/Accueil/Accueil.component";
import {materielComponent} from "./views/materiel/materiel.component";
//import {loginComponent} from "./views/login/login.component";
//import {registerComponent} from "./views/register/register.component";
import {logicielComponent} from "./views/logiciel/logiciel.component";
import {peripheriqueComponent} from "./views/peripherique/peripherique.component";
import {contactComponent} from "./views/contact/contact.component";
import {blankComponent} from "./components/common/layouts/blank.component";
import {basicComponent} from "./components/common/layouts/basic.component";


export const ROUTES:Routes = [
  // Main redirect
  {path: '', redirectTo: 'Accueil', pathMatch: 'full'},

  // App views
  {
    path: '', component: basicComponent,
    children: [
      {path: 'Accueil', component: AccueilComponent},
      {path: 'materiel', component: materielComponent},
      {path: 'logiciel', component: logicielComponent},
      {path: 'peripherique', component: peripheriqueComponent},
      {path: 'contact', component: contactComponent}
    ]
  },
  /*{
    path: '', component: blankComponent,
    children: [
      { path: 'login', component: loginComponent },
      { path: 'register', component: registerComponent }
    ]
  },*/

  // Handle all other routes
  {path: '**',    component: AccueilComponent }
];
