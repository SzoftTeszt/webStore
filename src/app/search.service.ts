import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  keresendo= new BehaviorSubject("")
  constructor() { }
  getKeresendo(){
    return this.keresendo
  }
  setKeresendo(szo:any){
    this.keresendo.next(szo)
  }
}
