import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class TeacherService {

	private getAllTeacherUrl = 'http://localhost:3333/teacher/get';

	constructor(@Inject(Http) private http: Http) {

	}

	getAllTeacher() {
		return this.http.get(this.getAllTeacherUrl);
	}

}