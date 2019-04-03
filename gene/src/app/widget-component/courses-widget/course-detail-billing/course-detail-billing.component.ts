import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ms-course-detail-billing',
  templateUrl: './course-detail-billing.component.html',
  styleUrls: ['./course-detail-billing.component.scss']
})

export class CourseDetailBillingComponent implements OnInit {

	@Input() billingDetails : any = [];

	constructor() { }

	ngOnInit() {
	}

}
