import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(adatok:any, keresendo:any) {
    if (!adatok) return null
    if (!keresendo) return adatok

    return adatok.filter(
      (e:any)=>{
        return JSON.stringify(e).toLowerCase().includes(keresendo.toLowerCase())}
    )
  }

}
