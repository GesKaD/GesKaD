import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {studentViewComponent} from "./student-view.component";

@NgModule({
    declarations: [studentViewComponent],
    imports     : [BrowserModule],
})

export class StudentViewModule {}