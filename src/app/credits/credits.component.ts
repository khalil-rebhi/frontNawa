import { Component, OnInit } from '@angular/core';
import { Credit } from '../core/model/Credit';
import { HttpClient } from '@angular/common/http';
import { SimulateService } from '../core/service/simulate.service';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {


  constructor(private service:SimulateService) { }

  ngOnInit(): void {
  }

}
