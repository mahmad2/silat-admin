import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PageTitleService } from '../../core/page-title/page-title.service';

@Component({
  selector: 'ms-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SigninComponent implements OnInit {

	constructor( public translate : TranslateService,
					 private pageTitleService : PageTitleService) { }

	ngOnInit() {
		this.pageTitleService.setTitle("Sign In");
	}

}
