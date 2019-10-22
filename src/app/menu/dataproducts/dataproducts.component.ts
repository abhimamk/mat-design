import { GetservService } from './../../services/getserv.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/classes/product';

@Component({
  selector: 'app-dataproducts',
  templateUrl: './dataproducts.component.html',
  styleUrls: ['./dataproducts.component.css']
})
export class DataproductsComponent implements OnInit {
  arr: Product[] = [];
  name: string = "watch";
  // loading:boolean=true;
  constructor(private _data: GetservService,private _router:Router) { }
  ngOnInit() {
    // this.loading=true;
    this._data.getAllProducts().subscribe(
      (data: Product[]) => {
        this.arr = data;
        // this.loading=false;
      },
      function(error) {
        alert(error);
      },
      function() {}
    );
  }
  onProductDelete(item: Product) {
    this._data.deleteProduct(item.pro_id).subscribe((data: any) => {
      this.arr.splice(this.arr.indexOf(item), 1);
      alert("deleted");
    });
  }
  onProductEdit(item:Product){
    this._router.navigate(['/product/editproduct',item.pro_id]);
  }
  onSideBarClick(value) {
    if (value != "") {
      this.arr = this.arr.filter(x => x.pro_name.indexOf(value) != -1);
    } else {
      this._data.getAllProducts().subscribe(
        (data: Product[]) => {
          this.arr = data;
        },
        function(error) {
          alert(error);
        },
        function() {}
      );
    }
  }
}
