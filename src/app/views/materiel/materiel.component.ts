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
			brevet: "Brevet N° 13/51321 – Modèles déposés N° 13/1091 - Copyright AURES 2017",
			descript: "Concept exclusif permettant de libérer l’espace sous l’écran tactile de caisse",
			compo: "Ne reposant sur aucun socle massif ou trop imposant, Sango s’élance avec légèreté, comme en apesanteur, afin d’offrir et révéler un espace traditionnellement occupé par l’unité centrale et la carte mère. Elégamment rattaché à son bras déporté en aluminium, véritable exo-squelette du TPV et support de son cœur technologique (UC), il conjugue esthétique minimaliste, ergonomie et faible consommation énergétique.",
			conclu: "Sublimés par la brillance du polycarbonate, les sept coloris modulables de Sango (White, Black, Red, Blue, Orange, Grey et Cassis) apportent la touche finale à l’identité visuelle des enseignes, jusqu’au point d’encaissement.",
			pic: "../../assets/img/landing/logo/sango.png"},

		{ titre: "YUNO",
			job: "TACTILE AURES YUNO",
			descript: "Un terminal point de vente stylé et ‘’tout terrain’’",
			compo: "Disponible en 2 formats d’écran (15,1 pouces 4/3 traditionnel et 15,6 pouces Wide de type 16/9ème), sa dalle capacitive projetée est multi-touch (technologie PCAP)  et résiste aux chocs et aux rayures.Tout-terrain et tout en style à la fois, YUNO a été pensé par AURES pour s’adapter à de multiples applications : il est modulable et déclinable en version VESA (utilisation en support mural - sans son socle - ou en positionnement sur mât) ; il est également proposé en option simple écran tactile (moniteurs de 15,1’’ et 15,5’’ Wide).",
			conclu: "Accessible et d’un excellent rapport qualité-prix au vu de ses nombreux atouts (technologies, ergonomie, innovation et design), YUNO représente un investissement raisonnable, rentable et durable pour tous les parcs informatiques POS",
			pic: "../../assets/img/landing/logo/yuno.jpg"},

		{ titre: "NINO",
			job: "TACTILE AURES NINO",
			descript: "Mini TPV tout en un et re-pliable",
			compo: "Le plus petit TPV du marché offre des performances accrues, une flexibilité à toute épreuve et un encombrement minimal ! Son pied (socle) en aluminium soutient un bras pivotant, entièrement ajustable, qui lui permet de se plier totalement, à plat, pour un gain de place parfaitement optimisé (d'autant plus qu'il intègre l'alimentation, pour plus de compacité et de mobilité) ;   il est disponible en plusieurs coloris (optionnelles) et avec différents accessoires de montage et fixations VESA (pour applications murales, sur pied, sur mât).",
			conclu: "Equipé d'un SSD en standard ou d'un HDD (disque dur traditionnel en option)-  il est fanless (sans ventilation) et parfait dans les environnements difficiles, toujours en adéquation avec les exigences des normes environnementales (moindre consommation énergétique et faible empreinte carbone). Ninô II est le partenaire idéal des enseignes éphémères, des commerces nomades, des « food trucks » et autres « pop-up stores & shops » - et de leur mobilité.",
			pic: "../../assets/img/landing/logo/nino.jpg"},

		{ titre: "ICONIA",
			job: "TACTILE ICONIA W510",
			descript: "2 utilisations : En tablette sur écran tactile ou en ordinateur portable avec clavier",
			compo: "blabla",
			conclu: "blabla",
			pic: "../../assets/img/landing/logo/iconia.jpg"},
	];

	constructor(private teacherService: TeacherService) {
		this.teacherService.getAllTeacher().subscribe(teacher => {
			console.log('got some teachers', teacher.json());
			this.teachers = teacher.json();
		})
	}
}