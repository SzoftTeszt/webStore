import { Component } from '@angular/core';
import { ConfigService } from '../config.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  fontosAdat:any
  keresendo:any

  constructor(private config:ConfigService, private search:SearchService){
    this.config.getConfig().subscribe(
      (adat)=>this.fontosAdat=adat
    )
  }
  keres(){
    console.log("Esemény", this.keresendo)
    this.search.setKeresendo(this.keresendo)
  }
}
