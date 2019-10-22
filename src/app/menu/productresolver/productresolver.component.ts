import { Component, OnInit } from '@angular/core';
import { Product } from '../../classes/product';
import { ActivatedRoute } from '@angular/router';
import { GetservService } from '../../services/getserv.service';

@Component({
  selector: 'app-productresolver',
  templateUrl: './productresolver.component.html',
  styleUrls: ['./productresolver.component.css']
})
export class ProductresolverComponent implements OnInit {
  arr:Product[]=[];
  productData:any;
  errormessage:string;
  constructor(private _data: GetservService,private _actroute:ActivatedRoute) {
    this.productData=this._actroute.snapshot.data["pdata"];
    console.log(this.productData);
   }

  ngOnInit() {
    this.arr=this.productData.products;
    console.log(this.arr);
    this.errormessage=this.productData.errormsg;
  }
  onProductDelete(item: Product) {
    this._data.deleteProduct(item.pro_id).subscribe((data: any) => {
      this.arr.splice(this.arr.indexOf(item), 1);
      alert("deleted");
    });
  }
  // onProductEdit(item:Product){
  //   this._router.navigate(['/product/editproduct',item.pro_id]);
  // }
}
