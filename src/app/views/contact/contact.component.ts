import { Component } from '@angular/core';
import { Contact } from './contact';


@Component({
    selector: 'contact',
    templateUrl: 'contact.template.html'
})
export class contactComponent { 

	TypeComs = ['Boulangerie', 'Bar', 'Restaurant',
				'Alimentation', 'Pressing', 
				'Coiffeur', 'Magasin de vêtements', 'Autres'];

	submitted = false;

	onsubmit() {this.submitted = true; }

}