import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Credit } from 'src/app/core/model/Credit';
import { CreditService } from 'src/app/core/service/credit.service';

@Component({
  selector: 'app-detail-credit',
  templateUrl: './detail-credit.component.html',
  styleUrls: ['./detail-credit.component.css']
})
export class DetailCreditComponent implements OnInit {

  credit : Credit; 

  constructor(private creditService: CreditService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let index = this.activatedRoute.snapshot.params['id'];
    this.creditService.getOneCredit(index).subscribe(result => this.credit = result
    )    
  }

}
