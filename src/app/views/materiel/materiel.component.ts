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
		{ titre: "SANGO",
			job: "TACTILE AURES SANGO",
			descript: "Sloth Factory",
			compo: "le Pub du coin",
			conclu: "777.777.777",
			pic: "../../assets/img/landing/logo/sango.png"},

		{ titre: "YUNO",
			job: "TACTILE AURES YUNO",
			descript: "Sloth Factory",
			compo: "le Pub du coin",
			conclu: "777.777.777",
			pic: "../../assets/img/landing/logo/yuno.jpg"},

		{ titre: "SANGO",
			job: "TACTILE AURES SANGO",
			descript: "Sloth Factory",
			compo: "le Pub du coin",
			conclu: "777.777.777",
			pic: "../../assets/img/landing/logo/nino.jpg"},

		{ titre: "SANGO",
			job: "TACTILE ICONIA W510",
			descript: "Sloth Factory",
			compo: "le Pub du coin",
			conclu: "777.777.777",
			pic: "../../assets/img/landing/logo/iconia.jpg"},
	];

	constructor(private teacherService: TeacherService) {
		this.teacherService.getAllTeacher().subscribe(teacher => {
			console.log('got some teachers', teacher.json());
			this.teachers = teacher.json();
		})
	}
}