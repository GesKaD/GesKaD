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
		{ titre: "CS FIRST ",
			descript: "Concu pour les commerces en début d'activité ou désirant une grande simplicité d'utilisation",
			compo: "CS FISRT comprend l'encaissement, les statistiques et la programmation",
			conclu: "Commencer simple pour pouvoir évoluer vers les licences plus completes",
			job: "LOGICIEL DE CAISSE VERSION FIRST"
			pic: "../../assets/img/landing/logo/clyofirst.jpg"},

		{ titre: "CS STD",
			descript: "Pour les clients plus exigent ou pour plusieurs points d'encaissements",
			compo: "CS STD comprend l'encaissement, les statistiques et la programmation",
			conclu: "Aborder les fortes afluances avec cérénité",
			job: "LOGICIEL DE CAISSE VERSION STD"
			pic: "../../assets/img/landing/logo/clyostd.jpg"},

		{ titre: "CS PME ",
			descript: "Soyer plus proche de vos clients en gardant le contact",
			compo: "CS PME comprend l'encaissement, les statistiques, la programmation et la relation client",
			conclu: "Developper votre clientel",
			job: "LOGICIEL DE CAISSE VERSION PME"
			pic: "../../assets/img/landing/logo/clyopme.jpg"},

		{ titre: "CS PRO ",
			descript: "Maitriser votre marchandise",
			compo: "CS PRO comprend l'encaissement, les statistiques, la programmation, la relation client et la gestion de stock",
			conclu: "Les grands projets meritent le bon logiciel",
			job: "LOGICIEL DE CAISSE VERSION PRO"
			pic: "../../assets/img/landing/logo/clyopro.jpg"},
	];

	constructor(private teacherService: TeacherService) {
		this.teacherService.getAllTeacher().subscribe(teacher => {
			console.log('got some teachers', teacher.json());
			this.teachers = teacher.json();
		})
	}
}