import { Component, Injectable } from '@angular/core';
import { TeacherService } from '../../services/logiciel.service'

@Component({
    selector: 'peripherique',
    templateUrl: 'peripherique.template.html',
    providers: [TeacherService]
})

@Injectable()
export class peripheriqueComponent { 

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
	];

	constructor(private teacherService: TeacherService) {
		this.teacherService.getAllTeacher().subscribe(teacher => {
			console.log('got some teachers', teacher.json());
			this.teachers = teacher.json();
		})
	}
}