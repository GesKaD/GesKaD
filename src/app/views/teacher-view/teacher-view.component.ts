import { Component } from '@angular/core';

@Component({
    selector: 'teacherView',
    templateUrl: 'teacher-view.template.html'
})
export class teacherViewComponent { 

	teachers: any = [
		{ first: "David ",
			last: "FONTAINE",
			job: "Désintégrateur Web",
			company: "Sloth Factory",
			localisation: "le Pub du coin",
			tel: "777.777.777",
			adresse:"14 Rue Saint-Hélier",
			ville: "35000 Rennes",
			pic: "http://www.animalfactguide.com/wp-content/uploads/2015/09/sloth4.jpg"},

		{ first: "Marguerita ",
			last: "DELAUNE",
			job: "Metteuse dans un étaux",
			company: "Error Factory",
			localisation: "Le Tregor...",
			tel: "666.666.666",
			adresse: "1 Rue de la perdition numérique",
			ville: "22300 Lannion",
			pic: "https://az616578.vo.msecnd.net/files/responsive/embedded/any/desktop/2015/07/25/635734513384266823-1507987266_sloth9.jpg"},

		{ first: "Sloth ",
			last: "SENIOR",
			job: "Master of the universe",
			company: "himself",
			localisation: "his bed",
			tel : "no tel",
			adresse: "2 rue du lit",
			ville: "In your Ass",
			pic: "https://lh4.googleusercontent.com/-TB0rBf9UNZo/AAAAAAAAAAI/AAAAAAAAACE/_SqfHKTbwpU/photo.jpg"},
	];
}