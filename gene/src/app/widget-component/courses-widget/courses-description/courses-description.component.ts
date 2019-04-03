import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ms-courses-description',
  templateUrl: './courses-description.component.html',
  styleUrls: ['./courses-description.component.scss']
})

export class CoursesDescriptionComponent implements OnInit {
	
	@Input() course;
	
	constructor() { }

	ngOnInit() {
	}

}
