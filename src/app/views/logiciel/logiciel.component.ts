import { Component, Injectable } from '@angular/core';
import { TeacherService } from '../../services/logiciel.service'

@Component({
    selector: 'logiciel',
    templateUrl: 'logiciel.template.html',
    providers: [TeacherService]
})

@Injectable()
export class logicielComponent { 

	teachers: any = [
		{ titre: "CLYO ",
			texte: "C'est le plus mieux mais le plus chere",
			job: "CS FIRST",
			company: "Sloth Factory",
			localisation: "le Pub du coin",
			tel: "777.777.777",
			adresse:"14 Rue Saint-Hélier",
			ville: "35000 Rennes",
			pic: "../../assets/img/landing/logo/clyofirst.jpg"},

		{ first: "CLYO ",
			last: "DELAUNE",
			job: "CS STANDARD",
			company: "Error Factory",
			localisation: "Le Tregor...",
			tel: "666.666.666",
			adresse: "1 Rue de la perdition numérique",
			ville: "22300 Lannion",
			pic: "../../assets/img/landing/logo/clyostd.jpg"},

		{ first: "CLYO ",
			last: "SENIOR",
			job: "CS PME",
			company: "himself",
			localisation: "his bed",
			tel : "no tel",
			adresse: "2 rue du lit",
			ville: "In your Ass",
			pic: "../../assets/img/landing/logo/clyopme.jpg"},

		{ first: "CLYO ",
			last: "DELOURMEL",
			job: "PRO",
			company: "Burelec",
			localisation: "le Pub du coin",
			tel: "777.777.777",
			adresse:"14 Rue Saint-Hélier",
			ville: "35000 Rennes",
			pic: "../../assets/img/landing/logo/clyopro.jpg"},
	];

	constructor(private teacherService: TeacherService) {
		this.teacherService.getAllTeacher().subscribe(teacher => {
			console.log('got some teachers', teacher.json());
			this.teachers = teacher.json();
		})
	}
}