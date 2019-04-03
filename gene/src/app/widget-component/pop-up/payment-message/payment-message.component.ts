import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'ms-payment-message',
  templateUrl: './payment-message.component.html',
  styleUrls: ['./payment-message.component.scss']
})
export class PaymentMessageComponent implements OnInit {

	paymentMessage : string; 

	constructor( public dialogRef : MatDialogRef<PaymentMessageComponent>,
				 public router : Router) { }

	ngOnInit() {
	}

}
