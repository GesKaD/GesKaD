import { Component, Injectable } from '@angular/core';
import { TeacherService } from '../../services/logiciel.service'

@Component({
    selector: 'materiel',
    templateUrl: 'materiel.template.html',
    providers: [TeacherService]
})

@Injectable()
export class materielComponent { 

	teachers: any = [
		{ first: "David ",
			last: "FONTAINE",
			job: "SANGO",
			company: "Sloth Factory",
			localisation: "le Pub du coin",
			tel: "777.777.777",
			adresse:"14 Rue Saint-Hélier",
			ville: "35000 Rennes",
			pic: "../../assets/img/landing/logo/sango.png"},

		{ first: "Marguerita ",
			last: "DELAUNE",
			job: "YUNO",
			company: "Error Factory",
			localisation: "Le Tregor...",
			tel: "666.666.666",
			adresse: "1 Rue de la perdition numérique",
			ville: "22300 Lannion",
			pic: "../../assets/img/landing/logo/yuno.jpg"},

		{ first: "Sloth ",
			last: "SENIOR",
			job: "NINO",
			company: "himself",
			localisation: "his bed",
			tel : "no tel",
			adresse: "2 rue du lit",
			ville: "In your Ass",
			pic: "../../assets/img/landing/logo/nino.jpg"},

		{ first: "Sloth ",
			last: "SENIOR",
			job: "ICONIA",
			company: "himself",
			localisation: "his bed",
			tel : "no tel",
			adresse: "2 rue du lit",
			ville: "In your Ass",
			pic: "../../assets/img/landing/logo/iconia.jpg"},
	];

	constructor(private teacherService: TeacherService) {
		this.teacherService.getAllTeacher().subscribe(teacher => {
			console.log('got some teachers', teacher.json());
			this.teachers = teacher.json();
		})
	}
}