import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ms-commingsoon',
  templateUrl: './commingsoon.component.html',
  styleUrls: ['./commingsoon.component.scss']
})
export class CommingsoonComponent implements OnInit {

	days 					: any;
	hours 				: any;
	minutes		 		: any;
	seconds  			: any;
	difference			: any;
	countDownDate     : any;
	currentTimeStamp  : any = new Date().getTime();

	constructor(private pageTitleService: PageTitleService, private translate : TranslateService) { }

	ngOnInit() {
		this.countDownDate = this.currentTimeStamp+(86400*10*1000);
		setInterval(() => {	
			this.counterDown();
		},1000)
		this.pageTitleService.setTitle("Commingsoon");
	}

	//counterDown method is used to Time calculations for days, hours, minutes and seconds.
	counterDown() {
		this.currentTimeStamp = new Date().getTime();
		this.difference = this.countDownDate - this.currentTimeStamp;
		this.days = Math.floor(this.difference / (1000 * 60 * 60 * 24));
		this.hours = Math.floor((this.difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		this.minutes = Math.floor((this.difference % (1000 * 60 * 60)) / (1000 * 60));
		this.seconds = Math.floor((this.difference % (1000 * 60)) / 1000);
	}
}
