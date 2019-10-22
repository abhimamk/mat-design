import { GetservService } from './getserv.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { productResolved } from '../classes/product';
import { Observable, of } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductresloverServService implements Resolve<productResolved> {

  constructor(private _proresv:GetservService) { }
  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<any>{
    return this._proresv.getAllProducts().pipe(
      map(x=>({products:x,errormsg:''})),
      catchError(error=>{
        return of({products:null,errormsg:'Something went wrong'})
      })
    );

  }
}
