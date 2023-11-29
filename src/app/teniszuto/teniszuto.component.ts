import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { map } from 'rxjs';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-teniszuto',
  templateUrl: './teniszuto.component.html',
  styleUrls: ['./teniszuto.component.css']
})
export class TeniszutoComponent {
  products:any
  keresendo:any=""
  constructor(private base:BaseService, private search:SearchService){

    this.search.getKeresendo().subscribe(
      (k)=>this.keresendo=k
    )

    this.base.getProducts().snapshotChanges().pipe(
      map(
        (changes:any)=>changes.map(
          (c:any)=>({key:c.payload.key, ...c.payload.val()})
        )
      )
    ).subscribe(
      (data:any)=>{
        this.products=data       
      }
    )
  }
}
