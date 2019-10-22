import { GetservService } from './../../services/getserv.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent implements OnInit {
  arr: Product[] = [];
  constructor(private _data:GetservService) { }

  ngOnInit() {}
  onSaveProduct(f) {
    this._data.addProduct(f.value).subscribe((data: any) => {
      console.log(data);
    });
  }
}
